<?php
error_reporting(0);
session_start();
    include "../../function.php";
	
	if(isset($_POST["id"])){
		$id 	    = $_POST["id"];
		$ip         = get_client_ip();
		$date       = date("Y-m-d H:i:s");
        
		$query 		= mysqli_query($conn, "SELECT * FROM input_logistik WHERE id = '$id'");
		$data 		= $query->fetch_assoc();
		$kategori	= $data["logistik"];
		$deskripsi	= $data["deskripsi_pemakaian"];
		$periode 	= substr($data['tgl_pemakaian'], 5,-3);
        $convert    = convertDateDBtoIndo($data['tgl_pemakaian']);
        $bulan      = substr($convert, 3, -5);

		mysqli_query($conn, "UPDATE input_logistik SET laporan = 'Terverifikasi' WHERE id = '$id' ");
        $i = 1;

        // Global Program
        $q  = mysqli_query($conn, "SELECT * FROM input_logistik WHERE MONTH(tgl_pemakaian) = '$periode' AND laporan = 'Terverifikasi' ");
        $sql = $q;
        while($r = mysqli_fetch_array($sql))
        {
            $i++;
            $d_anggaran = $r['dana_anggaran'];
            $total_anggaran[$i] = $d_anggaran;
            $hasil_anggaran = array_sum($total_anggaran);

            $d_terpakai = $r['dana_terpakai'];
            $total_terpakai[$i] = $d_terpakai;
            $hasil_terpakai = array_sum($total_terpakai);
        } 
   
        mysqli_query($conn, "UPDATE `data_logistik` SET 
            `anggaran_global`       = '$hasil_anggaran',
            `terpakai_global`       = '$hasil_terpakai'
            WHERE bulan = '$bulan' ");

        mysqli_query($conn, 
            "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '{$dataLog[nama]}', 
            '{$dataLog[posisi]}', 
            '$ip', 
            '$date', 
            '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Menyetujui dari Laporan $kategori Dengan Pemakaian $deskripsi')
        ");


	}

    $conn->close();
?>