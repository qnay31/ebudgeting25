<?php
error_reporting(0);

include '../../function.php';

$akun       = mysqli_real_escape_string($conn, $_POST["inputAkun"]);
$newName    = mysqli_real_escape_string($conn, $_POST["inputNewAccount"]);

mysqli_query($conn, "UPDATE input_income_media SET nama_akun = '$newName' WHERE nama_akun = '$akun'");
    
?>