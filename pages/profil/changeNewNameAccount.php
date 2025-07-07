<?php
session_start();
// error_reporting(0);

include '../../function.php';

$id         = mysqli_real_escape_string($conn, $_POST["inputId"]);
$akun       = mysqli_real_escape_string($conn, $_POST["inputAccount"]);
$newName    = mysqli_real_escape_string($conn, $_POST["inputNewName"]);
$ip         = get_client_ip();
$date       = date("Y-m-d H:i:s");

$newAccount = strtolower($newName);

$query  = mysqli_query($conn, "SELECT * FROM data_akun WHERE nama_akun = '$newAccount' ");
$num    = $query->num_rows;
if ($num === 1) {
    echo '1';

} else {
    echo '0';

    mysqli_query($conn, "UPDATE data_akun SET nama_akun = '$newAccount', WHERE nomor_id = '$id'");
    mysqli_query($conn, "UPDATE input_income_media SET nama_akun = '$newAccount' WHERE nomor_id = '$id'");
    mysqli_query($conn, "UPDATE input_laporan_media SET nama_akun = '$newAccount' WHERE nomor_id = '$id'");

    mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '{$dataLog[nama]}', 
            '{$dataLog[posisi]}', 
            '$ip', 
            '$date', 
            '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Mengubah nama akunnya menjadi $newName')
        ");
}

?>