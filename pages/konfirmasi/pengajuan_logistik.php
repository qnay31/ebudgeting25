<?php
error_reporting(0);
session_start();
    include "../../function.php";
	
	if(isset($_POST["id"])){
		$id 	= $_POST["id"];
		$ip     = get_client_ip();
		$date   = date("Y-m-d H:i:s");

		$query 		= mysqli_query($conn, "SELECT * FROM input_logistik WHERE id = '$id'");
		$data 		= $query->fetch_assoc();
		$kategori	= $data["logistik"];
		$deskripsi	= $data["deskripsi"];

		mysqli_query($conn, "UPDATE input_logistik SET status = 'OK' WHERE id = '$id' ");

		mysqli_query($conn, 
            "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '{$dataLog[nama]}', 
            '{$dataLog[posisi]}', 
            '$ip', 
            '$date', 
            '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Menyetujui dari Pengajuan $kategori Dengan Perencanaan $deskripsi')
        ");

	}

	$conn->close();
	
?>