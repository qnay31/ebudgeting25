<?php
error_reporting(0);
session_start();
	include "../../function.php";
	
	if(isset($_POST["id"])){
		$id 	= $_POST["id"];
		$ip     = get_client_ip();
		$date   = date("Y-m-d H:i:s");

		if ($dataLog["id_pengurus"] == "admin_web") {
			mysqli_query($conn, "UPDATE `input_incometanparesi` SET status = 'Pending' WHERE id = '$id' ");

		} else {
			$query 		= mysqli_query($conn, "SELECT * FROM input_incometanparesi WHERE id = '$id'");
			$data 		= $query->fetch_assoc();

			$tgl_pemasukan	= $data["tgl_pemasukan"];
			$periode 		= substr($tgl_pemasukan, 5,-3);
			$convert    	= convertDateDBtoIndo($tgl_pemasukan);
			$bulan      	= substr($convert, 3, -5);

			mysqli_query($conn, "UPDATE `input_incometanparesi` SET status = 'Terverifikasi' WHERE id = '$id' ");

			$q  = mysqli_query($conn, "SELECT * FROM input_incometanparesi WHERE MONTH(tgl_pemasukan) = '$periode' AND status = 'Terverifikasi' ");

			$i = 1;
			$sql = $q;
			while($r = mysqli_fetch_array($sql))
			{
				$convert   = convertDateDBtoIndo($r['tgl_pemasukan']);
				$bulan     = substr($convert, 3, -5);

				$d_income = $r['income'];
				$i++;
				$total_income[$i] = $d_income;

				$hasil_income = array_sum($total_income);
			}
				$update2 = mysqli_query($conn, "UPDATE `data_income` SET 
				`income_tanpaResi`   ='$hasil_income'
				WHERE bulan      = '$bulan' ");

			$tanggal = date("d-m-Y" , strtotime($tgl_pemasukan));
			mysqli_query($conn, 
			"INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
				'{$dataLog[nama]}', 
				'{$dataLog[posisi]}', 
				'$ip', 
				'$date', 
				'{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah mengkonfirmasi data income tanpa resi tanggal $tanggal')
			");
		}
		

	}
?>