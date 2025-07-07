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

		$pengajuan	= $data["logistik"];

		mysqli_query($conn, "DELETE FROM `input_logistik` WHERE id = '$id' ");

		if ($dataLog["id_pengurus"] == "kepala_pengajuan") {
			$sql = mysqli_query($conn, 
				"INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
				'{$dataLog[nama]}', 
				'{$dataLog[posisi]}', 
				'$ip', 
				'$date', 
				'{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Menghapus dari Pengajuan $pengajuan')
			");
		}

	}

	$conn->close();
?>