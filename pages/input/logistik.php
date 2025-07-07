<?php
error_reporting(0);
session_start();
include "../../function.php";

$pengajuan      = mysqli_real_escape_string($conn, $_POST["selectPengajuan"]);
$tglPengajuan   = mysqli_real_escape_string($conn, $_POST["inputTgl"]);
$perencanaan    = mysqli_real_escape_string($conn, $_POST["inputRencana"]);
$nom_acak       = mysqli_real_escape_string($conn, $_POST["inputAnggaran"]);
$anggar         = RemoveSpecialChar($nom_acak);
$anggaran       = str_replace(' ', '', $anggar);
$ip             = get_client_ip();
$date           = date("Y-m-d H:i:s");
// die(var_dump([$id, $posisi, $pengajuan, $tglPengajuan, $perencanaan, $anggaran]));

$query  = mysqli_query($conn, "SELECT * FROM input_logistik WHERE deskripsi = '$perencanaan' ");
$num    = $query->num_rows;

if($num === 1 ) {
    echo "1";
    
} else {
    echo "0";
    $sql ="INSERT INTO input_logistik (id_pengurus, posisi, logistik, tgl_pengajuan, deskripsi, dana_anggaran, tgl_pemakaian, deskripsi_pemakaian, dana_terpakai, status, laporan, dokumen) VALUES (
        '{$dataLog[id_pengurus]}',
        '{$dataLog[posisi]}',
        '$pengajuan', 
        '$tglPengajuan', 
        '$perencanaan', 
        '$anggaran',
        NULL, '', '',
        'Pending', 
        'Belum Laporan', ''
    )";

    $hasil = mysqli_query($conn,$sql);

    $tanggal = date("d-m-Y" , strtotime($tglPengajuan));

    mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
        '{$dataLog[nama]}', 
        '{$dataLog[posisi]}', 
        '$ip', 
        '$date', 
        '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Menginput $kategori tanggal $tanggal untuk anggaran $perencanaan')
    ");

}
$conn->close();

?>