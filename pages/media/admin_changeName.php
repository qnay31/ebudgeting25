<?php
session_start();
// error_reporting(0);

include '../../function.php';

$nama       = mysqli_real_escape_string($conn, $_POST["inputNama"]);
$akun       = mysqli_real_escape_string($conn, $_POST["inputAkun"]);
$newName    = mysqli_real_escape_string($conn, $_POST["inputNewName"]);

$newAccount = strtolower($newName);

$query  = mysqli_query($conn, "SELECT * FROM data_akun WHERE nama_akun = '$newAccount' ");
$num    = $query->num_rows;

if ($num === 1) {
    echo '1';

} else {
    echo '0';
    $sql    = mysqli_query($conn, "UPDATE data_akun SET nama_akun = '$newAccount' WHERE nama_akun = '$akun'");
    $sql2    = mysqli_query($conn, "UPDATE input_income_media SET nama_akun = '$newAccount' WHERE nama_akun = '$akun'");
    $sql3    = mysqli_query($conn, "UPDATE input_laporan_media SET nama_akun = '$newAccount' WHERE nama_akun = '$akun'");
    
}

?>