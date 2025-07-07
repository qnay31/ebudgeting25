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

        $id_pengurus    = $data["id_pengurus"];
        $tanggal_tf     = $data["tanggal_tf"];
        $status         = $data["status"];
        $gedung         = $data["team"];

        $qData      = mysqli_query($conn, "SELECT * FROM income_global WHERE tgl_pemasukan = '$tanggal_tf' AND gedung = '$gedung' ");
        $hData      = mysqli_fetch_assoc($qData);
        $iStatus    = $hData["status"];
        // die(var_dump($iStatus));
        if ($status == "OK" && $iStatus == "Terverifikasi" ) {
            $incQuery   = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tanggal_tf' AND team = '$gedung' AND status = 'OK'");

            $i = 1;
            while($Inc = mysqli_fetch_array($incQuery))
            {   
                $IncMedia   = $Inc['jumlah_tf'];
                $i++;
                $total_IncMedia[$i] = $IncMedia;
                
                $hasil_IncMedia = array_sum($total_IncMedia);
            }
        
            $convert    = convertDateDBtoIndo($tanggal_tf);
            $bulan      = substr($convert, 3, -5); 
        
            $query2     = mysqli_query($conn, "SELECT * FROM data_income WHERE bulan = '$bulan'");
            $data2      = mysqli_fetch_assoc($query2);
            $incomeVI  	= $data2["income_VI"];
            $incomeV  	= $data2["income_V"];
            $incomeIV  	= $data2["income_IV"];
            $incomeIII  = $data2["income_III"];
            $incomeII   = $data2["income_II"];
		    $incomeI    = $data2["income_I"];
            $income     = $data2["income_global"];
        
            if ($incomeIII == "III") {
                if ($income > 0 && $incomeIII > 0) {
                    $new_incomeIII = $incomeIII - $hasil_IncMedia;
                    $new_income = $income - $hasil_IncMedia;
            
                    $upToIncome = mysqli_query($conn, "UPDATE data_income SET 
                                `incomeIII` = '$new_incomeIII',
                                `income_global` = '$new_income'
                                    WHERE bulan = '$bulan'
                                ");
                }

            } else if($incomeII == "II") {
                if ($income > 0 && $incomeII > 0) {
                    $new_incomeII = $incomeII - $hasil_IncMedia;
                    $new_income = $income - $hasil_IncMedia;
            
                    $upToIncome = mysqli_query($conn, "UPDATE data_income SET 
                                `incomeII` = '$new_incomeII',
                                `income_global` = '$new_income'
                                    WHERE bulan = '$bulan'
                                ");
                }

            } else if($incomeIV == "IV") {
                if ($income > 0 && $incomeIV > 0) {
                    $new_incomeIV = $incomeIV - $hasil_IncMedia;
                    $new_income = $income - $hasil_IncMedia;
            
                    $upToIncome = mysqli_query($conn, "UPDATE data_income SET 
                                `incomeIV` = '$new_incomeIV',
                                `income_global` = '$new_income'
                                    WHERE bulan = '$bulan'
                                ");
                }

            } else if($incomeV == "V") {
                if ($income > 0 && $incomeV > 0) {
                    $new_incomeV = $incomeV - $hasil_IncMedia;
                    $new_income = $income - $hasil_IncMedia;
            
                    $upToIncome = mysqli_query($conn, "UPDATE data_income SET 
                                `incomeV` = '$new_incomeV',
                                `income_global` = '$new_income'
                                    WHERE bulan = '$bulan'
                                ");
                }

            } else if($incomeVI == "VI") {
                if ($income > 0 && $incomeVI > 0) {
                    $new_incomeVI = $incomeVI - $hasil_IncMedia;
                    $new_income = $income - $hasil_IncMedia;
            
                    $upToIncome = mysqli_query($conn, "UPDATE data_income SET 
                                `incomeVI` = '$new_incomeVI',
                                `income_global` = '$new_income'
                                    WHERE bulan = '$bulan'
                                ");
                }
        
            } else {
                if ($income > 0 && $incomeI > 0) {
                    $new_incomeI = $incomeI - $hasil_IncMedia;
                    $new_income = $income - $hasil_IncMedia;
        
                    $upToIncome = mysqli_query($conn, "UPDATE data_income SET 
                                `income_I` = '$new_incomeI',
                                `income_global` = '$new_income'
                                    WHERE bulan = '$bulan'
                                ");
                }
            }
        }

        $query3 = mysqli_query($conn, "UPDATE `input_income_media` SET status = 'Dibatalkan' WHERE id = '$id' ");
        $queryIncome = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tanggal_tf' AND team = '$gedung' AND status = 'OK'"); 
        $numsIncome  = $queryIncome->num_rows;

        if ($numsIncome === 0) {
            mysqli_query($conn, "DELETE FROM `income_global` WHERE tgl_pemasukan = '$tanggal_tf' AND gedung = '$gedung' ");
        
        } else {
            $i = 1;
            while($r = mysqli_fetch_array($queryIncome))
            {   
                $tanggal    = $r["tanggal_tf"]; 
                $d_income   = $r['jumlah_tf'];
                $i++;
                $total_income[$i] = $d_income;
                
                $hasil_income = array_sum($total_income);
            }

            $upIncome = mysqli_query($conn, "UPDATE `income_global` SET 
            `income`        ='$hasil_income',
            `status`        ='Pending'
            WHERE 
            tgl_pemasukan   = '$tanggal' AND gedung = '$gedung' "); 
        }

        $tanggalNew = date("d-m-Y" , strtotime($tanggal_tf));

        mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '{$dataLog[nama]}', 
            '{$dataLog[posisi]}', 
            '$ip', 
            '$date', 
            '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Menghapus data income media sosial tanggal $tanggalNew')
        ");

	}
?>