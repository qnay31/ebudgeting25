<?php
error_reporting(0);
session_start();
include "../../function.php";

if ($dataLog['id_pengurus'] == "kepala_income") {
    $kategoriName   = mysqli_real_escape_string($conn, $_POST["kategoriName"]);
    $tanggalName    = mysqli_real_escape_string($conn, $_POST["tanggalName"]);
    $nom_acak       = mysqli_real_escape_string($conn, $_POST["transferName"]);
    $tf             = RemoveSpecialChar($nom_acak);
    $transfer       = str_replace(' ', '', $tf);
    $ip             = get_client_ip();
    $date           = date("Y-m-d H:i:s");

    $qNonResi   = mysqli_query($conn, "SELECT * FROM input_incometanparesi WHERE tgl_pemasukan = '$tanggalName'");
    if (mysqli_fetch_assoc($qNonResi)) {

        echo "1";
        return false;
        }

    $sql = "INSERT INTO input_incometanparesi (id_pengurus, kategori, posisi, tgl_pemasukan, income, status) VALUES (
        '{$dataLog[id_pengurus]}',
        '$kategoriName',
        '{$dataLog[posisi]}',
        '$tanggalName',
        '$transfer',
        'Pending'
    )";

} else {
    $akunName       = mysqli_real_escape_string($conn, $_POST["akun"]);
    $donaturName    = mysqli_real_escape_string($conn, $_POST["namaDonatur"]);
    $tanggalName    = mysqli_real_escape_string($conn, $_POST["tanggal"]);
    $jamName        = mysqli_real_escape_string($conn, $_POST["jam"]);
    $bankName       = mysqli_real_escape_string($conn, $_POST["bank"]);
    $nom_acak       = mysqli_real_escape_string($conn, $_POST["transfer"]);
    $tf             = RemoveSpecialChar($nom_acak);
    $transfer       = str_replace(' ', '', $tf);
    $query_team     = mysqli_query($conn, "SELECT * FROM data_akun WHERE nama_akun = '$akunName'");
    $data_team      = $query_team->fetch_assoc();
    $id_pengurus    = $data_team["id_pengurus"];
    $nomorID        = $data_team["nomor_id"];
    $pemegang       = $data_team["pemegang"];
    $team           = $data_team["team"];
    $kategori       = $data_team["kategori"];
    $ip             = get_client_ip();
    $date           = date("Y-m-d H:i:s");

    $valid_extensions = array('jpeg', 'jpg', 'png'); // valid extensions
    $path   = '../../assets/images/resi/'; // upload directory

    $img    = $_FILES['resi']['name'];
    $tmp    = $_FILES['resi']['tmp_name'];
    $size   = $_FILES["resi"]["size"];

    // get uploaded file's extension
    $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));

    // check's valid format
    if(!in_array($ext, $valid_extensions)) {   
        echo "<script>
        alert('yang di upload bukan gambar');
        </script>";
        return false;
    } 

    if ($size > 5000000) {
        echo 3;
        return false;
    }

    // generate nama baru gambar
    $namagambarbaru = uniqid();
    $namagambarbaru .= '.';
    $namagambarbaru .= $ext;

    $targetFilePath = $path . $namagambarbaru;// get uploaded file's extension
    $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));

    // check's valid format
    if(!in_array($ext, $valid_extensions)) {   
        echo "<script>
        alert('yang di upload bukan gambar');
        </script>";
        return false;
    } 

    if ($size > 5000000) {
        echo 3;
        return false;
    }

    // generate nama baru gambar
    $namagambarbaru = uniqid();
    $namagambarbaru .= '.';
    $namagambarbaru .= $ext;

    $targetFilePath = $path . $namagambarbaru;
    move_uploaded_file($tmp,$targetFilePath);

    $sql = "INSERT INTO input_income_media (id_pengurus, nomor_id, pemegang, nama_akun, nama_donatur, tanggal_tf,
        jam_tf, bank, jumlah_tf, status, team, kategori, resi) VALUES (
        '$id_pengurus', 
        '$nomorID', 
        '$pemegang', 
        '$akunName', 
        '$donaturName', 
        '$tanggalName', 
        '$jamName', 
        '$bankName', 
        '$transfer', 
        'Pending', 
        '$team', 
        '$kategori', 
        '$namagambarbaru' )";
}


$hasil = mysqli_query($conn,$sql);

$tanggal = date("d-m-Y" , strtotime($tanggalName));
$sql = mysqli_query($conn, 
    "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
        '{$dataLog[nama]}', 
        '{$dataLog[posisi]}', 
        '$ip', 
        '$date', 
        '$pemegang Bagian {$dataLog[posisi]} Telah Menginput income media sosial tanggal $tanggal')
    ");


?>