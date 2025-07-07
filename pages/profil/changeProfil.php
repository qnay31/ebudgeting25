<?php
session_start();
error_reporting(0);
include '../../function.php';

$ip                 = get_client_ip();
$date               = date("Y-m-d H:i:s");

$folderPath = './../../assets/images/profiles/';
$showPath = './assets/images/profiles/';

if(isset($_POST["image"]))
{
	$data = $_POST["image"];

	$image_array_1 = explode(";", $data);

	$image_array_2 = explode(",", $image_array_1[1]);

	$data = base64_decode($image_array_2[1]);

	$name = time() . '.png';

	$imageName = $folderPath . $name;
    $newImage  = $showPath . $name;

	$query	= mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE id = '$dataLog[id]'");
	$data_image 	= $query->fetch_assoc();

	$foto 	= $data_image["profil"];

	if ($foto !== "profil.png") {
		unlink($folderPath.$foto);
	}

    $update = mysqli_query($conn, "UPDATE akun_pengurus SET
            `profil` = '$name'
            WHERE id = '$dataLog[id]'");
	
	file_put_contents($imageName, $data);

	mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '{$dataLog[nama]}', 
            '{$dataLog[posisi]}', 
            '$ip', 
            '$date', 
            '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Mengubah foto profilnya')
        ");

	echo $newImage;
}

?>