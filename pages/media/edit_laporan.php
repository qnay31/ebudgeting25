<?php
error_reporting(0);
session_start();
include "../../function.php";

$id                 = mysqli_real_escape_string($conn, $_POST["inputId"]);
$query_kategori     = mysqli_query($conn, "SELECT * FROM input_laporan_media WHERE id = '$id'");
$data_kategori      = $query_kategori->fetch_assoc();
$kategori           = $data_kategori["kategori"];
$tanggalName        = mysqli_real_escape_string($conn, $_POST["tanggalName"]);
if ($kategori == "Facebook") {
    $temanName          = mysqli_real_escape_string($conn, $_POST["temanName"]);
    $tn                 = RemoveSpecialChar($temanName);
    $teman              = str_replace(' ', '', $tn);
    $addName            = mysqli_real_escape_string($conn, $_POST["addName"]);
    $an                 = RemoveSpecialChar($addName);
    $add                = str_replace(' ', '', $an);
} else {
    $pengikutName       = mysqli_real_escape_string($conn, $_POST["pengikutName"]);
    $pn                 = RemoveSpecialChar($pengikutName);
    $pengikut           = str_replace(' ', '', $pn);
    $mengikutiName      = mysqli_real_escape_string($conn, $_POST["mengikutiName"]);
    $mn                 = RemoveSpecialChar($mengikutiName);
    $mengikuti          = str_replace(' ', '', $mn);
}

$seranganName       = mysqli_real_escape_string($conn, $_POST["seranganName"]);
$sn                 = RemoveSpecialChar($seranganName);
$serangan           = str_replace(' ', '', $sn);
$donaturName        = mysqli_real_escape_string($conn, $_POST["donaturName"]);
$dn                 = RemoveSpecialChar($donaturName);
$donatur            = str_replace(' ', '', $dn);
$responName         = mysqli_real_escape_string($conn, $_POST["responName"]);
$rn                 = RemoveSpecialChar($responName);
$respon             = str_replace(' ', '', $rn);
$noResponName       = mysqli_real_escape_string($conn, $_POST["noResponName"]);
$nrn                = RemoveSpecialChar($noResponName);
$noRespon           = str_replace(' ', '', $nrn);
$nom_acak           = mysqli_real_escape_string($conn, $_POST["transferName"]);
$tf                 = RemoveSpecialChar($nom_acak);
$transfer           = str_replace(' ', '', $tf);
$ip                 = get_client_ip();
$date               = date("Y-m-d H:i:s");

if ($kategori == "Facebook") {
    $query  = mysqli_query($conn, "SELECT * FROM input_laporan_media WHERE tgl_laporan = '$tanggalName' AND total_teman = $teman AND total_add = $add AND totalSerangan = $serangan AND donatur = $donatur AND respon = $respon AND tidak_respon = $noRespon AND total_income = $transfer ");

} else {
    $query  = mysqli_query($conn, "SELECT * FROM input_laporan_media WHERE tgl_laporan = '$tanggalName' AND total_pengikut = $pengikut AND total_mengikuti = $mengikuti AND totalSerangan = $serangan AND donatur = $donatur AND respon = $respon AND tidak_respon = $noRespon AND total_income = $transfer ");
}

$num    = $query->num_rows;

