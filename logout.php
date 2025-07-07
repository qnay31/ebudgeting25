<?php 
session_start();
error_reporting(0);

require 'function.php';

$date   = date("Y-m-d H:i:s");
$ip     = get_client_ip();

$key    = $_GET['key'];

if ($_COOKIE["id_pengurus"] == "admin_web") {} else {

    if ($key) {
        $query = mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE username = '$key' ");
        $dataLog        = $query->fetch_assoc();   
    }
        $sql = mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '{$dataLog[nama]}', 
            '{$dataLog[posisi]}', 
            '$ip', 
            '$date', 
            '{$dataLog[nama]} {$dataLog[posisi]} Telah Logout dari halamannya')
        ");
    }
session_destroy();
session_unset();

setcookie('id_pengurus', '', time() + (10 * 365 * 24 * 60 * 60) );
setcookie('username', '', time() - (10 * 365 * 24 * 60 * 60) );

header("Location: ./");
exit;

?>