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

	$id_pengurus	= $data["id_pengurus"];
	$nama_akun		= $data["nama_akun"];
	$tanggal_tf		= $data["tanggal_tf"];
	$gedung 		= $data["team"];

	mysqli_query($conn, "UPDATE `input_income_media` SET status = 'OK' WHERE id = '$id' ");
	$kuery      = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tanggal_tf' AND team = '$gedung' AND status = 'OK' ");
	$i = 1;
	while($r = mysqli_fetch_array($kuery))
	{   
		$tanggal    = $r["tanggal_tf"]; 
		$status     = $r["status"];
		$d_income   = $r['jumlah_tf'];
		$i++;
		$total_income[$i] = $d_income;
		
		$hasil_income = array_sum($total_income);
	}

	$qIncome = mysqli_query($conn, "SELECT * FROM income_global WHERE tgl_pemasukan = '$tanggal' AND gedung = '$gedung' ");
	$numIncome  = $qIncome->num_rows;
	$hData      = mysqli_fetch_assoc($qIncome);
	$iStatus    = $hData["status"];

	if ($iStatus == "Terverifikasi") {
		$convert    = convertDateDBtoIndo($tanggal);
		$bulan      = substr($convert, 3, -5); 

		$query2     = mysqli_query($conn, "SELECT * FROM data_income WHERE bulan = '$bulan'");
		$data2      = mysqli_fetch_assoc($query2);
		$incomeI    = $data2["income_I"];
		$incomeII   = $data2["income_II"];
		$income     = $data2["income_global"];

		if($gedung == "II") {
			if ($income > 0 && $incomeII > 0) {
				$new_incomeII 	= $incomeII - $hasil_income + $d_income;
				$new_income 	= $income - $hasil_income + $d_income;
	
				$upToIncome = mysqli_query($conn, "UPDATE data_income SET 
							`income_II` = '$new_incomeII',
							`income_global` = '$new_income'
								WHERE bulan = '$bulan'
							");
			}

		} else {
			if ($income > 0 && $incomeI > 0) {
				$new_incomeI 	= $incomeI - $hasil_income + $d_income;
				$new_income 	= $income - $hasil_income + $d_income;
	
				$upToIncome = mysqli_query($conn, "UPDATE data_income SET 
							`income_I` = '$new_incomeI',
							`income_global` = '$new_income'
								WHERE bulan = '$bulan'
							");
			}
		}
	}

	if ($numIncome === 1 && $status == "OK") {
		$upIncome = mysqli_query($conn, "UPDATE `income_global` SET 
					`id_pengurus`   = '$dataLog[id_pengurus]',
					`kategori`      = 'Media Sosial',
					`posisi`        = '$dataLog[posisi]',
					`gedung`        = '$gedung',
					`tgl_pemasukan` = '$tanggal',
					`income`        = '$hasil_income',
					`status`        = 'Pending'
					WHERE 
					tgl_pemasukan   = '$tanggal' AND gedung = '$gedung' ");
		
	} else {
		mysqli_query($conn, "INSERT INTO income_global (id_pengurus, kategori, posisi, gedung, tgl_pemasukan, income, status) VALUES(
			'{$dataLog[id_pengurus]}', 
			'Media Sosial', 
			'{$dataLog[posisi]}', 
			'$gedung', 
			'$tanggal', 
			'$d_income', 
			'Pending')
		");

	}
	
	$tanggal = date("d-m-Y" , strtotime($tanggal_tf));

	mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '{$dataLog[nama]}', 
            '{$dataLog[posisi]}', 
            '$ip', 
            '$date', 
            '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah mengkonfirmasi dari income media sosial akun $nama_akun tanggal $tanggal')
        ");

}
?>