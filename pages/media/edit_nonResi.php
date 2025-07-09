<?php
error_reporting(0);
session_start();
include "../../function.php";

$id             = mysqli_real_escape_string($conn, $_POST["inputId"]);
$tanggalName    = mysqli_real_escape_string($conn, $_POST["tanggalName"]);
$nom_acak       = mysqli_real_escape_string($conn, $_POST["incomeName"]);
$tf             = RemoveSpecialChar($nom_acak);
$transfer       = str_replace(' ', '', $tf);
$ip             = get_client_ip();
$date           = date("Y-m-d H:i:s");

$query  = mysqli_query($conn, "SELECT * FROM input_incometanparesi WHERE tgl_pemasukan = '$tanggalName' AND income = '$transfer' ");
$num    = $query->num_rows;


if($num === 1 ) {
    echo "1";
      
} else {
    echo "0";
    
    $sql = "UPDATE input_incometanparesi SET 
    tgl_pemasukan   = '$tanggalName', 
    income       = '$transfer' 
    WHERE id = '$id'";
    $hasil = mysqli_query($conn,$sql);   

    $tanggal = date("d-m-Y" , strtotime($tanggalName));
    mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '{$dataLog[nama]}', 
            '{$dataLog[posisi]}', 
            '$ip', 
            '$date', 
            '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Mengubah Data Income Non Resi di tanggal $tanggal')
        ");

}

?>