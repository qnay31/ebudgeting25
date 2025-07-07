<?php
error_reporting(0);
session_start();
include "../../function.php";

$id             = mysqli_real_escape_string($conn, $_POST["inputId"]);
$pengajuan      = mysqli_real_escape_string($conn, $_POST["inputPengajuan"]);
if ($dataLog["id_pengurus"] == "admin_web") {
    $qKategori   = mysqli_query($conn, "SELECT * FROM input_paudqu WHERE id = '$id'");
    $dKategori   = $qKategori->fetch_assoc();

    $tglPengajuan   = mysqli_real_escape_string($conn, $_POST["inputTglPengajuan"]);
    $perencanaan    = mysqli_real_escape_string($conn, $_POST["inputPerencanaan"]);
    $nom_anggar     = mysqli_real_escape_string($conn, $_POST["inputAnggaran"]);
    $anggar         = RemoveSpecialChar($nom_anggar);
    $anggaran       = str_replace(' ', '', $anggar);

    if ($dKategori["dana_terpakai"] > 0) {
        $tglLaporan     = mysqli_real_escape_string($conn, $_POST["inputTgl"]);
        $pemakaian      = mysqli_real_escape_string($conn, $_POST["inputPemakaian"]);
        $nom_acak       = mysqli_real_escape_string($conn, $_POST["inputTerpakai"]);
        $pakai          = RemoveSpecialChar($nom_acak);
        $terpakai       = str_replace(' ', '', $pakai);
    }

} else {
    $tglLaporan     = mysqli_real_escape_string($conn, $_POST["inputTgl"]);
    $pemakaian      = mysqli_real_escape_string($conn, $_POST["inputPemakaian"]);
    $nom_acak       = mysqli_real_escape_string($conn, $_POST["inputTerpakai"]);
    $pakai          = RemoveSpecialChar($nom_acak);
    $terpakai       = str_replace(' ', '', $pakai);
}

$ip             = get_client_ip();
$date           = date("Y-m-d H:i:s");
// die(var_dump([$id, $tglLaporan, $pemakaian, $terpakai]));

if ($dataLog["id_pengurus"] == "admin_web") {
    if ($dKategori["dana_terpakai"] > 0) {
        $query  = mysqli_query($conn, "SELECT * FROM input_paudqu WHERE tgl_pengajuan = '$tglPengajuan' AND deskripsi = '$perencanaan' AND dana_anggaran = '$anggaran' AND tgl_pemakaian = '$tglLaporan' AND deskripsi_pemakaian = '$pemakaian' AND dana_terpakai = '$terpakai' ");

    } else {
        $query  = mysqli_query($conn, "SELECT * FROM input_paudqu WHERE tgl_pengajuan = '$tglPengajuan' AND deskripsi = '$perencanaan' AND dana_anggaran = '$anggaran' ");
    }
    
} else {
    $query  = mysqli_query($conn, "SELECT * FROM input_paudqu WHERE tgl_pemakaian = '$tglLaporan' AND deskripsi_pemakaian = '$pemakaian' AND dana_terpakai = '$terpakai' ");
}

$num    = $query->num_rows;

if($num === 1) {
    echo "1"; 
    
} else {
    echo "0";

    if ($dataLog["id_pengurus"] == "admin_web") {
        if ($dKategori["dana_terpakai"] > 0) {
            $sql ="UPDATE input_paudqu SET tgl_pengajuan = '$tglPengajuan', deskripsi = '$perencanaan', dana_anggaran = '$anggaran', tgl_pemakaian = '$tglLaporan', deskripsi_pemakaian = '$pemakaian', dana_terpakai = '$terpakai', laporan = 'Menunggu Verifikasi' WHERE id = '$id'";
    
        } else {
            $sql ="UPDATE input_paudqu SET tgl_pengajuan = '$tglPengajuan', deskripsi = '$perencanaan', dana_anggaran = '$anggaran' WHERE id = '$id'";
        }
        $hasil = mysqli_query($conn,$sql);
    } else {
        $sql ="UPDATE input_paudqu SET tgl_pemakaian = '$tglLaporan', deskripsi_pemakaian = '$pemakaian', dana_terpakai = '$terpakai' WHERE id = '$id'";
        $hasil = mysqli_query($conn,$sql);

        mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
        '{$dataLog[nama]}', 
        '{$dataLog[posisi]}', 
        '$ip', 
        '$date', 
        '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Mengubah Data Laporan dari Pengajuan $pengajuan')
    ");

    }
}

$conn->close();

?>