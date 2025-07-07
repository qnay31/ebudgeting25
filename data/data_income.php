<?php
session_start();
header('Content-Type: application/json; charset=utf8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require '../function.php';

$query  = mysqli_query($conn, "SELECT date_format(tanggal_tf, '%M') AS periode, SUM(jumlah_tf) AS total_tf FROM input_income_media WHERE nomor_id = '$dataLog[id]' AND status = 'OK' GROUP BY date_format(tanggal_tf, '%M') ORDER BY tanggal_tf ASC ");

$array=array();
while($data=mysqli_fetch_assoc($query))
$array[]= $data;

 //mengubah data array menjadi format json
echo json_encode($array);

?>