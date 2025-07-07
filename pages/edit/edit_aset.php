<?php
error_reporting(0);
session_start();
include "../../function.php";

$id             = mysqli_real_escape_string($conn, $_POST["inputId"]);
$pengajuan      = mysqli_real_escape_string($conn, $_POST["inputPengajuan"]);
$jenis          = mysqli_real_escape_string($conn, $_POST["inputJenis"]);
$qty            = mysqli_real_escape_string($conn, $_POST["inputQty"]);
$tglPengajuan   = mysqli_real_escape_string($conn, $_POST["inputTgl"]);
$perencanaan    = mysqli_real_escape_string($conn, $_POST["inputRencana"]);
$nom_acak       = mysqli_real_escape_string($conn, $_POST["inputAnggaran"]);
$anggar         = RemoveSpecialChar($nom_acak);
$anggaran       = str_replace(' ', '', $anggar);
$ip             = get_client_ip();
$date           = date("Y-m-d H:i:s");
// die(var_dump($id, $pengajuan, $jenis, $tglPengajuan, $perencanaan, $anggaran));

$query  = mysqli_query($conn, "SELECT * FROM input_aset_yayasan WHERE jenis = '$jenis' AND tgl_dibuat = '$tglPengajuan' AND deskripsi = '$perencanaan'  AND qty_anggaran = '$qty' AND dana_anggaran = '$anggaran' ");
$num    = $query->num_rows;

// die(var_dump($qty));
if($num === 1 ) {
    echo "1";
     
} else {
    echo "0";

    $sql ="UPDATE input_aset_yayasan SET tgl_dibuat = '$tglPengajuan', deskripsi = '$perencanaan', qty_anggaran = '$qty', dana_anggaran = '$anggaran' WHERE id = '$id'";
    $hasil = mysqli_query($conn,$sql);

    mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
        '{$dataLog[nama]}', 
        '{$dataLog[posisi]}', 
        '$ip', 
        '$date', 
        '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Mengubah Data Anggaran dari Pengajuan $pengajuan')
    ");

}

$conn->close();


?>