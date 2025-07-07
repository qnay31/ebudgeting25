<?php
error_reporting(0);
session_start();
include "../../function.php";

$id             = mysqli_real_escape_string($conn, $_POST["inputId"]);
$program        = mysqli_real_escape_string($conn, $_POST["inputProgram"]);
$kategori       = mysqli_real_escape_string($conn, $_POST["inputKategori"]);
$tglPengajuan   = mysqli_real_escape_string($conn, $_POST["inputTgl"]);
$perencanaan    = mysqli_real_escape_string($conn, $_POST["inputRencana"]);
$nom_acak       = mysqli_real_escape_string($conn, $_POST["inputAnggaran"]);
$anggar         = RemoveSpecialChar($nom_acak);
$anggaran       = str_replace(' ', '', $anggar);
$ip             = get_client_ip();
$date           = date("Y-m-d H:i:s");
// die(var_dump([$id, $tglPengajuan, $perencanaan, $anggaran]));

$query  = mysqli_query($conn, "SELECT * FROM input_program WHERE tgl_pengajuan = '$tglPengajuan' AND deskripsi = '$perencanaan' AND dana_anggaran = '$anggaran' ");
$num    = $query->num_rows;

if($num === 1) {
    echo "1"; 
    
} else {
    echo "0";

    $sql ="UPDATE input_program SET tgl_pengajuan = '$tglPengajuan', deskripsi = '$perencanaan', dana_anggaran = '$anggaran' WHERE id = '$id'";
    $hasil = mysqli_query($conn,$sql);

    mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
        '{$dataLog[nama]}', 
        '{$dataLog[posisi]}', 
        '$ip', 
        '$date', 
        '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Mengubah Data Anggaran dari Pengajuan $program')
    ");

}

$conn->close();
    
?>