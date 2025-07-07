<?php
error_reporting(0);
session_start();
	include "../../function.php";
	
	if(isset($_POST["id"])){
		$id 	= $_POST["id"];
		$ip     = get_client_ip();
		$date   = date("Y-m-d H:i:s");

		$query 		= mysqli_query($conn, "SELECT * FROM income_global WHERE id = '$id'");
		$data 		= $query->fetch_assoc();

		if ($dataLog["id_pengurus"] == "admin_web") {
			if ($data["status"] == "Pending") {
				mysqli_query($conn, "UPDATE `income_global` SET status = 'Pending' WHERE id = '$id' ");
				
			} else {
				mysqli_query($conn, "UPDATE `income_global` SET status = 'Menunggu Verifikasi' WHERE id = '$id' ");

			}
		} else {
			$tgl_pemasukan	= $data["tgl_pemasukan"];

			mysqli_query($conn, "UPDATE `income_global` SET status = 'Menunggu Verifikasi' WHERE id = '$id' ");

			$tanggal = date("d-m-Y" , strtotime($tgl_pemasukan));

			mysqli_query($conn, 
			"INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
				'{$dataLog[nama]}', 
				'{$dataLog[posisi]}', 
				'$ip', 
				'$date', 
				'{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah mengikirimkan data income media sosial tanggal $tanggal')
			");
		}

	}
?>