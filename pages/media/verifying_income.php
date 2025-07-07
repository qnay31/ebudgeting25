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

		$gedung 		= $data["gedung"];
		$tgl_pemasukan	= $data["tgl_pemasukan"];
		$periode 		= substr($tgl_pemasukan, 5,-3);
        $convert    	= convertDateDBtoIndo($tgl_pemasukan);
        $bulan      	= substr($convert, 3, -5);

		

		mysqli_query($conn, "UPDATE `income_global` SET status = 'Terverifikasi' WHERE id = '$id' ");

		$q  = mysqli_query($conn, "SELECT * FROM income_global WHERE MONTH(tgl_pemasukan) = '$periode' AND status = 'Terverifikasi' ");

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

		$q2  = mysqli_query($conn, "SELECT * FROM income_global WHERE MONTH(tgl_pemasukan) = '$periode' AND status = 'Terverifikasi' AND gedung = '$gedung' ");

        $sql2 = $q2;
        while($r2 = mysqli_fetch_array($sql2))
        {
            $d_income2 = $r2['income'];
            $i++;
            $total_income2[$i] = $d_income2;
            
            $hasil_income2 = array_sum($total_income2);
        }
			$update2 = mysqli_query($conn, "UPDATE `data_income` SET 
			`income_$gedung`   	= '$hasil_income2',
			`income_global` 	= '$hasil_income'
			WHERE bulan     	= '$bulan' ");

        $tanggal = date("d-m-Y" , strtotime($tgl_pemasukan));

        mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '{$dataLog[nama]}', 
            '{$dataLog[posisi]}', 
            '$ip', 
            '$date', 
            '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah mengkonfirmasi data income media sosial tanggal $tanggal')
        ");

	}
?>