<?php
error_reporting(0);
session_start();
    include "../../function.php";
	
	if(isset($_POST["id"])){
		$id 	= $_POST["id"];
        $switch = $_POST["kategori"];
		$ip     = get_client_ip();
		$date   = date("Y-m-d H:i:s");

		if ($switch == "ebudget") {
            $query 		= mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE id = '$id'");
            $data 		= $query->fetch_assoc();
            $nama       = $data["nama"];
            $posisi     = $data["posisi"];

            mysqli_query($conn, "DELETE FROM `akun_pengurus` WHERE id = '$id' ");

        } else {
            if ($dataLog["id_pengurus"] == "sosial_media") {
                $inputAkun  = $_POST["deleteAkun"];
                
                mysqli_query($conn, 
                    "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
                    '{$dataLog[nama]}', 
                    '{$dataLog[posisi]}', 
                    '$ip', 
                    '$date', 
                    '{$dataLog[nama]} Bagian {$dataLog[posisi]} baru saja menghapus akun $inputAkun dari halaman ebudgetingnya ')
                    
                ");

                mysqli_query($conn, "DELETE FROM `data_akun` WHERE nama_akun = '$inputAkun' ");

            } else {
                $query 		= mysqli_query($conn, "SELECT * FROM data_akun WHERE id = '$id'");
                $data 		= $query->fetch_assoc();
                $nomor_id   = $data["nomor_id"];
                $akun       = $data["nama_akun"];
                mysqli_query($conn, "DELETE FROM `data_akun` WHERE id = '$id' AND nama_akun = '$akun' ");
            }
        }
	}

    $conn->close();
?>