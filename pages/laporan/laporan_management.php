<?php
error_reporting(0);
session_start();
include "../../function.php";

$key            = $_POST['key'];
$id_pengurus    = $_POST['id'];
$pengajuan      = $_POST['kategori'];
if ($pengajuan == "Aset Yayasan") {
    $jenis          = $_POST['jenis'];
    $qty_acak       = mysqli_real_escape_string($conn, $_POST["qty"]);
    $tableInput     = "aset_yayasan";
    $qtyPakai       = RemoveSpecialChar($qty_acak);
    $qty            = str_replace(' ', '', $qtyPakai);

} elseif ($pengajuan == "Uang Makan") {
    $tableInput     = "uang_makan";

} elseif ($pengajuan == "Gaji Karyawan") {
    $tableInput     = "gaji_karyawan";

} elseif ($pengajuan == "Biaya Lainnya") {
    $tableInput = "anggaran_lain";

} elseif ($pengajuan == "Maintenance") {
    $tableInput = "maintenance";

} elseif ($pengajuan == "Operasional Yayasan") {
    $tableInput = "operasional_yayasan";
    
} else {
    $tableInput = "jasa";

}
$tglLaporan     = mysqli_real_escape_string($conn, $_POST["tglLaporan"]);
$pemakaian      = mysqli_real_escape_string($conn, $_POST["pemakaian"]);
$nom_acak       = mysqli_real_escape_string($conn, $_POST["terpakai"]);
$nameExcel      = $_FILES['excel']['name'];
$tmpExcel       = $_FILES['excel']['tmp_name'];
$sizeExcel      = $_FILES['excel']['size'];
$pakai          = RemoveSpecialChar($nom_acak);
$terpakai       = str_replace(' ', '', $pakai);
$ip             = get_client_ip();
$date           = date("Y-m-d H:i:s");

$valid_extensions = array('jpeg', 'jpg', 'png'); // valid extensions
$path   = "../../assets/images/laporan/$tableInput/"; // upload directory
$dir    = "../../assets/doc/$tableInput/";

$qExcel = mysqli_query($conn, "SELECT dokumen FROM input_$tableInput WHERE dokumen = '$nameExcel'");
$nExcel = $qExcel->num_rows;
if ($nExcel > 0) {
    echo '2';
    return false;

} else if ($sizeExcel > 5000000) {
    echo 4;
    return false;

} else {
    move_uploaded_file($tmpExcel, $dir.$nameExcel);
}

if($_FILES['image'])
{
    foreach ($_FILES['image']['name'] as $id => $val) {
        
        $img    = $_FILES['image']['name'][$id];
        $tmp    = $_FILES['image']['tmp_name'][$id];
        $size   = $_FILES["image"]["size"][$id];
        
        // get uploaded file's extension
        $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));

        // check's valid format
        if(!in_array($ext, $valid_extensions)) {   
            echo "<script>
            alert('yang di upload bukan gambar');
            </script>";
            return false;
        } 

        if ($size > 10000000) {
            echo 3;
            return false;
        }

        // generate nama baru gambar
        $namagambarbaru = uniqid();
        $namagambarbaru .= '.';
        $namagambarbaru .= $ext;

        $targetFilePath = $path . $namagambarbaru;

        if(move_uploaded_file($tmp,$targetFilePath)){			  
            $source_image = $targetFilePath;
            $image_destination = $path."min-".$namagambarbaru;
            $compress_images = compressImage($source_image, $image_destination, 75);
            unlink("$targetFilePath");		 
        }

        $result = mysqli_query($conn, "INSERT INTO galeri_$tableInput (nomor_id, id_pengurus, program, nama, dokumentasi) VALUES (
            '$key', 
            '$id_pengurus', 
            '$pengajuan', 
            '{$dataLog[nama]}', 
            'min-$namagambarbaru') 
        ");
    }
}

if ($pengajuan == "Aset Yayasan") {
    $sql ="UPDATE input_$tableInput SET tgl_laporan = '$tglLaporan', pemakaian = '$pemakaian', qty_pembelian = '$qty', dana_terpakai = '$terpakai', laporan = 'Menunggu Verifikasi', dokumen = '$nameExcel' WHERE id = '$key'";
    
} else {
    $sql ="UPDATE input_$tableInput SET tgl_laporan = '$tglLaporan', pemakaian = '$pemakaian', dana_terpakai = '$terpakai', laporan = 'Menunggu Verifikasi', dokumen = '$nameExcel' WHERE id = '$key'";
}

$update = mysqli_query($conn, $sql);

$tanggal = date("d-m-Y" , strtotime($tglLaporan));

    mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
        '{$dataLog[nama]}', 
        '{$dataLog[posisi]}', 
        '$ip', 
        '$date', 
        '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Menginput Laporan $pengajuan tanggal $tanggal untuk pemakaian $pemakaian')
    ");


$qPengajuan   = mysqli_query($conn, "SELECT * FROM input_$tableInput WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
$qPengajuan2  = mysqli_query($conn, "SELECT * FROM input_$tableInput WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
$numPengajuan = $qPengajuan2->num_rows;

if ($numPengajuan > 0) {
    echo '<option selected value="">Pilih Salah Satu Laporan</option>';
    while($data = mysqli_fetch_array($qPengajuan)) {
        echo '<option value="'.$data["id"].'">'.ucwords($data["deskripsi"]).'</option>';
    }

} else {
    echo '0';
}

$conn->close();

?>