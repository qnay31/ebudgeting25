<?php
header('Content-Type: application/json; charset=utf8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require '../function.php';

$query  = mysqli_query($conn, "SELECT * FROM data_logistik");

$array=array();
while($data=mysqli_fetch_assoc($query))
$array[]=$data;

 //mengubah data array menjadi format json
echo json_encode($array);

?>