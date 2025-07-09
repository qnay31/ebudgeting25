<?php
session_start();
error_reporting(0);
include '../function.php';
$bulan          = date("Y-m-d");
$bln            = substr($bulan, 5, 2);
$oldBln         = $bln - 1;
$convert        = convertDateDBtoIndo($bulan);
$bulanan        = substr($convert, 3, -5);
$tglKemarin     = date('Y-m-d', strtotime("-1 day", strtotime($bulan)));
$blnKemarin     = date('Y-m-d', strtotime("-1 month", strtotime($bulan)));
$convert2       = convertDateDBtoIndo($blnKemarin);
$bulananLalu    = substr($convert2, 3, -5);
$browser        = ExactBrowserName();
if ($browser) {
    mysqli_query($conn, "UPDATE akun_pengurus SET status = 'Online' WHERE id = '$dataLog[id]'");
}

$i = 1;
if (
    $_COOKIE["id_pengurus"] == "kepala_pengajuan" ||
    $_COOKIE["id_pengurus"] == "management_keuangan" ||
    $_COOKIE["id_pengurus"] == "ketua_yayasan") {
        // program
    $k = mysqli_query($conn, "SELECT * FROM data_program WHERE bulan = '$bulanan'");
    $skl = $k;
    while($dBulanan = mysqli_fetch_array($skl))
    {
        $i++;   
        $d_anggaranBulanan = $dBulanan['anggaran_global'];
        $total_anggaranBulanan[$i] = $d_anggaranBulanan;

        $hasil_anggaranBulanan = array_sum($total_anggaranBulanan);

        $d_terpakaiBulanan = $dBulanan['terpakai_global'];
        $total_terpakaiBulanan[$i] = $d_terpakaiBulanan;

        $hasil_terpakaiBulanan = array_sum($total_terpakaiBulanan);
        // die(var_dump($d_anggaranBulanan));
        $cashbackBulanan = $hasil_anggaranBulanan-$hasil_terpakaiBulanan;
    }

    // logistik
    $k2 = mysqli_query($conn, "SELECT * FROM data_logistik WHERE bulan = '$bulanan'");
    $skl2 = $k2;
    while($dBulanan2 = mysqli_fetch_array($skl2))
    {
        $i++;   
        $d_anggaranBulanan2 = $dBulanan2['anggaran_global'];
        $total_anggaranBulanan2[$i] = $d_anggaranBulanan2;

        $hasil_anggaranBulanan2 = array_sum($total_anggaranBulanan2);

        $d_terpakaiBulanan2 = $dBulanan2['terpakai_global'];
        $total_terpakaiBulanan2[$i] = $d_terpakaiBulanan2;

        $hasil_terpakaiBulanan2 = array_sum($total_terpakaiBulanan2);
        $cashbackBulanan2 = $hasil_anggaranBulanan2-$hasil_terpakaiBulanan2;
    }

    // aset
    $k3 = mysqli_query($conn, "SELECT * FROM data_aset_yayasan WHERE bulan = '$bulanan'");
    $skl3 = $k3;
    while($dBulanan3 = mysqli_fetch_array($skl3))
    {
        $i++;   
        $d_anggaranBulanan3 = $dBulanan3['anggaran_global'];
        $total_anggaranBulanan3[$i] = $d_anggaranBulanan3;

        $hasil_anggaranBulanan3 = array_sum($total_anggaranBulanan3);

        $d_terpakaiBulanan3 = $dBulanan3['terpakai_global'];
        $total_terpakaiBulanan3[$i] = $d_terpakaiBulanan3;

        $hasil_terpakaiBulanan3 = array_sum($total_terpakaiBulanan3);
        $cashbackBulanan3 = $hasil_anggaranBulanan3-$hasil_terpakaiBulanan3;
    }

    // uang makan
    $k4 = mysqli_query($conn, "SELECT * FROM data_uang_makan WHERE bulan = '$bulanan'");
    $skl4 = $k4;
    while($dBulanan4 = mysqli_fetch_array($skl4))
    {
        $i++;   
        $d_anggaranBulanan4 = $dBulanan4['anggaran_global'];
        $total_anggaranBulanan4[$i] = $d_anggaranBulanan4;

        $hasil_anggaranBulanan4 = array_sum($total_anggaranBulanan4);

        $d_terpakaiBulanan4 = $dBulanan4['terpakai_global'];
        $total_terpakaiBulanan4[$i] = $d_terpakaiBulanan4;

        $hasil_terpakaiBulanan4 = array_sum($total_terpakaiBulanan4);
        $cashbackBulanan4 = $hasil_anggaranBulanan4-$hasil_terpakaiBulanan4;
    }

    // gaji karyawan
    $k5 = mysqli_query($conn, "SELECT * FROM data_gaji_karyawan WHERE bulan = '$bulanan'");
    $skl5 = $k5;
    while($dBulanan5 = mysqli_fetch_array($skl5))
    {
        $i++;   
        $d_anggaranBulanan5 = $dBulanan5['anggaran_global'];
        $total_anggaranBulanan5[$i] = $d_anggaranBulanan5;

        $hasil_anggaranBulanan5 = array_sum($total_anggaranBulanan5);

        $d_terpakaiBulanan5 = $dBulanan5['terpakai_global'];
        $total_terpakaiBulanan5[$i] = $d_terpakaiBulanan5;

        $hasil_terpakaiBulanan5 = array_sum($total_terpakaiBulanan5);
        $cashbackBulanan5 = $hasil_anggaranBulanan5-$hasil_terpakaiBulanan5;
    }

    $k6 = mysqli_query($conn, "SELECT * FROM data_anggaran_lain WHERE bulan = '$bulanan'");
    $skl6 = $k6;
    while($dBulanan6 = mysqli_fetch_array($skl6))
    {
        $i++;   
        $d_anggaranBulanan6 = $dBulanan6['anggaran_global'];
        $total_anggaranBulanan6[$i] = $d_anggaranBulanan6;

        $hasil_anggaranBulanan6 = array_sum($total_anggaranBulanan6);

        $d_terpakaiBulanan6 = $dBulanan6['terpakai_global'];
        $total_terpakaiBulanan6[$i] = $d_terpakaiBulanan6;

        $hasil_terpakaiBulanan6 = array_sum($total_terpakaiBulanan6);
        $cashbackBulanan6 = $hasil_anggaranBulanan6-$hasil_terpakaiBulanan6;
    }

    $k7 = mysqli_query($conn, "SELECT * FROM data_maintenance WHERE bulan = '$bulanan'");
    $skl7 = $k7;
    while($dBulanan7 = mysqli_fetch_array($skl7))
    {
        $i++;   
        $d_anggaranBulanan7 = $dBulanan7['anggaran_global'];
        $total_anggaranBulanan7[$i] = $d_anggaranBulanan7;

        $hasil_anggaranBulanan7 = array_sum($total_anggaranBulanan7);

        $d_terpakaiBulanan7 = $dBulanan7['terpakai_global'];
        $total_terpakaiBulanan7[$i] = $d_terpakaiBulanan7;

        $hasil_terpakaiBulanan7 = array_sum($total_terpakaiBulanan7);
        $cashbackBulanan7 = $hasil_anggaranBulanan7-$hasil_terpakaiBulanan7;
    }

    $k8 = mysqli_query($conn, "SELECT * FROM data_operasional_yayasan WHERE bulan = '$bulanan'");
    $skl8 = $k8;
    while($dBulanan8 = mysqli_fetch_array($skl8))
    {
        $i++;   
        $d_anggaranBulanan8 = $dBulanan8['anggaran_global'];
        $total_anggaranBulanan8[$i] = $d_anggaranBulanan8;

        $hasil_anggaranBulanan8 = array_sum($total_anggaranBulanan8);

        $d_terpakaiBulanan8 = $dBulanan8['terpakai_global'];
        $total_terpakaiBulanan8[$i] = $d_terpakaiBulanan8;

        $hasil_terpakaiBulanan8 = array_sum($total_terpakaiBulanan8);
        $cashbackBulanan8 = $hasil_anggaranBulanan8-$hasil_terpakaiBulanan8;
    }

    $k9 = mysqli_query($conn, "SELECT * FROM data_paudqu WHERE bulan = '$bulanan'");
    $skl9 = $k9;
    while($dBulanan9 = mysqli_fetch_array($skl9))
    {
        $i++;   
        $d_anggaranBulanan9 = $dBulanan9['anggaran_global'];
        $total_anggaranBulanan9[$i] = $d_anggaranBulanan9;

        $hasil_anggaranBulanan9 = array_sum($total_anggaranBulanan9);

        $d_terpakaiBulanan9 = $dBulanan9['terpakai_global'];
        $total_terpakaiBulanan9[$i] = $d_terpakaiBulanan9;

        $hasil_terpakaiBulanan9 = array_sum($total_terpakaiBulanan9);
        $cashbackBulanan9 = $hasil_anggaranBulanan9-$hasil_terpakaiBulanan9;
    }

    $k10 = mysqli_query($conn, "SELECT * FROM data_jasa WHERE bulan = '$bulanan'");
    $skl10 = $k10;
    while($dBulanan10 = mysqli_fetch_array($skl10))
    {
        $i++;   
        $d_anggaranBulanan10 = $dBulanan10['anggaran_global'];
        $total_anggaranBulanan10[$i] = $d_anggaranBulanan10;

        $hasil_anggaranBulanan10 = array_sum($total_anggaranBulanan10);

        $d_terpakaiBulanan10 = $dBulanan10['terpakai_global'];
        $total_terpakaiBulanan10[$i] = $d_terpakaiBulanan10;

        $hasil_terpakaiBulanan10 = array_sum($total_terpakaiBulanan10);
        $cashbackBulanan10 = $hasil_anggaranBulanan10-$hasil_terpakaiBulanan10;
    }

    $anggaran_globalBulanan = $hasil_anggaranBulanan+$hasil_anggaranBulanan2+$hasil_anggaranBulanan3+$hasil_anggaranBulanan4+$hasil_anggaranBulanan5+$hasil_anggaranBulanan6+$hasil_anggaranBulanan7+$hasil_anggaranBulanan8+$hasil_anggaranBulanan9+$hasil_anggaranBulanan10;

    $terpakai_globalBulanan = $hasil_terpakaiBulanan+$hasil_terpakaiBulanan2+$hasil_terpakaiBulanan3+$hasil_terpakaiBulanan4+$hasil_terpakaiBulanan5+$hasil_terpakaiBulanan6+$hasil_terpakaiBulanan7+$hasil_terpakaiBulanan8+$hasil_terpakaiBulanan9+$hasil_terpakaiBulanan10;

    $cashback_globalBulananan = $anggaran_globalBulanan-$terpakai_globalBulanan;

    if (
        $_COOKIE["id_pengurus"] == "management_keuangan" ||
        $_COOKIE["id_pengurus"] == "ketua_yayasan") {
        
        $qIncome = mysqli_query($conn, "SELECT * FROM data_income WHERE bulan = '$bulanan'" );
        while ($dBulanIncome = mysqli_fetch_array($qIncome)) {
            $i++;

            $dIncomeI = $dBulanIncome["income_I"];
            $total_IncomeI[$i] = $dIncomeI;
            $hasil_IncomeI = array_sum($total_IncomeI);

            $dIncomeII = $dBulanIncome["income_II"];
            $total_II[$i] = $dIncomeII;
            $hasil_II = array_sum($total_II);

            $dIncomeNonResi = $dBulanIncome["income_tanpaResi"];
            $total_IncomeNonResi[$i] = $dIncomeNonResi;
            $hasil_IncomeNonResi = array_sum($total_IncomeNonResi);
        }
        $totalIncome = $hasil_IncomeI+$hasil_II+$hasil_IncomeNonResi;
    }

    if ($_COOKIE["id_pengurus"] == "ketua_yayasan") {
        $qFBKemarin  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tglKemarin' AND status = 'OK' AND team = 'I' ");
        while($dIncomeFBKemarin = mysqli_fetch_array($qFBKemarin))
        {
            $i++;   
            $total_IncomeFBKemarin[$i] = $dIncomeFBKemarin['jumlah_tf'];
            $hasil_IncomeFBKemarin = array_sum($total_IncomeFBKemarin);
        }

        $qFBHariIni  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$bulan' AND status = 'OK' AND team = 'I' ");
        while($dIncomeFBHariIni = mysqli_fetch_array($qFBHariIni))
        {
            $i++;   
            $total_IncomeFBHariIni[$i] = $dIncomeFBHariIni['jumlah_tf'];
            $hasil_IncomeFBHariIni = array_sum($total_IncomeFBHariIni);
        }

        $qFBBulanIni  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'I' ");
        while($dIncomeFBBulanIni = mysqli_fetch_array($qFBBulanIni))
        {
            $i++;   
            $total_IncomeFBBulanIni[$i] = $dIncomeFBBulanIni['jumlah_tf'];
            $hasil_IncomeFBBulanIni = array_sum($total_IncomeFBBulanIni);
        }

        $qFBKemarin2  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tglKemarin' AND status = 'OK' AND team = 'II' ");
        while($dIncomeFBKemarin2 = mysqli_fetch_array($qFBKemarin2))
        {
            $i++;   
            $total_IncomeFBKemarin2[$i] = $dIncomeFBKemarin2['jumlah_tf'];
            $hasil_IncomeFBKemarin2 = array_sum($total_IncomeFBKemarin2);
        }

        $qFBHariIni2  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$bulan' AND status = 'OK' AND team = 'II' ");
        while($dIncomeFBHariIni2 = mysqli_fetch_array($qFBHariIni2))
        {
            $i++;   
            $total_IncomeFBHariIni2[$i] = $dIncomeFBHariIni2['jumlah_tf'];
            $hasil_IncomeFBHariIni2 = array_sum($total_IncomeFBHariIni2);
        }

        $qFBBulanIni2  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'II' ");
        while($dIncomeFBBulanIni2 = mysqli_fetch_array($qFBBulanIni2))
        {
            $i++;   
            $total_IncomeFBBulanIni2[$i] = $dIncomeFBBulanIni2['jumlah_tf'];
            $hasil_IncomeFBBulanIni2 = array_sum($total_IncomeFBBulanIni2);
        }

        $qNonResi  = mysqli_query($conn, "SELECT * FROM input_incometanparesi WHERE MONTH(tgl_pemasukan) = '$bln' AND status = 'Terverifikasi' ");
        while($dIncomeNonResi = mysqli_fetch_array($qNonResi))
        {
            $i++;   
            $total_IncomeNonResiIni[$i] = $dIncomeNonResi['income'];
            $hasil_IncomeNonResiIni = array_sum($total_IncomeNonResiIni);
        }

        $qLalu  = mysqli_query($conn, "SELECT * FROM data_income WHERE bulan = '$bulananLalu'" );
        while($dIncomeLalu = mysqli_fetch_array($qLalu))
        {
            $i++;   
            $dIncomeGlobal = $dIncomeLalu["income_global"];
            $total_Global[$i] = $dIncomeGlobal;
            $hasil_IncomeLaluIni = array_sum($total_Global);
        }

        $qBulan  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK'");
        while($dIncomeBulan = mysqli_fetch_array($qBulan))
        {
            $i++;   
            $total_IncomeBulanIni[$i] = $dIncomeBulan['jumlah_tf'];
            $hasil_IncomeBulanIni = array_sum($total_IncomeBulanIni);
        }

        $seluruhIncome = $hasil_IncomeBulanIni+$hasil_IncomeNonResiIni;
    }
} else if(
    $_COOKIE["id_pengurus"] == "sosial_media"
) {
    // Bulan lalu
    $qLampau  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE nomor_id = '$dataLog[id]' AND MONTH(tanggal_tf) = '$oldBln' AND status = 'OK' ");
    while($dIncomeLalu = mysqli_fetch_array($qLampau))
    {
        $i++;   
        $total_IncomeLalu[$i] = $dIncomeLalu['jumlah_tf'];
        $hasil_IncomeLalu = array_sum($total_IncomeLalu);
    }

    // Bulan Ini
    $qToday  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE nomor_id = '$dataLog[id]' AND MONTH(tanggal_tf) = '$bln' AND status = 'OK' ");
    while($dIncomeBulanan = mysqli_fetch_array($qToday))
    {
        $i++;   
        $total_IncomeBulanIni[$i] = $dIncomeBulanan['jumlah_tf'];
        $hasil_IncomeBulanIni = array_sum($total_IncomeBulanIni);
    }

    // tahun 
    $qTahun  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE nomor_id = '$dataLog[id]' AND status = 'OK' ");
    while($dIncomeTahunan = mysqli_fetch_array($qTahun))
    {
        $i++;   
        $total_IncomeTahunan[$i] = $dIncomeTahunan['jumlah_tf'];
        $hasil_IncomeTahunan = array_sum($total_IncomeTahunan);
    }

    // kamarin
    $qKemarin  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE nomor_id = '$dataLog[id]' AND tanggal_tf = '$tglKemarin' AND status = 'OK' ");
    while($dIncomeKemarin = mysqli_fetch_array($qKemarin))
    {
        $i++;   
        $total_IncomeKemarin[$i] = $dIncomeKemarin['jumlah_tf'];
        $hasil_IncomeKemarin = array_sum($total_IncomeKemarin);
    }

    // hari ini
    $qHariIni  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE nomor_id = '$dataLog[id]' AND tanggal_tf = '$bulan' AND status = 'OK' ");
    while($dIncomeHariIni = mysqli_fetch_array($qHariIni))
    {
        $i++;   
        $total_IncomeHariIni[$i] = $dIncomeHariIni['jumlah_tf'];
        $hasil_IncomeHariIni = array_sum($total_IncomeHariIni);
    }
} else if (
    $_COOKIE["id_pengurus"] == "kepala_income"
) {
    $qI  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'I' ");
    while($dIncomeI = mysqli_fetch_array($qI))
    {
        $i++;   
        $total_IncomeIIni[$i] = $dIncomeI['jumlah_tf'];
        $hasil_IncomeIIni = array_sum($total_IncomeIIni);
    }

    $qII  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'II' ");
    while($dIncomeII = mysqli_fetch_array($qII))
    {
        $i++;   
        $total_IncomeIIIni[$i] = $dIncomeII['jumlah_tf'];
        $hasil_IncomeIIIni = array_sum($total_IncomeIIIni);
    }

    $qNonResi  = mysqli_query($conn, "SELECT * FROM input_incometanparesi WHERE MONTH(tgl_pemasukan) = '$bln' AND status = 'Terverifikasi' ");
    while($dIncomeNonResi = mysqli_fetch_array($qNonResi))
    {
        $i++;   
        $total_IncomeNonResiIni[$i] = $dIncomeNonResi['income'];
        $hasil_IncomeNonResiIni = array_sum($total_IncomeNonResiIni);
    }

    $qLalu  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$oldBln' AND status = 'OK'");
    while($dIncomeLalu = mysqli_fetch_array($qLalu))
    {
        $i++;   
        $total_IncomeLaluIni[$i] = $dIncomeLalu['jumlah_tf'];
        $hasil_IncomeLaluIni = array_sum($total_IncomeLaluIni);
    }

    $qBulan  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK'");
    while($dIncomeBulan = mysqli_fetch_array($qBulan))
    {
        $i++;   
        $total_IncomeBulanIni[$i] = $dIncomeBulan['jumlah_tf'];
        $hasil_IncomeBulanIni = array_sum($total_IncomeBulanIni);
    }

    $seluruhIncome = $hasil_IncomeBulanIni+$hasil_IncomeNonResiIni;
    
} else if($_COOKIE["id_pengurus"] == "manager_facebook" ||
        $_COOKIE["id_pengurus"] == "manager_instagram") {
    // INCOME TEAM I
    $qKemarin  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tglKemarin' AND status = 'OK' AND team = 'I' ");
    while($dIncomeKemarin = mysqli_fetch_array($qKemarin))
    {
        $i++;   
        $total_IncomeKemarin[$i] = $dIncomeKemarin['jumlah_tf'];
        $hasil_IncomeKemarin = array_sum($total_IncomeKemarin);

    }
    
    $qHariIni  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$bulan' AND status = 'OK' AND team = 'I' ");
    while($dIncomeHariIni = mysqli_fetch_array($qHariIni))
    {
        $i++;   
        $total_IncomeHariIni[$i] = $dIncomeHariIni['jumlah_tf'];
        $hasil_IncomeHariIni = array_sum($total_IncomeHariIni);
    }

    $qBulanLalu  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$oldBln' AND status = 'OK' AND team = 'I' ");
    while($dIncomeBulanLalu = mysqli_fetch_array($qBulanLalu))
    {
        $i++;   
        $total_IncomeBulanLalu[$i] = $dIncomeBulanLalu['jumlah_tf'];
        $hasil_IncomeBulanLalu = array_sum($total_IncomeBulanLalu);
    }

    $qBulanIni  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'I' ");
    while($dIncomeBulanIni = mysqli_fetch_array($qBulanIni))
    {
        $i++;   
        $total_IncomeBulanIni[$i] = $dIncomeBulanIni['jumlah_tf'];
        $hasil_IncomeBulanIni = array_sum($total_IncomeBulanIni);
    }

    // INCOME TEAM II
    $qKemarin2  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tglKemarin' AND status = 'OK' AND team = 'II' ");
    while($dIncomeKemarin2 = mysqli_fetch_array($qKemarin2))
    {
        $i++;   
        $total_IncomeKemarin2[$i] = $dIncomeKemarin2['jumlah_tf'];
        $hasil_IncomeKemarin2 = array_sum($total_IncomeKemarin2);
    }

    $qHariIni2  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$bulan' AND status = 'OK' AND team = 'II' ");
    while($dIncomeHariIni2 = mysqli_fetch_array($qHariIni2))
    {
        $i++;   
        $total_IncomeHariIni2[$i] = $dIncomeHariIni2['jumlah_tf'];
        $hasil_IncomeHariIni2 = array_sum($total_IncomeHariIni2);
    }

    $qBulanLalu2  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$oldBln' AND status = 'OK' AND team = 'II' ");
    while($dIncomeBulanLalu2 = mysqli_fetch_array($qBulanLalu2))
    {
        $i++;   
        $total_IncomeBulanLalu2[$i] = $dIncomeBulanLalu2['jumlah_tf'];
        $hasil_IncomeBulanLalu2 = array_sum($total_IncomeBulanLalu2);
    }

    $qBulanIni2  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'II' ");
    while($dIncomeBulanIni2 = mysqli_fetch_array($qBulanIni2))
    {
        $i++;   
        $total_IncomeBulanIni2[$i] = $dIncomeBulanIni2['jumlah_tf'];
        $hasil_IncomeBulanIni2 = array_sum($total_IncomeBulanIni2);
    }

    $qIncome = mysqli_query($conn, "SELECT * FROM data_income");
    while ($dBulanIncomeFacebook = mysqli_fetch_array($qIncome)) {
        $i++;
        $dIncomeFacebook = $dBulanIncomeFacebook["income_I"];
        $total_Facebook[$i] = $dIncomeFacebook;
        $hasil_Facebook = array_sum($total_Facebook);

        $dIncomeFacebook2 = $dBulanIncomeFacebook["income_II"];
        $total_Facebook2[$i] = $dIncomeFacebook2;
        $hasil_Facebook2 = array_sum($total_Facebook2);

    }

}


