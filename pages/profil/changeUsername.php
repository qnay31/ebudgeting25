<?php
session_start();
error_reporting(0);

include '../../function.php';

$id         = mysqli_real_escape_string($conn, $_POST["inputId"]);
$newName    = mysqli_real_escape_string($conn, strtolower($_POST["inputName"]));
$ip         = get_client_ip();
$date       = date("Y-m-d H:i:s");

$query  = mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE username = '$newName'");
$num    = $query->num_rows;

if ($num === 1) {
    echo '1';

} else {
    $sql    = mysqli_query($conn, "UPDATE akun_pengurus SET username = '$newName' WHERE id = '$id'");

    mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '{$dataLog[nama]}', 
            '{$dataLog[posisi]}', 
            '$ip', 
            '$date', 
            '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Mengubah username nya  menjadi $newName')
        ");
    echo $newName;
}

?>