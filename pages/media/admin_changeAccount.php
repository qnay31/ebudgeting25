<?php
session_start();
include "../../function.php";

$id         = mysqli_real_escape_string($conn, $_POST["inputId"]);
$oldName    = mysqli_real_escape_string($conn, $_POST["inputOldName"]);
$akun       = mysqli_real_escape_string($conn, $_POST["inputAkun"]);
$nama       = mysqli_real_escape_string($conn, $_POST["inputName"]);
$newId      = mysqli_real_escape_string($conn, $_POST["inputNewId"]);
$team       = mysqli_real_escape_string($conn, $_POST["inputTeam"]);

if ($id == $newId && $oldName == $nama) {
    echo 1;
    return false;
    
} else {
    // update table income media
    mysqli_query($conn, "UPDATE `input_income_media` SET
    nomor_id = '$newId',
    `pemegang` ='$nama',
    team = '$team'
    WHERE nama_akun = '$akun' ");

    // update table laporan akun
    mysqli_query($conn, "UPDATE `input_laporan_media` SET
    nomor_id = '$newId',
    `pemegang` ='$nama',
    team = '$team'
    WHERE nama_akun = '$akun' ");

    // update table data akun 
     mysqli_query($conn, "UPDATE `data_akun` SET
    nomor_id = '$newId',
    `pemegang` = '$nama',
    `team` = '$team'
    WHERE nama_akun = '$akun' ");
}


?>