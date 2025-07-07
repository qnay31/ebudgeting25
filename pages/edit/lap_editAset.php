<?php
error_reporting(0);
session_start();
include "../../function.php";

$id             = mysqli_real_escape_string($conn, $_POST["inputId"]);
$pengajuan      = mysqli_real_escape_string($conn, $_POST["inputPengajuan"]);
$tglLaporan     = mysqli_real_escape_string($conn, $_POST["inputTgl"]);
$qtyTerpakai    = mysqli_real_escape_string($conn, $_POST["inputQty"]);
$pemakaian      = mysqli_real_escape_string($conn, $_POST["inputPemakaian"]);
$nom_acak       = mysqli_real_escape_string($conn, $_POST["inputTerpakai"]);
$pakai          = RemoveSpecialChar($nom_acak);
$terpakai       = str_replace(' ', '', $pakai);
$ip             = get_client_ip();
$date           = date("Y-m-d H:i:s");
// die(var_dump([$id, $tglLaporan, $pemakaian, $terpakai]));

$query  = mysqli_query($conn, "SELECT * FROM input_aset_yayasan WHERE qty_pembelian = '$qtyTerpakai' AND tgl_laporan = '$tglLaporan' AND pemakaian = '$pemakaian' AND dana_terpakai = '$terpakai' ");
$num    = $query->num_rows;

if($num === 1) {
    echo "1"; 
    
} else {
    echo "0";

    $sql ="UPDATE input_aset_yayasan SET qty_pembelian = '$qtyTerpakai', tgl_laporan = '$tglLaporan', pemakaian = '$pemakaian', dana_terpakai = '$terpakai' WHERE id = '$id'";
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

$conn->close();
    
?>