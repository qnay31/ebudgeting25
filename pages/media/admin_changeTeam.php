<?php
session_start();
include "../../function.php";

$akun       = mysqli_real_escape_string($conn, $_POST["inputAkun"]);
$oldTeam    = mysqli_real_escape_string($conn, $_POST["inputOldTeam"]);
$team       = mysqli_real_escape_string($conn, $_POST["inputTeam"]);

// die(var_dump($akun, $oldTeam, $team));
if ($team == $oldTeam) {
    echo 1;
    return false;
    
} else {
    // update table income media
    $result1 = mysqli_query($conn, "UPDATE `input_income_media` SET
    `team` = '$team'
    WHERE pemegang = '$akun' ");

    // update table laporan akun
    $result2 = mysqli_query($conn, "UPDATE `input_laporan_media` SET
    `team` = '$team'
    WHERE pemegang = '$akun' ");

    // update table data akun 
    $result3 = mysqli_query($conn, "UPDATE `data_akun` SET
    `team` = '$team'
    WHERE pemegang = '$akun' ");
}

?>