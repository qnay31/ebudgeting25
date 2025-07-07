<?php
error_reporting(0);
session_start();
    include "../../function.php";
	
	if(isset($_POST["id"])){
		$id 	    = $_POST["id"];
        $type       = $_POST["kategori"];
		$ip         = get_client_ip();
		$date       = date("Y-m-d H:i:s");
        
		$query 		= mysqli_query($conn, "SELECT * FROM input_$type WHERE id = '$id'");
		$data 		= $query->fetch_assoc();
		$kategori	= $data["kategori"];
		if ($kategori == "Aset Yayasan") {
            $jenis	    = $data["jenis"];
        }
		$deskripsi	= $data["pemakaian"];
		$periode 	= substr($data['tgl_laporan'], 5,-3);
        $convert    = convertDateDBtoIndo($data['tgl_laporan']);
        $bulan      = substr($convert, 3, -5);

		mysqli_query($conn, "UPDATE input_$type SET laporan = 'Terverifikasi' WHERE id = '$id' ");
        $i = 1;

        // Global
        $q  = mysqli_query($conn, "SELECT * FROM input_$type WHERE MONTH(tgl_laporan) = '$periode' AND laporan = 'Terverifikasi' ");
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

        if ($kategori == "Aset Yayasan") {
            // Pembelian Barang
            $q2  = mysqli_query($conn, "SELECT * FROM input_$type WHERE MONTH(tgl_laporan) = '$periode' AND laporan = 'Terverifikasi' AND jenis = 'Pembelian Barang' ");

            $sql2 = $q2;
            while($r2 = mysqli_fetch_array($sql2))
            {
                $d_anggaran2 = $r2['dana_anggaran'];
                $i++;
                $total_anggaran2[$i] = $d_anggaran2;

                $hasil_anggaran2 = array_sum($total_anggaran2);

                $d_terpakai2 = $r2['dana_terpakai'];
                $total_terpakai2[$i] = $d_terpakai2;

                $hasil_terpakai2 = array_sum($total_terpakai2);
            }

            // penbangunan
            $q3  = mysqli_query($conn, "SELECT * FROM input_$type WHERE MONTH(tgl_laporan) = '$periode' AND laporan = 'Terverifikasi' AND jenis = 'Pembangunan' ");

            $sql3 = $q3;
            while($r3 = mysqli_fetch_array($sql3))
            {
                $d_anggaran3 = $r3['dana_anggaran'];
                $i++;
                $total_anggaran3[$i] = $d_anggaran3;

                $hasil_anggaran3 = array_sum($total_anggaran3);

                $d_terpakai3 = $r3['dana_terpakai'];
                $total_terpakai3[$i] = $d_terpakai3;

                $hasil_terpakai3 = array_sum($total_terpakai3);
            }
        }
   
        mysqli_query($conn, "UPDATE `data_$type` SET 
            `anggaran_global`       = '$hasil_anggaran',
            `terpakai_global`       = '$hasil_terpakai'
            WHERE bulan = '$bulan' ");
        
        if ($kategori == "Aset Yayasan") {
            if ($jenis == "Pembelian Barang") {
                mysqli_query($conn, "UPDATE `data_$type` SET 
                `anggaran_pembelian`    = '$hasil_anggaran2',
                `terpakai_pembelian`    = '$hasil_terpakai2',
                `anggaran_global`       = '$hasil_anggaran',
                `terpakai_global`       = '$hasil_terpakai'
                WHERE bulan = '$bulan' ");
                
            } else {
                mysqli_query($conn, "UPDATE `data_$type` SET 
                `anggaran_pembangunan`  = '$hasil_anggaran3',
                `terpakai_pembangunan`  = '$hasil_terpakai3',
                `anggaran_global`       = '$hasil_anggaran',
                `terpakai_global`       = '$hasil_terpakai'
                WHERE bulan = '$bulan' ");
            }
        }

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