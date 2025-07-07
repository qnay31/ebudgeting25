<?php
error_reporting(0);
session_start();
    include "../../function.php";
	
	if(isset($_POST["id"])){
		$id 	= $_POST["id"];
		$type   = $_POST["kategori"];
		$ip     = get_client_ip();
		$date   = date("Y-m-d H:i:s");

		$query 		= mysqli_query($conn, "SELECT * FROM input_$type WHERE id = '$id'");
		$data 		= $query->fetch_assoc();
		$program	= $data["program"];
		$deskripsi	= $data["deskripsi"];

		mysqli_query($conn, "UPDATE input_$type SET status = 'OK' WHERE id = '$id' ");

		mysqli_query($conn, 
            "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '{$dataLog[nama]}', 
            '{$dataLog[posisi]}', 
            '$ip', 
            '$date', 
            '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Menyetujui dari Pengajuan $program Dengan Perencanaan $deskripsi')
        ");
        
	}

	$conn->close();
	
?>