<?php
error_reporting(0);
session_start();
    include "../../function.php";
	
	if(isset($_POST["id"])){
		$id 	    = $_POST["id"];
		$ip         = get_client_ip();
		$date       = date("Y-m-d H:i:s");
        
		$query 		= mysqli_query($conn, "SELECT * FROM input_program WHERE id = '$id'");
		$data 		= $query->fetch_assoc();
		$program	= $data["program"];
		$kategori	= $data["kategori"];
		$deskripsi	= $data["deskripsi_pemakaian"];
		$periode 	= substr($data['tgl_pemakaian'], 5,-3);
        $convert    = convertDateDBtoIndo($data['tgl_pemakaian']);
        $bulan      = substr($convert, 3, -5);

		mysqli_query($conn, "UPDATE input_program SET laporan = 'Terverifikasi' WHERE id = '$id' ");
        $i = 1;

        // Global Program
        $q  = mysqli_query($conn, "SELECT * FROM input_program WHERE MONTH(tgl_pemakaian) = '$periode' AND laporan = 'Terverifikasi' ");
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
        
        // kesehatan depok
        $q2  = mysqli_query($conn, "SELECT * FROM input_program WHERE MONTH(tgl_pemakaian) = '$periode' AND laporan = 'Terverifikasi' AND program = 'Program Kesehatan Yatim' ");

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

        // pendidikan depok
        $q3  = mysqli_query($conn, "SELECT * FROM input_program WHERE MONTH(tgl_pemakaian) = '$periode' AND laporan = 'Terverifikasi' AND program = 'Program Pendidikan Yatim' ");

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

        // asrama yatim
        $q4  = mysqli_query($conn, "SELECT * FROM input_program WHERE MONTH(tgl_pemakaian) = '$periode' AND laporan = 'Terverifikasi' AND program = 'Program Asrama Yatim' ");

        $sql4 = $q4;
        while($r4 = mysqli_fetch_array($sql4))
        {
            $d_anggaran4 = $r4['dana_anggaran'];
            $i++;
            $total_anggaran4[$i] = $d_anggaran4;

            $hasil_anggaran4 = array_sum($total_anggaran4);

            $d_terpakai4 = $r4['dana_terpakai'];
            $total_terpakai4[$i] = $d_terpakai4;

            $hasil_terpakai4 = array_sum($total_terpakai4);
        }

        // santunan bulanan
        $q5  = mysqli_query($conn, "SELECT * FROM input_program WHERE MONTH(tgl_pemakaian) = '$periode' AND laporan = 'Terverifikasi' AND program = 'Program Santunan Bulanan'");

        $sql5 = $q5;
        while($r5 = mysqli_fetch_array($sql5))
        {
            $d_anggaran5 = $r5['dana_anggaran'];
            $i++;
            $total_anggaran5[$i] = $d_anggaran5;

            $hasil_anggaran5 = array_sum($total_anggaran5);

            $d_terpakai5 = $r5['dana_terpakai'];
            $total_terpakai5[$i] = $d_terpakai5;

            $hasil_terpakai5 = array_sum($total_terpakai5);
            
        }
        
        // yatim binaan
        $q6  = mysqli_query($conn, "SELECT * FROM input_program WHERE MONTH(tgl_pemakaian) = '$periode' AND laporan = 'Terverifikasi' AND kategori = 'Yatim Binaan' ");

        $sql6 = $q6;
        while($r6 = mysqli_fetch_array($sql6))
        {
            $d_anggaran6 = $r6['dana_anggaran'];
            $i++;
            $total_anggaran6[$i] = $d_anggaran6;

            $hasil_anggaran6 = array_sum($total_anggaran6);

            $d_terpakai6 = $r6['dana_terpakai'];
            $total_terpakai6[$i] = $d_terpakai6;

            $hasil_terpakai6 = array_sum($total_terpakai6);
        }

        // yatim luar binaan
        $q7  = mysqli_query($conn, "SELECT * FROM input_program WHERE MONTH(tgl_pemakaian) = '$periode' AND laporan = 'Terverifikasi' AND kategori = 'Yatim Luar Binaan' ");

        $sql7 = $q7;
        while($r7 = mysqli_fetch_array($sql7))
        {
            $d_anggaran7 = $r7['dana_anggaran'];
            $i++;
            $total_anggaran7[$i] = $d_anggaran7;
            
            $hasil_anggaran7 = array_sum($total_anggaran7);
            
            $d_terpakai7 = $r7['dana_terpakai'];
            $total_terpakai7[$i] = $d_terpakai7;
            
            $hasil_terpakai7 = array_sum($total_terpakai7);
        }

        $c_query = mysqli_query($conn, "SELECT bulan FROM data_program WHERE bulan = '$bulan' ");
        
        // Pendidikan Yatim
        if ($program == 'Program Pendidikan Yatim') {
            if (mysqli_fetch_assoc($c_query)) {
                mysqli_query($conn, "UPDATE `data_program` SET 
                    `anggaran_pendidikan`   = '$hasil_anggaran3',
                    `terpakai_pendidikan`   = '$hasil_terpakai3',
                    `anggaran_global`       = '$hasil_anggaran',
                    `terpakai_global`       = '$hasil_terpakai'
                    WHERE bulan = '$bulan' ");
                }
        
        // Kesehatan Yatim
        } elseif ($program == 'Program Kesehatan Yatim' ) {
            if (mysqli_fetch_assoc($c_query)) {
                mysqli_query($conn, "UPDATE `data_program` SET 
                `anggaran_kesehatan`    = '$hasil_anggaran2',
                `terpakai_kesehatan`    = '$hasil_terpakai2',
                `anggaran_global`       = '$hasil_anggaran',
                `terpakai_global`       = '$hasil_terpakai'
                WHERE bulan = '$bulan' ");   
            }
                
        // asrama yatim
        } elseif ($program == 'Program Asrama Yatim') {
            if (mysqli_fetch_assoc($c_query)) {
                $tes = mysqli_query($conn, "UPDATE `data_program` SET 
                `anggaran_asrama_yatim`    = '$hasil_anggaran4',
                `terpakai_asrama_yatim`     = '$hasil_terpakai4',
                `anggaran_global`           = '$hasil_anggaran',
                `terpakai_global`           = '$hasil_terpakai'
                WHERE bulan = '$bulan' ");   
            }
            
        // Santunan Bulanan
        } elseif ($program == 'Program Santunan Bulanan') {
            if (mysqli_fetch_assoc($c_query)) {
                mysqli_query($conn, "UPDATE `data_program` SET 
                `anggaran_santunanBulanan`      ='$hasil_anggaran5',
                `terpakai_santunanBulanan`      ='$hasil_terpakai5',
                `anggaran_global`               ='$hasil_anggaran',
                `terpakai_global`               ='$hasil_terpakai'
                WHERE bulan = '$bulan' ");   
            }
            
        // yatim binaan
        } elseif ($kategori == 'Yatim Binaan') {
            if (mysqli_fetch_assoc($c_query)) {
                mysqli_query($conn, "UPDATE `data_program` SET 
                `anggaran_binaan`   ='$hasil_anggaran6',
                `terpakai_binaan`   ='$hasil_terpakai6',
                `anggaran_global`   ='$hasil_anggaran',
                `terpakai_global`   ='$hasil_terpakai'
                WHERE bulan = '$bulan' ");   
                // die(var_dump($cabang));
            }
    
        // yatim luar binaan
        } else if($kategori == 'Yatim Luar Binaan') {
            if (mysqli_fetch_assoc($c_query)) {
                mysqli_query($conn, "UPDATE `data_program` SET 
                `anggaran_luar_binaan`  ='$hasil_anggaran7',
                `terpakai_luar_binaan`  ='$hasil_terpakai7',
                `anggaran_global`       ='$hasil_anggaran',
                `terpakai_global`       ='$hasil_terpakai'
                WHERE bulan = '$bulan' ");   
            }
        }

        mysqli_query($conn, 
            "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '{$dataLog[nama]}', 
            '{$dataLog[posisi]}', 
            '$ip', 
            '$date', 
            '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Menyetujui dari Laporan $program Dengan Pemakaian $deskripsi')
        ");

	}

    $conn->close();
?>