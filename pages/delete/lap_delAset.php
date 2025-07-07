<?php
error_reporting(0);
session_start();
    include "../../function.php";
	
	if(isset($_POST["id"])){
		$id 	= $_POST["id"];
		$ip     = get_client_ip();
		$date   = date("Y-m-d H:i:s");

		$query 		= mysqli_query($conn, "SELECT * FROM input_aset_yayasan WHERE id = '$id'");
		$data 		= $query->fetch_assoc();
		$kategori	= $data["kategori"];
        $excel      = $data["dokumen"];

        $q2    = mysqli_query($conn, "SELECT * FROM galeri_aset_yayasan WHERE nomor_id = '$id' AND program = '$kategori' ");
        $i = 1;
        $sql2 = $q2;

        while ($data2 = mysqli_fetch_array($sql2)) {
            $dokumentasi = $data2['dokumentasi'];
            $i++;
            $total_dokumentasi[$i] = $dokumentasi;
            unlink("../../assets/images/laporan/aset_yayasan/".$total_dokumentasi[$i]);
        }
        unlink("../../assets/doc/aset_yayasan/".$excel);

		mysqli_query($conn, "UPDATE `input_aset_yayasan` SET 
        `tgl_laporan`='',
        `pemakaian`='',
        `qty_pembelian` = '',
        `dana_terpakai`='',
        `laporan`='Belum Laporan', 
        `dokumen`= '' WHERE id = '$id' ");

        mysqli_query($conn, "DELETE FROM `galeri_aset_yayasan` WHERE nomor_id = '$id' AND program = '$kategori'");

        $qPengajuan   = mysqli_query($conn, "SELECT * FROM input_aset_yayasan WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
        $qPengajuan2  = mysqli_query($conn, "SELECT * FROM input_aset_yayasan WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
        $numPengajuan = $qPengajuan2->num_rows;

        if ($numPengajuan > 0) {
            echo '<option selected value="">Pilih Salah Satu Laporan</option>';
            while($data = mysqli_fetch_array($qPengajuan)) {
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
				'{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Menghapus dari Pengajuan Laporan dari Pengajuan $kategori')
			");
        }
	}
	$conn->close();
?>