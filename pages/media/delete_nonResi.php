<?php
error_reporting(0);
session_start();
	include "../../function.php";
	
	if(isset($_POST["id"])){
		$id 	= $_POST["id"];
		$ip     = get_client_ip();
		$date   = date("Y-m-d H:i:s");

		$query 		= mysqli_query($conn, "SELECT * FROM input_incometanparesi WHERE id = '$id'");
		$data 		= $query->fetch_assoc();

		$tgl_pemasukan	= $data["tgl_pemasukan"];

		mysqli_query($conn, "DELETE FROM `input_incometanparesi` WHERE id = '$id' ");

        $tanggal = date("d-m-Y" , strtotime($tgl_pemasukan));

		mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '{$dataLog[nama]}', 
            '{$dataLog[posisi]}', 
            '$ip', 
            '$date', 
            '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Menghapus data income non resi tanggal $tanggal')
        ");

	}
?>