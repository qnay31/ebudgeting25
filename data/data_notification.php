<?php
session_start();
error_reporting(0);
include './../function.php';

if ($_COOKIE["id_pengurus"] == "kepala_pengajuan") {
    // program
    $q  = mysqli_query($conn, "SELECT * FROM input_program WHERE laporan = 'Belum Laporan' AND status = 'OK' ORDER BY `tgl_pengajuan` DESC");
    $s = $q->num_rows;
    
    // paud
    $q_paud  = mysqli_query($conn, "SELECT * FROM input_paudqu WHERE laporan = 'Belum Laporan' AND status = 'OK' ORDER BY `tgl_pengajuan` DESC");
    $paud = $q_paud->num_rows;

    // logistik
    $n_log  = mysqli_query($conn, "SELECT * FROM input_logistik WHERE laporan = 'Belum Laporan' AND status = 'OK' ORDER BY `tgl_pengajuan` DESC");
    $logistik = $n_log->num_rows;

    // aset yayasan
    $n_as   = mysqli_query($conn, "SELECT * FROM input_aset_yayasan WHERE laporan = 'Belum Laporan' AND status = 'OK' ORDER BY `tgl_dibuat` DESC");
    $aset   = $n_as->num_rows;

    // uang makan
    $n_uang     = mysqli_query($conn, "SELECT * FROM input_uang_makan WHERE laporan = 'Belum Laporan' AND status = 'OK' ORDER BY `tgl_dibuat` DESC");
    $uang_makan = $n_uang->num_rows;

    // gaji karyawan
    $n_gaji         = mysqli_query($conn, "SELECT * FROM input_gaji_karyawan WHERE laporan = 'Belum Laporan' AND status = 'OK' ORDER BY `tgl_dibuat` DESC");
    $gaji_karyawan  = $n_gaji->num_rows;

    // biaya lainnya
    $n_lain         = mysqli_query($conn, "SELECT * FROM input_anggaran_lain WHERE laporan = 'Belum Laporan' AND status = 'OK' ORDER BY `tgl_dibuat` DESC");
    $anggaran_lain  = $n_lain->num_rows;

    // Maintenance
    $n_main         = mysqli_query($conn, "SELECT * FROM input_maintenance WHERE laporan = 'Belum Laporan' AND status = 'OK' ORDER BY `tgl_dibuat` DESC");
    $maintenance    = $n_main->num_rows;

    // operasional yayasan
    $n_oy         = mysqli_query($conn, "SELECT * FROM input_operasional_yayasan WHERE laporan = 'Belum Laporan' AND status = 'OK' ORDER BY `tgl_dibuat` DESC");
    $operasional_yayasan    = $n_oy->num_rows;

    // jasa 
    $n_jasa         = mysqli_query($conn, "SELECT * FROM input_jasa WHERE laporan = 'Belum Laporan' AND status = 'OK' ORDER BY `tgl_dibuat` DESC");
    $jasa    = $n_jasa->num_rows;

    $notifLaporan = $s+$paud+$logistik+$aset+$uang_makan+$gaji_karyawan+$anggaran_lain+$maintenance+$operasional_yayasan+$jasa;
   
    $data = [
        "totalNotif"    => "$notifLaporan",
        "program"       => "$s",
        "logistik"      => "$logistik",
        "aset"          => "$aset",
        "makan"         => "$uang_makan",
        "gaji"          => "$gaji_karyawan",
        "lainnya"       => "$anggaran_lain",
        "maintenance"   => "$maintenance",
        "operasional"   => "$operasional_yayasan",
        "jasa"          => "$jasa",
        "paud"          => "$paud"
    ];

} else if($_COOKIE["id_pengurus"] == "kepala_income") {
     // income media sosial
     $n_in      = mysqli_query($conn, "SELECT * FROM input_income_media WHERE status = 'Pending' ORDER BY `tanggal_tf` DESC");
     $income    = $n_in->num_rows;

     $data = [
        "totalNotifIncome"    => "$income",
    ];

} else {
    // program
    $q  = mysqli_query($conn, "SELECT * FROM input_program WHERE laporan = 'Belum Laporan' AND status = 'Pending' ORDER BY `tgl_pengajuan` DESC");
    $s = $q->num_rows;

    $q2  = mysqli_query($conn, "SELECT * FROM input_program WHERE laporan = 'Menunggu Verifikasi' ORDER BY `tgl_pengajuan` DESC");
    $s2 = $q2->num_rows;
    
    // paudqu
    $q_paud  = mysqli_query($conn, "SELECT * FROM input_paudqu WHERE laporan = 'Belum Laporan' AND status = 'Pending' ORDER BY `tgl_pengajuan` DESC");
    $paud = $q_paud->num_rows;

    $q_paud2  = mysqli_query($conn, "SELECT * FROM input_paudqu WHERE laporan = 'Menunggu Verifikasi' ORDER BY `tgl_pengajuan` DESC");
    $paud2 = $q_paud2->num_rows;

    // logistik
    $n_log  = mysqli_query($conn, "SELECT * FROM input_logistik WHERE laporan = 'Belum Laporan' AND status = 'Pending' ORDER BY `tgl_pengajuan` DESC");
    $logistik = $n_log->num_rows;

    $n_log2  = mysqli_query($conn, "SELECT * FROM input_logistik WHERE laporan = 'Menunggu Verifikasi' ORDER BY `tgl_pengajuan` DESC");
    $logistik2 = $n_log2->num_rows;

    // aset yayasan
    $n_as   = mysqli_query($conn, "SELECT * FROM input_aset_yayasan WHERE laporan = 'Belum Laporan' AND status = 'Pending' ORDER BY `tgl_dibuat` DESC");
    $aset   = $n_as->num_rows;

    $n_as2  = mysqli_query($conn, "SELECT * FROM input_aset_yayasan WHERE laporan = 'Menunggu Verifikasi' ORDER BY `tgl_dibuat` DESC");
    $aset2  = $n_as2->num_rows;

    // uang makan
    $n_uang     = mysqli_query($conn, "SELECT * FROM input_uang_makan WHERE laporan = 'Belum Laporan' AND status = 'Pending' ORDER BY `tgl_dibuat` DESC");
    $uang_makan = $n_uang->num_rows;

    $n_uang2        = mysqli_query($conn, "SELECT * FROM input_uang_makan WHERE laporan = 'Menunggu Verifikasi' ORDER BY `tgl_dibuat` DESC");
    $uang_makan2    = $n_uang2->num_rows;

    // gaji karyawan
    $n_gaji         = mysqli_query($conn, "SELECT * FROM input_gaji_karyawan WHERE laporan = 'Belum Laporan' AND status = 'Pending' ORDER BY `tgl_dibuat` DESC");
    $gaji_karyawan  = $n_gaji->num_rows;

    $n_gaji2        = mysqli_query($conn, "SELECT * FROM input_gaji_karyawan WHERE laporan = 'Menunggu Verifikasi' ORDER BY `tgl_dibuat` DESC");
    $gaji_karyawan2 = $n_gaji2->num_rows;

    // biaya lainnya
    $n_lain         = mysqli_query($conn, "SELECT * FROM input_anggaran_lain WHERE laporan = 'Belum Laporan' AND status = 'Pending' ORDER BY `tgl_dibuat` DESC");
    $anggaran_lain  = $n_lain->num_rows;

    $n_lain2        = mysqli_query($conn, "SELECT * FROM input_anggaran_lain WHERE laporan = 'Menunggu Verifikasi' ORDER BY `tgl_dibuat` DESC");
    $anggaran_lain2 = $n_lain2->num_rows;

    // Maintenance
    $n_main         = mysqli_query($conn, "SELECT * FROM input_maintenance WHERE laporan = 'Belum Laporan' AND status = 'Pending' ORDER BY `tgl_dibuat` DESC");
    $maintenance    = $n_main->num_rows;

    $n_main2        = mysqli_query($conn, "SELECT * FROM input_maintenance WHERE laporan = 'Menunggu Verifikasi' ORDER BY `tgl_dibuat` DESC");
    $maintenance2   = $n_main2->num_rows;

    // jasa
    $n_jasa       = mysqli_query($conn, "SELECT * FROM input_jasa WHERE laporan = 'Belum Laporan' AND status = 'Pending' ORDER BY `tgl_dibuat` DESC");
    $jasa    = $n_jasa->num_rows;

    $n_jasa2        = mysqli_query($conn, "SELECT * FROM input_jasa WHERE laporan = 'Menunggu Verifikasi' ORDER BY `tgl_dibuat` DESC");
    $jasa2   = $n_jasa2->num_rows;

    // income media sosial
    $n_inMedia      = mysqli_query($conn, "SELECT * FROM income_global WHERE status = 'Menunggu Verifikasi' ORDER BY `tgl_pemasukan` DESC");
    $incomeMedia    = $n_inMedia->num_rows;
    
    // non resi
    $n_inNonresi      = mysqli_query($conn, "SELECT * FROM input_incometanparesi WHERE status = 'Pending' ORDER BY `tgl_pemasukan` DESC");
    $incomeNonresi    = $n_inNonresi->num_rows;

    // operasional yayasan
    $n_oy         = mysqli_query($conn, "SELECT * FROM input_operasional_yayasan WHERE laporan = 'Belum Laporan' AND status = 'Pending' ORDER BY `tgl_dibuat` DESC");
    $operasional_yayasan    = $n_oy->num_rows;

    $n_oy2        = mysqli_query($conn, "SELECT * FROM input_operasional_yayasan WHERE laporan = 'Menunggu Verifikasi' ORDER BY `tgl_dibuat` DESC");
    $operasional_yayasan2   = $n_oy2->num_rows;

    $notifPengajuan = $s+$paud+$logistik+$aset+$uang_makan+$gaji_karyawan+$anggaran_lain+$maintenance+$operasional_yayasan+$jasa;
    $notifIncome = $incomeMedia+$incomeNonresi;
    $notifLaporan = $s2+$paud2+$logistik2+$aset2+$uang_makan2+$gaji_karyawan2+$anggaran_lain2+$maintenance2+$operasional_yayasan2+$jasa2;
  
    $seluruh    = $notifPengajuan+$notifLaporan+$notifIncome;

    $data = [
        "totalPengajuan"        => "$notifPengajuan",
        "program"               => "$s",
        "logistik"              => "$logistik",
        "aset"                  => "$aset",
        "makan"                 => "$uang_makan",
        "gaji"                  => "$gaji_karyawan",
        "lainnya"               => "$anggaran_lain",
        "maintenance"           => "$maintenance",
        "operasional"           => "$operasional_yayasan",
        "jasa"                  => "$jasa",
        "paud"                  => "$paud",
        "incomeMedia"           => "$incomeMedia",
        "incomeNonResi"         => "$incomeNonresi",
        "totalLaporan"          => "$notifLaporan",
        "laporan_program"       => "$s2",
        "laporan_logistik"      => "$logistik2",
        "laporan_aset"          => "$aset2",
        "laporan_makan"         => "$uang_makan2",
        "laporan_gaji"          => "$gaji_karyawan2",
        "laporan_lainnya"       => "$anggaran_lain2",
        "laporan_maintenance"   => "$maintenance2",
        "laporan_operasional"   => "$operasional_yayasan2",
        "laporan_jasa"          => "$jasa2",
        "laporan_paud"          => "$paud2",
        "totalSeluruh"          => "$seluruh"
    ];
}

echo json_encode($data);

$conn->close();

?>