<?php
error_reporting(0);
session_start();
include "../../function.php";

$id             = mysqli_real_escape_string($conn, $_POST["inputId"]);
$tanggalName    = mysqli_real_escape_string($conn, $_POST["tanggalName"]);
if ($dataLog["id_pengurus"] == "kepala_income") {
    $query  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tanggalName' ");

} else {
    $donaturName    = mysqli_real_escape_string($conn, $_POST["donaturName"]);
    $jamName        = mysqli_real_escape_string($conn, $_POST["jamName"]);
    $bankName       = mysqli_real_escape_string($conn, $_POST["bankName"]);
    $nom_acak       = mysqli_real_escape_string($conn, $_POST["transferName"]);
    $tf             = RemoveSpecialChar($nom_acak);
    $transfer       = str_replace(' ', '', $tf);
    $ip             = get_client_ip();
    $date           = date("Y-m-d H:i:s");
    $query  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE nama_donatur = '$donaturName' AND tanggal_tf = '$tanggalName' AND jam_tf = '$jamName'  AND bank = '$bankName' AND jumlah_tf = '$transfer' ");
}
$num    = $query->num_rows;

if($num === 1 ) {
    echo "1";
    
} else {
    echo "0";

    if ($dataLog["id_pengurus"] == "kepala_income") {
        $sql = "UPDATE input_income_media SET 
        tanggal_tf      = '$tanggalName' 
        WHERE id = '$id'";
        $hasil = mysqli_query($conn,$sql);

    } else {
        $sql = "UPDATE input_income_media SET 
        nama_donatur    = '$donaturName', 
        tanggal_tf      = '$tanggalName', 
        jam_tf          = '$jamName', 
        bank            = '$bankName', 
        jumlah_tf       = '$transfer' 
        WHERE id = '$id'";
        $hasil = mysqli_query($conn,$sql);

        $tanggal = date("d-m-Y" , strtotime($tanggalName));
        mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '{$dataLog[nama]}', 
            '{$dataLog[posisi]}', 
            '$ip', 
            '$date', 
            '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Mengubah Data Income Media di tanggal $tanggal atas nama donatur $donaturName')
        ");
    }
    

}

?>