if($num === 1 ) {
    echo "1";
    
} else {

    $query      = mysqli_query($conn, "SELECT * FROM input_laporan_media WHERE id = '$id'");
    $data       = $query->fetch_assoc();
    $nama_akun  = $data["nama_akun"];
    if ($kategori == "Facebook") {
        $totalTeman     = $data["total_teman"];
        $temanBaru      = $data["teman_baru"];
        $temanHapus     = $data["teman_hapus"];
        if ($temanBaru > 0) {
            $newTotalBaru   = $totalTeman - $temanBaru;
            
        } else {
            $newTotalBaru   = $totalTeman + $temanHapus;
        }

        if ($totalTeman == $teman) {
            if ($teman > $totalTeman) {
                $temanBaruName = $teman - $totalTeman;
                    $sql = "UPDATE input_laporan_media SET 
                    `tgl_laporan` = '$tanggalName',
                    `total_teman` = '$teman',
                    `teman_baru` = '$temanBaruName',
                    `teman_hapus` = '0',
                    `total_add` = '$add',
                    `totalSerangan` = '$serangan',
                    `donatur` = '$donatur',
                    `respon` = '$respon',
                    `tidak_respon` = '$noRespon',
                    `total_income` = '$transfer'
                    WHERE id = '$id'";
        
            } else if ($teman == $totalTeman) {
                    $sql = "UPDATE input_laporan_media SET 
                    `tgl_laporan` = '$tanggalName',
                    `total_teman` = '$teman',
                    `total_add` = '$add',
                    `totalSerangan` = '$serangan',
                    `donatur` = '$donatur',
                    `respon` = '$respon',
                    `tidak_respon` = '$noRespon',
                    `total_income` = '$transfer'
                    WHERE id = '$id'";
                
            } else {
                $temanHapusName = $totalTeman - $teman;
                    $sql = "UPDATE input_laporan_media SET 
                    `tgl_laporan` = '$tanggalName',
                    `total_teman` = '$teman',
                    `teman_baru` = '0',
                    `teman_hapus` = '$temanHapusName',
                    `total_add` = '$add',
                    `totalSerangan` = '$serangan',
                    `donatur` = '$donatur',
                    `respon` = '$respon',
                    `tidak_respon` = '$noRespon',
                    `total_income` = '$transfer'
                    WHERE id = '$id'";
            }
    
        } else {
            if ($teman > $newTotalBaru) {
                $temanBaruName = $teman - $newTotalBaru;
                    $sql = "UPDATE input_laporan_media SET 
                    `tgl_laporan` = '$tanggalName',
                    `total_teman` = '$teman',
                    `teman_baru` = '$temanBaruName',
                    `teman_hapus` = '0',
                    `total_add` = '$add',
                    `totalSerangan` = '$serangan',
                    `donatur` = '$donatur',
                    `respon` = '$respon',
                    `tidak_respon` = '$noRespon',
                    `total_income` = '$transfer'
                    WHERE id = '$id'";
                
            } else {
                $temanHapusName = $newTotalBaru - $teman;
                    $sql = "UPDATE input_laporan_media SET 
                    `tgl_laporan` = '$tanggalName',
                    `total_teman` = '$teman',
                    `teman_baru` = '0',
                    `teman_hapus` = '$temanHapusName',
                    `total_add` = '$add',
                    `totalSerangan` = '$serangan',
                    `donatur` = '$donatur',
                    `respon` = '$respon',
                    `tidak_respon` = '$noRespon',
                    `total_income` = '$transfer'
                    WHERE id = '$id'";
            }
        }
    
    } else {
        $total_pengikut     = $data["total_pengikut"];
        $total_mengikuti    = $data["total_mengikuti"];
        $pengikut_baru      = $data["pengikut_baru"];
        $mengikuti_baru     = $data["mengikuti_baru"];
        $hapus_pengikut     = $data["hapus_pengikut"];
        $hapus_mengikuti    = $data["hapus_mengikuti"];
        
        if ($pengikut_baru > 0) {
            $newPengikutBaru   = $total_pengikut - $pengikut_baru;
            
        } else {
            $newPengikutBaru   = $total_pengikut + $hapus_pengikut;
        }

        if ($mengikuti_baru > 0 ) {
            $newMengikutiBaru   = $total_mengikuti - $mengikuti_baru;

        } else {
            $newMengikutiBaru   = $total_mengikuti + $hapus_mengikuti;
        }

        if ($pengikut == $total_pengikut && $mengikuti == $total_mengikuti) {
            if ($pengikut > $total_pengikut && $mengikuti > $total_mengikuti) {
                $pengikutBaruName = $pengikut - $total_pengikut;
                $mengikutiBaruName = $mengikuti - $total_mengikuti;
                $sql = "UPDATE input_laporan_media SET 
                    `tgl_laporan` = '$tanggalName',
                    `total_pengikut` = '$pengikut',
                    `total_mengikuti` = '$mengikuti',
                    `pengikut_baru` = '$pengikutBaruName',
                    `mengikuti_baru` = '$mengikutiBaruName',
                    `hapus_pengikut` = '0',
                    `hapus_mengikuti` = '0',
                    `totalSerangan` = '$serangan',
                    `donatur` = '$donatur',
                    `respon` = '$respon',
                    `tidak_respon` = '$noRespon',
                    `total_income` = '$transfer'
                    WHERE id = '$id'";

            }  else if ($pengikut < $total_pengikut && $mengikuti > $total_mengikuti) {
                $pengikutHapusName = $total_pengikut - $pengikut;
                $mengikutiBaruName = $mengikuti - $total_mengikuti;
                $sql = "UPDATE input_laporan_media SET 
                        `tgl_laporan` = '$tanggalName',
                        `total_pengikut` = '$pengikut',
                        `total_mengikuti` = '$mengikuti',
                        `pengikut_baru` = '0',
                        `mengikuti_baru` = '$mengikutiBaruName',
                        `hapus_pengikut` = '$pengikutHapusName',
                        `hapus_mengikuti` = '0',
                        `totalSerangan` = '$serangan',
                        `donatur` = '$donatur',
                        `respon` = '$respon',
                        `tidak_respon` = '$noRespon',
                        `total_income` = '$transfer'
                        WHERE id = '$id'";
    
            } else if ($pengikut > $total_pengikut && $mengikuti < $total_mengikuti) {
                $pengikutBaruName = $pengikut - $total_pengikut;
                $mengikutiHapusName = $total_mengikuti - $mengikuti;
                $sql = "UPDATE input_laporan_media SET 
                        `tgl_laporan` = '$tanggalName',
                        `total_pengikut` = '$pengikut',
                        `total_mengikuti` = '$mengikuti',
                        `pengikut_baru` = '$pengikutBaruName',
                        `mengikuti_baru` = '0',
                        `hapus_pengikut` = '0',
                        `hapus_mengikuti` = '$mengikutiHapusName',
                        `totalSerangan` = '$serangan',
                        `donatur` = '$donatur',
                        `respon` = '$respon',
                        `tidak_respon` = '$noRespon',
                        `total_income` = '$transfer'
                        WHERE id = '$id'";
    
            } else if ($pengikut < $total_pengikut && $mengikuti < $total_mengikuti) {
                $pengikutHapusName = $total_pengikut - $pengikut;
                $mengikutiHapusName = $total_mengikuti - $mengikuti;
                $sql = "UPDATE input_laporan_media SET 
                        `tgl_laporan` = '$tanggalName',
                        `total_pengikut` = '$pengikut',
                        `total_mengikuti` = '$mengikuti',
                        `pengikut_baru` = '0',
                        `mengikuti_baru` = '0',
                        `hapus_pengikut` = '$pengikutHapusName',
                        `hapus_mengikuti` = '$mengikutiHapusName',
                        `totalSerangan` = '$serangan',
                        `donatur` = '$donatur',
                        `respon` = '$respon',
                        `tidak_respon` = '$noRespon',
                        `total_income` = '$transfer'
                        WHERE id = '$id'";
            } else {
                $sql = "UPDATE input_laporan_media SET 
                        `tgl_laporan` = '$tanggalName',
                        `total_pengikut` = '$pengikut',
                        `total_mengikuti` = '$mengikuti',
                        `totalSerangan` = '$serangan',
                        `donatur` = '$donatur',
                        `respon` = '$respon',
                        `tidak_respon` = '$noRespon',
                        `total_income` = '$transfer'
                        WHERE id = '$id'";
            }
        } else {
            if ($pengikut > $newPengikutBaru && $mengikuti > $newMengikutiBaru) {
                $pengikutBaruName = $pengikut - $newPengikutBaru;
                $mengikutiBaruName = $mengikuti - $newMengikutiBaru;
                $sql = "UPDATE input_laporan_media SET 
                    `tgl_laporan` = '$tanggalName',
                    `total_pengikut` = '$pengikut',
                    `total_mengikuti` = '$mengikuti',
                    `pengikut_baru` = '$pengikutBaruName',
                    `mengikuti_baru` = '$mengikutiBaruName',
                    `hapus_pengikut` = '0',
                    `hapus_mengikuti` = '0',
                    `totalSerangan` = '$serangan',
                    `donatur` = '$donatur',
                    `respon` = '$respon',
                    `tidak_respon` = '$noRespon',
                    `total_income` = '$transfer'
                    WHERE id = '$id'";

            }  else if ($pengikut < $newPengikutBaru && $mengikuti > $newMengikutiBaru) {
                $pengikutHapusName = $newPengikutBaru - $pengikut;
                $mengikutiBaruName = $mengikuti - $newMengikutiBaru;
                $sql = "UPDATE input_laporan_media SET 
                        `tgl_laporan` = '$tanggalName',
                        `total_pengikut` = '$pengikut',
                        `total_mengikuti` = '$mengikuti',
                        `pengikut_baru` = '0',
                        `mengikuti_baru` = '$mengikutiBaruName',
                        `hapus_pengikut` = '$pengikutHapusName',
                        `hapus_mengikuti` = '0',
                        `totalSerangan` = '$serangan',
                        `donatur` = '$donatur',
                        `respon` = '$respon',
                        `tidak_respon` = '$noRespon',
                        `total_income` = '$transfer'
                        WHERE id = '$id'";
    
            } else if ($pengikut > $newPengikutBaru && $mengikuti < $newMengikutiBaru) {
                $pengikutBaruName = $pengikut - $newPengikutBaru;
                $mengikutiHapusName = $newMengikutiBaru - $mengikuti;
                $sql = "UPDATE input_laporan_media SET 
                        `tgl_laporan` = '$tanggalName',
                        `total_pengikut` = '$pengikut',
                        `total_mengikuti` = '$mengikuti',
                        `pengikut_baru` = '$pengikutBaruName',
                        `mengikuti_baru` = '0',
                        `hapus_pengikut` = '0',
                        `hapus_mengikuti` = '$mengikutiHapusName',
                        `totalSerangan` = '$serangan',
                        `donatur` = '$donatur',
                        `respon` = '$respon',
                        `tidak_respon` = '$noRespon',
                        `total_income` = '$transfer'
                        WHERE id = '$id'";
    
            } else {
                $pengikutHapusName = $newPengikutBaru - $pengikut;
                $mengikutiHapusName = $newMengikutiBaru - $mengikuti;
                $sql = "UPDATE input_laporan_media SET 
                        `tgl_laporan` = '$tanggalName',
                        `total_pengikut` = '$pengikut',
                        `total_mengikuti` = '$mengikuti',
                        `pengikut_baru` = '0',
                        `mengikuti_baru` = '0',
                        `hapus_pengikut` = '$pengikutHapusName',
                        `hapus_mengikuti` = '$mengikutiHapusName',
                        `totalSerangan` = '$serangan',
                        `donatur` = '$donatur',
                        `respon` = '$respon',
                        `tidak_respon` = '$noRespon',
                        `total_income` = '$transfer'
                        WHERE id = '$id'";
            }
        }
    }
    
    $hasil = mysqli_query($conn,$sql);

    mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '{$dataLog[nama]}', 
            '{$dataLog[posisi]}', 
            '$ip', 
            '$date', 
            '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Mengubah Data laporan akun media Sosialnya')
        ");
    
    echo "0";
    }

?>