<?php
session_start();
error_reporting(0);

include '../../function.php';

$id                 = mysqli_real_escape_string($conn, $_POST["inputId"]);
$password           = mysqli_real_escape_string($conn, $_POST["inputPassword"]);
$confirmPassword    = mysqli_real_escape_string($conn, $_POST["inputConfirmPassword"]);
$ip                 = get_client_ip();
$date               = date("Y-m-d H:i:s");

$query  = mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE id = '$id'");
$data   = $query->fetch_assoc();


if ($password !== $confirmPassword) {
    echo '2';
    
} else if (password_verify($password, $data["password"])) {
    echo '1';

} else {
    echo '0';
    $encrypt_password = password_hash($password, PASSWORD_DEFAULT);
    $sql    = mysqli_query($conn, "UPDATE akun_pengurus SET password = '$encrypt_password' WHERE id = '$id'");

    mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '{$dataLog[nama]}', 
            '{$dataLog[posisi]}', 
            '$ip', 
            '$date', 
            '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Mengubah kata sandi sebelumnya')
        ");
    
}

?>