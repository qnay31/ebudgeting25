<?php
error_reporting(0);
session_start();
	include "../../function.php";
	
	if(isset($_POST["id"])){
		$id 	= $_POST["id"];
		$ip     = get_client_ip();
		$date   = date("Y-m-d H:i:s");

		$query 		= mysqli_query($conn, "SELECT * FROM input_income_media WHERE id = '$id'");
		$data 		= $query->fetch_assoc();

		$tanggal_tf	= $data["tanggal_tf"];

		if ($dataLog["id_pengurus"] == "kepala_income") {
			mysqli_query($conn, "UPDATE input_income_media SET status = 'Dibatalkan' WHERE id = '$id' ");

			$tanggal = date("d-m-Y" , strtotime($tanggal_tf));

			mysqli_query($conn, 
			"INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
				'{$dataLog[nama]}', 
				'{$dataLog[posisi]}', 
				'$ip', 
				'$date', 
				'{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah menolak dari income media sosial tanggal $tanggal')
			");

		} else {
			mysqli_query($conn, "DELETE FROM `input_income_media` WHERE id = '$id' ");
			unlink("../../assets/images/resi/".$data["resi"]);

			if ($dataLog["id_pengurus"] == "admin_web") {
			} else {
				$tanggal = date("d-m-Y" , strtotime($tanggal_tf));

				mysqli_query($conn, "INSERT INTO log_aktivity VALUES ('' , '$dataLog[nama]', '$dataLog[posisi]', '$ip', '$date', '$dataLog[nama] Bagian $dataLog[posisi] Telah Menghapus dari income media sosial tanggal $tanggal')");

				mysqli_query($conn, 
				"INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
					'{$dataLog[nama]}', 
					'{$dataLog[posisi]}', 
					'$ip', 
					'$date', 
					'{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Menghapus dari income media sosial tanggal $tanggal')
				");
			}
			
		}
		

	}
?>