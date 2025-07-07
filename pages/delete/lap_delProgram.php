<?php
error_reporting(0);
session_start();
    include "../../function.php";
	
	if(isset($_POST["id"])){
		$id 	= $_POST["id"];
		$ip     = get_client_ip();
		$date   = date("Y-m-d H:i:s");

		$query 		= mysqli_query($conn, "SELECT * FROM input_program WHERE id = '$id'");
		$data 		= $query->fetch_assoc();
		$program	= $data["program"];
        $excel      = $data["dokumen"];

        $q2    = mysqli_query($conn, "SELECT * FROM galeri_program WHERE nomor_id = '$id' AND program = '$program' ");
        $i = 1;
        $sql2 = $q2;

        while ($data2 = mysqli_fetch_array($sql2)) {
            $dokumentasi = $data2['dokumentasi'];
            $i++;
            $total_dokumentasi[$i] = $dokumentasi;
            unlink("../../assets/images/laporan/program/".$total_dokumentasi[$i]);
        }
        unlink("../../assets/doc/program/".$excel);

		mysqli_query($conn, "UPDATE `input_program` SET 
        `tgl_pemakaian`='',
        `deskripsi_pemakaian`='',
        `dana_terpakai`='',
        `laporan`='Belum Laporan', 
        `dokumen`= '' WHERE id = '$id' ");

        mysqli_query($conn, "DELETE FROM `galeri_program` WHERE nomor_id = '$id' AND program = '$program'");

        $qProgram   = mysqli_query($conn, "SELECT * FROM input_program WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
        $qProgram2  = mysqli_query($conn, "SELECT * FROM input_program WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
        $numProgram = $qProgram2->num_rows;

        if ($numProgram > 0) {
            echo '<option selected value="">Pilih Salah Satu Laporan</option>';
            while($data = mysqli_fetch_array($qProgram)) {
                echo '<option value="'.$data["id"].'">'.ucwords($data["deskripsi"]).'</option>';
            }

        } else {
            echo '0';
        }

		if ($dataLog["id_pengurus"] == "kepala_pengajuan") {
            $sql = mysqli_query($conn, 
				"INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
				'{$dataLog[nama]}', 
				'{$dataLog[posisi]}', 
				'$ip', 
				'$date', 
				'{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Menghapus dari Pengajuan Laporan dari Pengajuan $program')
			");
        }
	}
	$conn->close();
?>