// ===========================   json data   ========================================= //

    if ($_COOKIE["id_pengurus"] == "kepala_pengajuan") {
        $data = [
            "anggaranProgram" => $hasil_anggaranBulanan,
            "terpakaiProgram" => $hasil_terpakaiBulanan,
            "cashbackProgram" => $cashbackBulanan,
            "anggaranLogistik" => $hasil_anggaranBulanan2,
            "terpakaiLogistik" => $hasil_terpakaiBulanan2,
            "cashbackLogistik" => $cashbackBulanan2,
            "anggaranAset" => $hasil_anggaranBulanan3,
            "terpakaiAset" => $hasil_terpakaiBulanan3,
            "cashbackAset" => $cashbackBulanan3,
            "anggaranMakan" => $hasil_anggaranBulanan4,
            "terpakaiMakan" => $hasil_terpakaiBulanan4,
            "cashbackMakan" => $cashbackBulanan4,
            "anggaranGaji" => $hasil_anggaranBulanan5,
            "terpakaiGaji" => $hasil_terpakaiBulanan5,
            "cashbackGaji" => $cashbackBulanan5,
            "anggaranLainnya" => $hasil_anggaranBulanan6,
            "terpakaiLainnya" => $hasil_terpakaiBulanan6,
            "cashbackLainnya" => $cashbackBulanan6,
            "anggaranMaintenance" => $hasil_anggaranBulanan7,
            "terpakaiMaintenance" => $hasil_terpakaiBulanan7,
            "cashbackMaintenance" => $cashbackBulanan7,
            "anggaranOperasional" => $hasil_anggaranBulanan8,
            "terpakaiOperasional" => $hasil_terpakaiBulanan8,
            "cashbackOperasional" => $cashbackBulanan8,
            "anggaranPaud" => $hasil_anggaranBulanan9,
            "terpakaiPaud" => $hasil_terpakaiBulanan9,
            "cashbackPaud" => $cashbackBulanan9,
            "anggaranJasa" => $hasil_anggaranBulanan10,
            "terpakaiJasa" => $hasil_terpakaiBulanan10,
            "cashbackJasa" => $cashbackBulanan10,
            "anggaranGlobal" => $anggaran_globalBulanan,
            "terpakaiGlobal" => $terpakai_globalBulanan,
            "cashbackGlobal" => $cashback_globalBulananan,
            "online"            => $nama
        ];
    } else if (
        $_COOKIE["id_pengurus"] == "management_keuangan"
        
    ) {
        $data = [
            "anggaranProgram" => $hasil_anggaranBulanan,
            "terpakaiProgram" => $hasil_terpakaiBulanan,
            "cashbackProgram" => $cashbackBulanan,
            "anggaranLogistik" => $hasil_anggaranBulanan2,
            "terpakaiLogistik" => $hasil_terpakaiBulanan2,
            "cashbackLogistik" => $cashbackBulanan2,
            "anggaranAset" => $hasil_anggaranBulanan3,
            "terpakaiAset" => $hasil_terpakaiBulanan3,
            "cashbackAset" => $cashbackBulanan3,
            "anggaranMakan" => $hasil_anggaranBulanan4,
            "terpakaiMakan" => $hasil_terpakaiBulanan4,
            "cashbackMakan" => $cashbackBulanan4,
            "anggaranGaji" => $hasil_anggaranBulanan5,
            "terpakaiGaji" => $hasil_terpakaiBulanan5,
            "cashbackGaji" => $cashbackBulanan5,
            "anggaranLainnya" => $hasil_anggaranBulanan6,
            "terpakaiLainnya" => $hasil_terpakaiBulanan6,
            "cashbackLainnya" => $cashbackBulanan6,
            "anggaranMaintenance" => $hasil_anggaranBulanan7,
            "terpakaiMaintenance" => $hasil_terpakaiBulanan7,
            "cashbackMaintenance" => $cashbackBulanan7,
            "anggaranOperasional" => $hasil_anggaranBulanan8,
            "terpakaiOperasional" => $hasil_terpakaiBulanan8,
            "cashbackOperasional" => $cashbackBulanan8,
            "anggaranPaud" => $hasil_anggaranBulanan9,
            "terpakaiPaud" => $hasil_terpakaiBulanan9,
            "cashbackPaud" => $cashbackBulanan9,
            "anggaranJasa" => $hasil_anggaranBulanan10,
            "terpakaiJasa" => $hasil_terpakaiBulanan10,
            "cashbackJasa" => $cashbackBulanan10,
            "anggaranGlobal" => $anggaran_globalBulanan,
            "terpakaiGlobal" => $terpakai_globalBulanan,
            "cashbackGlobal" => $cashback_globalBulananan,
            "incomeI"       => $hasil_IncomeI,
            "incomeII"      => $hasil_II,
            "incomeNonResi"     => $hasil_IncomeNonResi,
            "incomeSeluruh"     => $totalIncome,
            "incomeCashback"    => $totalIncome+$cashback_globalBulananan,
            "online"            => $nama
        ];

    } else if ($_COOKIE["id_pengurus"] == "ketua_yayasan") {
        $data = [
            "anggaranProgram" => $hasil_anggaranBulanan,
            "terpakaiProgram" => $hasil_terpakaiBulanan,
            "cashbackProgram" => $cashbackBulanan,
            "anggaranLogistik" => $hasil_anggaranBulanan2,
            "terpakaiLogistik" => $hasil_terpakaiBulanan2,
            "cashbackLogistik" => $cashbackBulanan2,
            "anggaranAset" => $hasil_anggaranBulanan3,
            "terpakaiAset" => $hasil_terpakaiBulanan3,
            "cashbackAset" => $cashbackBulanan3,
            "anggaranMakan" => $hasil_anggaranBulanan4,
            "terpakaiMakan" => $hasil_terpakaiBulanan4,
            "cashbackMakan" => $cashbackBulanan4,
            "anggaranGaji" => $hasil_anggaranBulanan5,
            "terpakaiGaji" => $hasil_terpakaiBulanan5,
            "cashbackGaji" => $cashbackBulanan5,
            "anggaranLainnya" => $hasil_anggaranBulanan6,
            "terpakaiLainnya" => $hasil_terpakaiBulanan6,
            "cashbackLainnya" => $cashbackBulanan6,
            "anggaranMaintenance" => $hasil_anggaranBulanan7,
            "terpakaiMaintenance" => $hasil_terpakaiBulanan7,
            "cashbackMaintenance" => $cashbackBulanan7,
            "anggaranOperasional" => $hasil_anggaranBulanan8,
            "terpakaiOperasional" => $hasil_terpakaiBulanan8,
            "cashbackOperasional" => $cashbackBulanan8,
            "anggaranPaud" => $hasil_anggaranBulanan9,
            "terpakaiPaud" => $hasil_terpakaiBulanan9,
            "cashbackPaud" => $cashbackBulanan9,
            "anggaranJasa" => $hasil_anggaranBulanan10,
            "terpakaiJasa" => $hasil_terpakaiBulanan10,
            "cashbackJasa" => $cashbackBulanan10,
            "anggaranGlobal" => $anggaran_globalBulanan,
            "terpakaiGlobal" => $terpakai_globalBulanan,
            "cashbackGlobal" => $cashback_globalBulananan,
            "incomeI"   => $hasil_IncomeFBBulanIni,
            "incomeII"  => $hasil_IncomeFBBulanIni2,
            "incomeNonResi" => $hasil_IncomeNonResiIni,
            "incomeLalu" => $hasil_IncomeLaluIni,
            "incomeBulan" => $hasil_IncomeBulanIni,
            "incomeSeluruh" => $seluruhIncome,
            "incomeKemarin" => $hasil_IncomeKemarin,
            "incomeHariIni" => $hasil_IncomeHariIni,
            "incomeFBKemarin" => $hasil_IncomeFBKemarin,
            "incomeFBHariIni" => $hasil_IncomeFBHariIni,
            "incomeFBBulanIni" => $hasil_IncomeFBBulanIni,
            "incomeFBKemarin2" => $hasil_IncomeFBKemarin2,
            "incomeFBHariIni2" => $hasil_IncomeFBHariIni2,
            "incomeFBBulanIni2" => $hasil_IncomeFBBulanIni2,
        ];

    } else if (
        $_COOKIE["id_pengurus"] == "sosial_media"
    ) { 
        $data = [
            "incomeKemarin"     => $hasil_IncomeLalu,
            "incomeIni"         => $hasil_IncomeBulanIni,
            "incomeTahun"       => $hasil_IncomeTahunan,
            "incomeTglKemarin"  => $hasil_IncomeKemarin,
            "incomeHariIni"     => $hasil_IncomeHariIni,
            "online"            => $nama
        ];

    } else if ($_COOKIE["id_pengurus"] == "kepala_income") {
        $data = [
            "incomeI"       => $hasil_IncomeIIni,
            "incomeII"      => $hasil_IncomeIIIni,
            "incomeNonResi" => $hasil_IncomeNonResiIni,
            "incomeLalu"    => $hasil_IncomeLaluIni,
            "incomeBulan"   => $hasil_IncomeBulanIni,
            "incomeSeluruh" => $seluruhIncome,
            "online"        => $nama
        ];

    } else if (
        $_COOKIE["id_pengurus"] == "manager_facebook" || 
        $_COOKIE["id_pengurus"] == "manager_instagram") {
        $data = [
            "incomeKemarin" => $hasil_IncomeKemarin,
            "incomeHariIni" => $hasil_IncomeHariIni,
            "incomeBulanIni" => $hasil_IncomeBulanIni,
            "incomeBulanLalu" => $hasil_IncomeBulanLalu,
            "incomeTahunIni" => $hasil_Facebook,
            "incomeFb2Kemarin" => $hasil_IncomeKemarin2,
            "incomeFb2HariIni" => $hasil_IncomeHariIni2,
            "incomeFb2BulanIni" => $hasil_IncomeBulanIni2,
            "incomeBulanLalu2" => $hasil_IncomeBulanLalu2,
            "incomeTahunIni2" => $hasil_Facebook2,
        ];
    }

    echo json_encode($data);

    $conn->close();
?>