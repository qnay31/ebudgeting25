<?php
error_reporting(0);
session_start();
	include "../../function.php";
	
	if(isset($_POST["id"])){
		$id 	= $_POST["id"];
		$ip     = get_client_ip();
		$date   = date("Y-m-d H:i:s");

		$query 		= mysqli_query($conn, "SELECT * FROM input_laporan_media WHERE id = '$id'");
		$data 		= $query->fetch_assoc();

		$nama_akun	= $data["nama_akun"];
		$tgl_laporan	= $data["tgl_laporan"];

		mysqli_query($conn, "DELETE FROM `input_laporan_media` WHERE id = '$id' ");

        if ($dataLog["id_pengurus"] == "admin_web") {
		} else {
			$tanggal = date("d-m-Y" , strtotime($tgl_laporan));
		mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '{$dataLog[nama]}', 
            '{$dataLog[posisi]}', 
            '$ip', 
            '$date', 
            '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Menghapus dari Laporan akun $nama_akun tanggal $tanggal')
        ");
		}
	}
?>