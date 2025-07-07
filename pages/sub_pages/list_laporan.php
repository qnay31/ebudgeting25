<?php
include '../../function.php';

if (isset($_POST["data"])) {
$kategori = $_POST["data"];

    $qPengajuan   = mysqli_query($conn, "SELECT * FROM input_$kategori WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
    $qPengajuan2  = mysqli_query($conn, "SELECT * FROM input_$kategori WHERE status = 'OK' AND laporan = 'Belum Laporan' ");
    $numPengajuan = $qPengajuan2->num_rows;

    if ($numPengajuan > 0) {
        echo '<option selected value="">Pilih Salah Satu Laporan</option>';
        while($dataPengajuan = mysqli_fetch_array($qPengajuan)) {
            echo '<option value="'.$dataPengajuan["id"].'">'.ucwords($dataPengajuan["deskripsi"]).'</option>';
        }
        
    } else {
        echo '0';
    }

}

$conn->close();
?>