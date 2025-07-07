<?php
error_reporting(0);
session_start();
    include "../../function.php";
	
	if(isset($_POST["id"])){
		$id 	= $_POST["id"];
		$ip     = get_client_ip();
		$date   = date("Y-m-d H:i:s");

		$query 		= mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE id = '$id'");
		$data 		= $query->fetch_assoc();
		$profil	    = $data["profil"];

        $folderPath = './../../assets/images/profiles/';

        unlink($folderPath.$profil);

		mysqli_query($conn, "UPDATE akun_pengurus SET profil = 'profil.png' WHERE id = '$id' ");

		mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '{$dataLog[nama]}', 
            '{$dataLog[posisi]}', 
            '$ip', 
            '$date', 
            '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Menghapus foto profilnya')
        ");

        echo './assets/images/profiles/profil.png';

	}
?>