<?php
session_start();
// error_reporting(0);
include "../../function.php";

$akunName           = mysqli_real_escape_string($conn, $_POST["akunName"]);

$query_team     = mysqli_query($conn, "SELECT * FROM data_akun WHERE nama_akun = '$akunName'");
$data_team      = $query_team->fetch_assoc();
$id_pengurus    = $data_team["id_pengurus"];
$nomorID        = $data_team["nomor_id"];
$pemegang       = $data_team["pemegang"];
$team           = $data_team["team"];
$kategoriName   = $data_team["kategori"];
// die(var_dump($kategoriName));
$tanggalName        = mysqli_real_escape_string($conn, $_POST["tanggalName"]);
if ($kategoriName == "Facebook") {
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

$seranganName   = mysqli_real_escape_string($conn, $_POST["seranganName"]);
$sn             = RemoveSpecialChar($seranganName);
$serangan       = str_replace(' ', '', $sn);
$donaturName    = mysqli_real_escape_string($conn, $_POST["donaturName"]);
$dn             = RemoveSpecialChar($donaturName);
$donatur        = str_replace(' ', '', $dn);
$responName     = mysqli_real_escape_string($conn, $_POST["responName"]);
$rn             = RemoveSpecialChar($responName);
$respon         = str_replace(' ', '', $rn);
$noResponName   = mysqli_real_escape_string($conn, $_POST["noResponName"]);
$nrn            = RemoveSpecialChar($noResponName);
$noRespon       = str_replace(' ', '', $nrn);
$nom_acak       = mysqli_real_escape_string($conn, $_POST["transferName"]);
$tf             = RemoveSpecialChar($nom_acak);
$transfer       = str_replace(' ', '', $tf);
$ip             = get_client_ip();
$date           = date("Y-m-d H:i:s");

$qTanggal = mysqli_query($conn, "SELECT * FROM input_laporan_media WHERE tgl_laporan = '$tanggalName' AND nama_akun = '$akunName' ");

if (mysqli_fetch_assoc($qTanggal)) {
    echo "1";
    return false;
}
$query              = mysqli_query($conn, "SELECT * FROM input_laporan_media WHERE nama_akun = '$akunName' ORDER BY `id` DESC ");
$data               = $query->fetch_array();
if ($kategoriName == "Facebook") {
    
    $totalTeman         = $data["total_teman"];

} else {
    $total_pengikut     = $data["total_pengikut"];
    $total_mengikuti    = $data["total_mengikuti"];
}

if ($kategoriName == "Facebook") {
    if ($totalTeman > 0) {
        if ($teman > $totalTeman) {
            $temanBaruName = $teman - $totalTeman;
            $sql = "INSERT INTO input_laporan_media (id_pengurus, nomor_id, pemegang, nama_akun, tgl_laporan, total_teman, total_add, teman_baru, teman_hapus, total_pengikut, total_mengikuti, pengikut_baru,  mengikuti_baru, hapus_pengikut, hapus_mengikuti, totalSerangan, donatur, respon, tidak_respon, total_income, team, kategori) VALUES 
                ('$id_pengurus', '$nomorID', '$pemegang', '$akunName', '$tanggalName', '$teman', '$add', '$temanBaruName', '0', '0', '0', '0', '0', '0', '0', '$serangan', '$donatur', '$respon', '$noRespon', '$transfer', '$team', '$kategoriName' )";
            
            
        } else {
            $temanHapusName = $totalTeman - $teman;
            $sql = "INSERT INTO input_laporan_media (id_pengurus, nomor_id, pemegang, nama_akun, tgl_laporan, total_teman, total_add, teman_baru, teman_hapus, total_pengikut, total_mengikuti, pengikut_baru,  mengikuti_baru, hapus_pengikut, hapus_mengikuti, totalSerangan, donatur, respon, tidak_respon, total_income, team, kategori) VALUES 
                ('$id_pengurus', '$nomorID', '$pemegang', '$akunName', '$tanggalName', '$teman', '$add', '0', '$temanHapusName', '0', '0', '0', '0', '0', '0', '$serangan', '$donatur', '$respon', '$noRespon', '$transfer', '$team', '$kategoriName' )";
            
        }
        
    } else {
        $sql = "INSERT INTO input_laporan_media (id_pengurus, nomor_id, pemegang, nama_akun, tgl_laporan, total_teman, total_add, teman_baru, teman_hapus, total_pengikut, total_mengikuti, pengikut_baru,  mengikuti_baru, hapus_pengikut, hapus_mengikuti, totalSerangan, donatur, respon, tidak_respon, total_income, team, kategori) VALUES 
            ('$id_pengurus', '$nomorID', '$pemegang', '$akunName', '$tanggalName', '$teman', '$add', '0', '0', '0', '0', '0', '0', '0', '0', '$serangan', '$donatur', '$respon', '$noRespon', '$transfer', '$team', '$kategoriName' )";
    }
} else {
    if ($total_pengikut > 0 && $total_mengikuti > 0) {
        if ($pengikut > $total_pengikut && $mengikuti > $total_mengikuti) {
            $pengikutBaruName = $pengikut - $total_pengikut;
            $mengikutiBaruName = $mengikuti - $total_mengikuti;
            $sql = "INSERT INTO input_laporan_media (id_pengurus, nomor_id, pemegang, nama_akun, tgl_laporan, total_teman, total_add, teman_baru, teman_hapus, total_pengikut, total_mengikuti, pengikut_baru,  mengikuti_baru, hapus_pengikut, hapus_mengikuti, totalSerangan, donatur, respon, tidak_respon, total_income, team, kategori) VALUES 
                ('$id_pengurus', '$nomorID', '$pemegang', '$akunName', '$tanggalName', '0', '0', '0', '0', '$pengikut', '$mengikuti', '$pengikutBaruName', '$mengikutiBaruName', '0', '0', '$serangan', '$donatur', '$respon', '$noRespon', '$transfer', '$team', '$kategoriName' )";

        } else if ($pengikut < $total_pengikut && $mengikuti > $total_mengikuti) {
            $pengikutHapusName = $total_pengikut - $pengikut;
            $mengikutiBaruName = $mengikuti - $total_mengikuti;
            $sql = "INSERT INTO input_laporan_media (id_pengurus, nomor_id, pemegang, nama_akun, tgl_laporan, total_teman, total_add, teman_baru, teman_hapus, total_pengikut, total_mengikuti, pengikut_baru,  mengikuti_baru, hapus_pengikut, hapus_mengikuti, totalSerangan, donatur, respon, tidak_respon, total_income, team, kategori) VALUES 
                ('$id_pengurus', '$nomorID', '$pemegang', '$akunName', '$tanggalName', '0', '0', '0', '0', '$pengikut', '$mengikuti', '0', '$mengikutiBaruName', '$pengikutHapusName', '0', '$serangan', '$donatur', '$respon', '$noRespon', '$transfer', '$team', '$kategoriName' )";
        
        } else if ($pengikut > $total_pengikut && $mengikuti < $total_mengikuti) {
            $pengikutBaruName = $pengikut - $total_pengikut;
            $mengikutiHapusName = $total_mengikuti - $mengikuti;
            $sql = "INSERT INTO input_laporan_media (id_pengurus, nomor_id, pemegang, nama_akun, tgl_laporan, total_teman, total_add, teman_baru, teman_hapus, total_pengikut, total_mengikuti, pengikut_baru,  mengikuti_baru, hapus_pengikut, hapus_mengikuti, totalSerangan, donatur, respon, tidak_respon, total_income, team, kategori) VALUES 
            ('$id_pengurus', '$nomorID', '$pemegang', '$akunName', '$tanggalName', '0', '0', '0', '0', '$pengikut', '$mengikuti', '$pengikutBaruName', '0', '0', '$mengikutiHapusName', '$serangan', '$donatur', '$respon', '$noRespon', '$transfer', '$team', '$kategoriName' )";

        } else {
            $pengikutHapusName = $total_pengikut - $pengikut;
            $mengikutiHapusName = $total_mengikuti - $mengikuti;
            $sql = "INSERT INTO input_laporan_media (id_pengurus, nomor_id, pemegang, nama_akun, tgl_laporan, total_teman, total_add, teman_baru, teman_hapus, total_pengikut, total_mengikuti, pengikut_baru,  mengikuti_baru, hapus_pengikut, hapus_mengikuti, totalSerangan, donatur, respon, tidak_respon, total_income, team, kategori) VALUES 
            ('$id_pengurus', '$nomorID', '$pemegang', '$akunName', '$tanggalName', '0', '0', '0', '0', '$pengikut', '$mengikuti', '0', '0', '$pengikutHapusName', '$mengikutiHapusName', '$serangan', '$donatur', '$respon', '$noRespon', '$transfer', '$team', '$kategoriName' )";
        }
        
    } else {
        $sql = "INSERT INTO input_laporan_media (id_pengurus, nomor_id, pemegang, nama_akun, tgl_laporan, total_teman, total_add, teman_baru, teman_hapus, total_pengikut, total_mengikuti, pengikut_baru,  mengikuti_baru, hapus_pengikut, hapus_mengikuti, totalSerangan, donatur, respon, tidak_respon, total_income, team, kategori) VALUES 
        ('$id_pengurus', '$nomorID', '$pemegang', '$akunName', '$tanggalName', '0', '0', '0', '0', '$pengikut', '$mengikuti', '0', '0', '0', '0', '$serangan', '$donatur', '$respon', '$noRespon', '$transfer', '$team', '$kategoriName' )";
    }
    
}

$hasil = mysqli_query($conn,$sql);

$tanggal = date("d-m-Y" , strtotime($tanggalName));

$sql = mysqli_query($conn, 
    "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
        '{$dataLog[nama]}', 
        '{$dataLog[posisi]}', 
        '$ip', 
        '$date', 
        '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Menginput laporan akun $akunName tanggal $tanggal')
    ");


?>