<?php
//Include file koneksi ke database
error_reporting(0);
session_start();
include "../../../function.php";

$team       = mysqli_real_escape_string($conn, $_POST["teamName"]);
$akunName   = mysqli_real_escape_string($conn, $_POST["akunName"]);
$mediaName  = mysqli_real_escape_string($conn, $_POST["mediaName"]);
$akun       = strtolower($akunName);
// validasi

$query = mysqli_query($conn, "SELECT * FROM data_akun WHERE nama_akun = '$akun' ");
$num = $query->num_rows;

if($num === 1 ) {
    echo "1";
    
} else {
    echo "0";

    $sql = "INSERT INTO data_akun (id_pengurus, nomor_id, pemegang, nama_akun, posisi, team, kategori) VALUES (
        '{$dataLog[id_pengurus]}', 
        '{$dataLog[id]}', 
        '{$dataLog[nama]}', 
        '$akun', 
        '{$dataLog[posisi]}', 
        '$team', 
        '$mediaName' 
    )"; 
    $hasil = mysqli_query($conn,$sql);
    
    }

?>