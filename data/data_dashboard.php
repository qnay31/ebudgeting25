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

            $dIncomeIII = $dBulanIncome["income_III"];
            $total_III[$i] = $dIncomeIII;
            $hasil_III = array_sum($total_III);

            $dIncomeIV = $dBulanIncome["income_IV"];
            $total_IV[$i] = $dIncomeIV;
            $hasil_IV = array_sum($total_IV);

            $dIncomeV = $dBulanIncome["income_V"];
            $total_V[$i] = $dIncomeV;
            $hasil_V = array_sum($total_V);

            $dIncomeVI = $dBulanIncome["income_VI"];
            $total_VI[$i] = $dIncomeVI;
            $hasil_VI = array_sum($total_VI);

            $dIncomeVII = $dBulanIncome["income_VII"];
            $total_VII[$i] = $dIncomeVII;
            $hasil_VII = array_sum($total_VII);

            $dIncomeVIII = $dBulanIncome["income_VIII"];
            $total_VIII[$i] = $dIncomeVIII;
            $hasil_VIII = array_sum($total_VIII);

            $dIncomeIX = $dBulanIncome["income_IX"];
            $total_IX[$i] = $dIncomeIX;
            $hasil_IX = array_sum($total_IX);

            $dIncomeNonResi = $dBulanIncome["income_tanpaResi"];
            $total_IncomeNonResi[$i] = $dIncomeNonResi;
            $hasil_IncomeNonResi = array_sum($total_IncomeNonResi);
        }
        $totalIncome = $hasil_IncomeI+$hasil_II+$hasil_III+$hasil_IV+$hasil_V+$hasil_VI+$hasil_VII+$hasil_VIII+$hasil_IX+$hasil_IncomeNonResi;
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

        $qFBKemarin3  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tglKemarin' AND status = 'OK' AND team = 'III' ");
        while($dIncomeFBKemarin3 = mysqli_fetch_array($qFBKemarin3))
        {
            $i++;   
            $total_IncomeFBKemarin3[$i] = $dIncomeFBKemarin3['jumlah_tf'];
            $hasil_IncomeFBKemarin3 = array_sum($total_IncomeFBKemarin3);
        }

        $qFBHariIni3  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$bulan' AND status = 'OK' AND team = 'III' ");
        while($dIncomeFBHariIni3 = mysqli_fetch_array($qFBHariIni3))
        {
            $i++;   
            $total_IncomeFBHariIni3[$i] = $dIncomeFBHariIni3['jumlah_tf'];
            $hasil_IncomeFBHariIni3 = array_sum($total_IncomeFBHariIni3);
        }

        $qFBBulanIni3  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'III' ");
        while($dIncomeFBBulanIni3 = mysqli_fetch_array($qFBBulanIni3))
        {
            $i++;   
            $total_IncomeFBBulanIni3[$i] = $dIncomeFBBulanIni3['jumlah_tf'];
            $hasil_IncomeFBBulanIni3 = array_sum($total_IncomeFBBulanIni3);
        }

        $qFBKemarin4  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tglKemarin' AND status = 'OK' AND team = 'IV' ");
        while($dIncomeFBKemarin4 = mysqli_fetch_array($qFBKemarin4))
        {
            $i++;   
            $total_IncomeFBKemarin4[$i] = $dIncomeFBKemarin4['jumlah_tf'];
            $hasil_IncomeFBKemarin4 = array_sum($total_IncomeFBKemarin4);
        }

        $qFBHariIni4  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$bulan' AND status = 'OK' AND team = 'IV' ");
        while($dIncomeFBHariIni4 = mysqli_fetch_array($qFBHariIni4))
        {
            $i++;   
            $total_IncomeFBHariIni4[$i] = $dIncomeFBHariIni4['jumlah_tf'];
            $hasil_IncomeFBHariIni4 = array_sum($total_IncomeFBHariIni4);
        }

        $qFBBulanIni4  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'IV' ");
        while($dIncomeFBBulanIni4 = mysqli_fetch_array($qFBBulanIni4))
        {
            $i++;   
            $total_IncomeFBBulanIni4[$i] = $dIncomeFBBulanIni4['jumlah_tf'];
            $hasil_IncomeFBBulanIni4 = array_sum($total_IncomeFBBulanIni4);
        }

        $qFBKemarin5  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tglKemarin' AND status = 'OK' AND team = 'V' ");
        while($dIncomeFBKemarin5 = mysqli_fetch_array($qFBKemarin5))
        {
            $i++;   
            $total_IncomeFBKemarin5[$i] = $dIncomeFBKemarin5['jumlah_tf'];
            $hasil_IncomeFBKemarin5 = array_sum($total_IncomeFBKemarin5);
        }

        $qFBHariIni5  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$bulan' AND status = 'OK' AND team = 'V' ");
        while($dIncomeFBHariIni5 = mysqli_fetch_array($qFBHariIni5))
        {
            $i++;   
            $total_IncomeFBHariIni5[$i] = $dIncomeFBHariIni5['jumlah_tf'];
            $hasil_IncomeFBHariIni5 = array_sum($total_IncomeFBHariIni5);
        }

        $qFBBulanIni5  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'V' ");
        while($dIncomeFBBulanIni5 = mysqli_fetch_array($qFBBulanIni5))
        {
            $i++;   
            $total_IncomeFBBulanIni5[$i] = $dIncomeFBBulanIni5['jumlah_tf'];
            $hasil_IncomeFBBulanIni5 = array_sum($total_IncomeFBBulanIni5);
        }

        $qFBKemarin6  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tglKemarin' AND status = 'OK' AND team = 'VI' ");
        while($dIncomeFBKemarin6 = mysqli_fetch_array($qFBKemarin6))
        {
            $i++;   
            $total_IncomeFBKemarin6[$i] = $dIncomeFBKemarin6['jumlah_tf'];
            $hasil_IncomeFBKemarin6 = array_sum($total_IncomeFBKemarin6);
        }

        $qFBHariIni6  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$bulan' AND status = 'OK' AND team = 'VI' ");
        while($dIncomeFBHariIni6 = mysqli_fetch_array($qFBHariIni6))
        {
            $i++;   
            $total_IncomeFBHariIni6[$i] = $dIncomeFBHariIni6['jumlah_tf'];
            $hasil_IncomeFBHariIni6 = array_sum($total_IncomeFBHariIni6);
        }

        $qFBBulanIni6  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'VI' ");
        while($dIncomeFBBulanIni6 = mysqli_fetch_array($qFBBulanIni6))
        {
            $i++;   
            $total_IncomeFBBulanIni6[$i] = $dIncomeFBBulanIni6['jumlah_tf'];
            $hasil_IncomeFBBulanIni6 = array_sum($total_IncomeFBBulanIni6);
            
        }

        $qFBKemarin7  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tglKemarin' AND status = 'OK' AND team = 'VII' ");
        while($dIncomeFBKemarin7 = mysqli_fetch_array($qFBKemarin7))
        {
            $i++;   
            $total_IncomeFBKemarin7[$i] = $dIncomeFBKemarin7['jumlah_tf'];
            $hasil_IncomeFBKemarin7 = array_sum($total_IncomeFBKemarin7);
        }

        $qFBHariIni7  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$bulan' AND status = 'OK' AND team = 'VII' ");
        while($dIncomeFBHariIni7 = mysqli_fetch_array($qFBHariIni7))
        {
            $i++;   
            $total_IncomeFBHariIni7[$i] = $dIncomeFBHariIni7['jumlah_tf'];
            $hasil_IncomeFBHariIni7 = array_sum($total_IncomeFBHariIni7);
        }

        $qFBBulanIni7  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'VII' ");
        while($dIncomeFBBulanIni7 = mysqli_fetch_array($qFBBulanIni7))
        {
            $i++;   
            $total_IncomeFBBulanIni7[$i] = $dIncomeFBBulanIni7['jumlah_tf'];
            $hasil_IncomeFBBulanIni7 = array_sum($total_IncomeFBBulanIni7);
            
        }

        $qFBKemarin8  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tglKemarin' AND status = 'OK' AND team = 'VIII' ");
        while($dIncomeFBKemarin8 = mysqli_fetch_array($qFBKemarin8))
        {
            $i++;   
            $total_IncomeFBKemarin8[$i] = $dIncomeFBKemarin8['jumlah_tf'];
            $hasil_IncomeFBKemarin8 = array_sum($total_IncomeFBKemarin8);
        }

        $qFBHariIni8  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$bulan' AND status = 'OK' AND team = 'VIII' ");
        while($dIncomeFBHariIni8 = mysqli_fetch_array($qFBHariIni8))
        {
            $i++;   
            $total_IncomeFBHariIni8[$i] = $dIncomeFBHariIni8['jumlah_tf'];
            $hasil_IncomeFBHariIni8 = array_sum($total_IncomeFBHariIni8);
        }

        $qFBBulanIni8  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'VIII' ");
        while($dIncomeFBBulanIni8 = mysqli_fetch_array($qFBBulanIni8))
        {
            $i++;   
            $total_IncomeFBBulanIni8[$i] = $dIncomeFBBulanIni8['jumlah_tf'];
            $hasil_IncomeFBBulanIni8 = array_sum($total_IncomeFBBulanIni8);
            
        }

        $qFBKemarin9  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tglKemarin' AND status = 'OK' AND team = 'IX' ");
        while($dIncomeFBKemarin9 = mysqli_fetch_array($qFBKemarin9))
        {
            $i++;   
            $total_IncomeFBKemarin9[$i] = $dIncomeFBKemarin9['jumlah_tf'];
            $hasil_IncomeFBKemarin9 = array_sum($total_IncomeFBKemarin9);
        }

        $qFBHariIni9  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$bulan' AND status = 'OK' AND team = 'IX' ");
        while($dIncomeFBHariIni9 = mysqli_fetch_array($qFBHariIni9))
        {
            $i++;   
            $total_IncomeFBHariIni9[$i] = $dIncomeFBHariIni9['jumlah_tf'];
            $hasil_IncomeFBHariIni9 = array_sum($total_IncomeFBHariIni9);
        }

        $qFBBulanIni9  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'IX' ");
        while($dIncomeFBBulanIni9 = mysqli_fetch_array($qFBBulanIni9))
        {
            $i++;   
            $total_IncomeFBBulanIni9[$i] = $dIncomeFBBulanIni9['jumlah_tf'];
            $hasil_IncomeFBBulanIni9 = array_sum($total_IncomeFBBulanIni9);
            
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

    $qIII  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'III' ");
    while($dIncomeIII = mysqli_fetch_array($qIII))
    {
        $i++;   
        $total_IncomeIIIIni[$i] = $dIncomeIII['jumlah_tf'];
        $hasil_IncomeIIIIni = array_sum($total_IncomeIIIIni);
    }

    $qIV  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'IV' ");
    while($dIncomeIV = mysqli_fetch_array($qIV))
    {
        $i++;   
        $total_IncomeIVIni[$i] = $dIncomeIV['jumlah_tf'];
        $hasil_IncomeIVIni = array_sum($total_IncomeIVIni);
    }

    $qV  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'V' ");
    while($dIncomeV = mysqli_fetch_array($qV))
    {
        $i++;   
        $total_IncomeVIni[$i] = $dIncomeV['jumlah_tf'];
        $hasil_IncomeVIni = array_sum($total_IncomeVIni);
    }

    $qVI  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'VI' ");
    while($dIncomeVI = mysqli_fetch_array($qVI))
    {
        $i++;   
        $total_IncomeVIIni[$i] = $dIncomeVI['jumlah_tf'];
        $hasil_IncomeVIIni = array_sum($total_IncomeVIIni);
    }

    $qVII  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'VII' ");
    while($dIncomeVII = mysqli_fetch_array($qVII))
    {
        $i++;   
        $total_IncomeVIIIni[$i] = $dIncomeVII['jumlah_tf'];
        $hasil_IncomeVIIIni = array_sum($total_IncomeVIIIni);
    }

    $qVIII  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'VIII' ");
    while($dIncomeVIII = mysqli_fetch_array($qVIII))
    {
        $i++;   
        $total_IncomeVIIIIni[$i] = $dIncomeVIII['jumlah_tf'];
        $hasil_IncomeVIIIIni = array_sum($total_IncomeVIIIIni);
    }

    $qIX  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'IX' ");
    while($dIncomeIX = mysqli_fetch_array($qIX))
    {
        $i++;   
        $total_IncomeIXIni[$i] = $dIncomeIX['jumlah_tf'];
        $hasil_IncomeIXIni = array_sum($total_IncomeIXIni);
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
    
} else if($_COOKIE["id_pengurus"] == "manager_facebook") {
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

    // INCOME TEAM III
    $qKemarin3  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tglKemarin' AND status = 'OK' AND team = 'III' ");
    while($dIncomeKemarin3 = mysqli_fetch_array($qKemarin3))
    {
        $i++;   
        $total_IncomeKemarin3[$i] = $dIncomeKemarin3['jumlah_tf'];
        $hasil_IncomeKemarin3 = array_sum($total_IncomeKemarin3);
    }

    $qHariIni3  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$bulan' AND status = 'OK' AND team = 'III' ");
    while($dIncomeHariIni3 = mysqli_fetch_array($qHariIni3))
    {
        $i++;   
        $total_IncomeHariIni3[$i] = $dIncomeHariIni3['jumlah_tf'];
        $hasil_IncomeHariIni3 = array_sum($total_IncomeHariIni3);
    }

    $qBulanLalu3  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$oldBln' AND status = 'OK' AND team = 'III' ");
    while($dIncomeBulanLalu3 = mysqli_fetch_array($qBulanLalu3))
    {
        $i++;   
        $total_IncomeBulanLalu3[$i] = $dIncomeBulanLalu3['jumlah_tf'];
        $hasil_IncomeBulanLalu3 = array_sum($total_IncomeBulanLalu3);
    }

    $qBulanIni3  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'III' ");
    while($dIncomeBulanIni3 = mysqli_fetch_array($qBulanIni3))
    {
        $i++;   
        $total_IncomeBulanIni3[$i] = $dIncomeBulanIni3['jumlah_tf'];
        $hasil_IncomeBulanIni3 = array_sum($total_IncomeBulanIni3);
    }

    // INCOME TEAM IV
    $qKemarin4  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tglKemarin' AND status = 'OK' AND team = 'IV' ");
    while($dIncomeKemarin4 = mysqli_fetch_array($qKemarin4))
    {
        $i++;   
        $total_IncomeKemarin4[$i] = $dIncomeKemarin4['jumlah_tf'];
        $hasil_IncomeKemarin4 = array_sum($total_IncomeKemarin4);
    }

    $qHariIni4  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$bulan' AND status = 'OK' AND team = 'IV' ");
    while($dIncomeHariIni4 = mysqli_fetch_array($qHariIni4))
    {
        $i++;   
        $total_IncomeHariIni4[$i] = $dIncomeHariIni4['jumlah_tf'];
        $hasil_IncomeHariIni4 = array_sum($total_IncomeHariIni4);
    }

    $qBulanLalu4  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$oldBln' AND status = 'OK' AND team = 'IV' ");
    while($dIncomeBulanLalu4 = mysqli_fetch_array($qBulanLalu4))
    {
        $i++;   
        $total_IncomeBulanLalu4[$i] = $dIncomeBulanLalu4['jumlah_tf'];
        $hasil_IncomeBulanLalu4 = array_sum($total_IncomeBulanLalu4);
    }

    $qBulanIni4  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'IV' ");
    while($dIncomeBulanIni4 = mysqli_fetch_array($qBulanIni4))
    {
        $i++;   
        $total_IncomeBulanIni4[$i] = $dIncomeBulanIni4['jumlah_tf'];
        $hasil_IncomeBulanIni4 = array_sum($total_IncomeBulanIni4);
    }

    // INCOME TEAM V
    $qKemarin5  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tglKemarin' AND status = 'OK' AND team = 'V' ");
    while($dIncomeKemarin5 = mysqli_fetch_array($qKemarin5))
    {
        $i++;   
        $total_IncomeKemarin5[$i] = $dIncomeKemarin5['jumlah_tf'];
        $hasil_IncomeKemarin5 = array_sum($total_IncomeKemarin5);
    }

    $qHariIni5  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$bulan' AND status = 'OK' AND team = 'V' ");
    while($dIncomeHariIni5 = mysqli_fetch_array($qHariIni5))
    {
        $i++;   
        $total_IncomeHariIni5[$i] = $dIncomeHariIni5['jumlah_tf'];
        $hasil_IncomeHariIni5 = array_sum($total_IncomeHariIni5);
    }

    $qBulanLalu5  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$oldBln' AND status = 'OK' AND team = 'V' ");
    while($dIncomeBulanLalu5 = mysqli_fetch_array($qBulanLalu5))
    {
        $i++;   
        $total_IncomeBulanLalu5[$i] = $dIncomeBulanLalu5['jumlah_tf'];
        $hasil_IncomeBulanLalu5 = array_sum($total_IncomeBulanLalu5);
    }

    $qBulanIni5  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'V' ");
    while($dIncomeBulanIni5 = mysqli_fetch_array($qBulanIni5))
    {
        $i++;   
        $total_IncomeBulanIni5[$i] = $dIncomeBulanIni5['jumlah_tf'];
        $hasil_IncomeBulanIni5 = array_sum($total_IncomeBulanIni5);
    }

    // INCOME TEAM VI
    $qKemarin6  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tglKemarin' AND status = 'OK' AND team = 'VI' ");
    while($dIncomeKemarin6 = mysqli_fetch_array($qKemarin6))
    {
        $i++;   
        $total_IncomeKemarin6[$i] = $dIncomeKemarin6['jumlah_tf'];
        $hasil_IncomeKemarin6 = array_sum($total_IncomeKemarin6);
    }

    $qHariIni6  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$bulan' AND status = 'OK' AND team = 'VI' ");
    while($dIncomeHariIni6 = mysqli_fetch_array($qHariIni6))
    {
        $i++;   
        $total_IncomeHariIni6[$i] = $dIncomeHariIni6['jumlah_tf'];
        $hasil_IncomeHariIni6 = array_sum($total_IncomeHariIni6);
    }

    $qBulanLalu6  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$oldBln' AND status = 'OK' AND team = 'VI' ");
    while($dIncomeBulanLalu6 = mysqli_fetch_array($qBulanLalu6))
    {
        $i++;   
        $total_IncomeBulanLalu6[$i] = $dIncomeBulanLalu6['jumlah_tf'];
        $hasil_IncomeBulanLalu6 = array_sum($total_IncomeBulanLalu6);
    }

    $qBulanIni6  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'VI' ");
    while($dIncomeBulanIni6 = mysqli_fetch_array($qBulanIni6))
    {
        $i++;   
        $total_IncomeBulanIni6[$i] = $dIncomeBulanIni6['jumlah_tf'];
        $hasil_IncomeBulanIni6 = array_sum($total_IncomeBulanIni6);
    }

    // INCOME TEAM VII
    $qKemarin7  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tglKemarin' AND status = 'OK' AND team = 'VII' ");
    while($dIncomeKemarin7 = mysqli_fetch_array($qKemarin7))
    {
        $i++;   
        $total_IncomeKemarin7[$i] = $dIncomeKemarin7['jumlah_tf'];
        $hasil_IncomeKemarin7 = array_sum($total_IncomeKemarin7);
    }

    $qHariIni7  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$bulan' AND status = 'OK' AND team = 'VII' ");
    while($dIncomeHariIni7 = mysqli_fetch_array($qHariIni7))
    {
        $i++;   
        $total_IncomeHariIni7[$i] = $dIncomeHariIni7['jumlah_tf'];
        $hasil_IncomeHariIni7 = array_sum($total_IncomeHariIni7);
    }

    $qBulanLalu7  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$oldBln' AND status = 'OK' AND team = 'VII' ");
    while($dIncomeBulanLalu7 = mysqli_fetch_array($qBulanLalu7))
    {
        $i++;   
        $total_IncomeBulanLalu7[$i] = $dIncomeBulanLalu7['jumlah_tf'];
        $hasil_IncomeBulanLalu7 = array_sum($total_IncomeBulanLalu7);
    }

    $qBulanIni7  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'VII' ");
    while($dIncomeBulanIni7 = mysqli_fetch_array($qBulanIni7))
    {
        $i++;   
        $total_IncomeBulanIni7[$i] = $dIncomeBulanIni7['jumlah_tf'];
        $hasil_IncomeBulanIni7 = array_sum($total_IncomeBulanIni7);
    }

    // INCOME TEAM VIII
    $qKemarin8  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tglKemarin' AND status = 'OK' AND team = 'VIII' ");
    while($dIncomeKemarin8 = mysqli_fetch_array($qKemarin8))
    {
        $i++;   
        $total_IncomeKemarin8[$i] = $dIncomeKemarin8['jumlah_tf'];
        $hasil_IncomeKemarin8 = array_sum($total_IncomeKemarin8);
    }

    $qHariIni8  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$bulan' AND status = 'OK' AND team = 'VIII' ");
    while($dIncomeHariIni8 = mysqli_fetch_array($qHariIni8))
    {
        $i++;   
        $total_IncomeHariIni8[$i] = $dIncomeHariIni8['jumlah_tf'];
        $hasil_IncomeHariIni8 = array_sum($total_IncomeHariIni8);
    }

    $qBulanLalu8  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$oldBln' AND status = 'OK' AND team = 'VIII' ");
    while($dIncomeBulanLalu8 = mysqli_fetch_array($qBulanLalu8))
    {
        $i++;   
        $total_IncomeBulanLalu8[$i] = $dIncomeBulanLalu8['jumlah_tf'];
        $hasil_IncomeBulanLalu8 = array_sum($total_IncomeBulanLalu8);
    }

    $qBulanIni8  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'VIII' ");
    while($dIncomeBulanIni8 = mysqli_fetch_array($qBulanIni8))
    {
        $i++;   
        $total_IncomeBulanIni8[$i] = $dIncomeBulanIni8['jumlah_tf'];
        $hasil_IncomeBulanIni8 = array_sum($total_IncomeBulanIni8);
    }

    // INCOME TEAM IX
    $qKemarin9  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$tglKemarin' AND status = 'OK' AND team = 'IX' ");
    while($dIncomeKemarin9 = mysqli_fetch_array($qKemarin9))
    {
        $i++;   
        $total_IncomeKemarin9[$i] = $dIncomeKemarin9['jumlah_tf'];
        $hasil_IncomeKemarin9 = array_sum($total_IncomeKemarin9);
    }

    $qHariIni9  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE tanggal_tf = '$bulan' AND status = 'OK' AND team = 'IX' ");
    while($dIncomeHariIni9 = mysqli_fetch_array($qHariIni9))
    {
        $i++;   
        $total_IncomeHariIni9[$i] = $dIncomeHariIni9['jumlah_tf'];
        $hasil_IncomeHariIni9 = array_sum($total_IncomeHariIni9);
    }

    $qBulanLalu9  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$oldBln' AND status = 'OK' AND team = 'IX' ");
    while($dIncomeBulanLalu9 = mysqli_fetch_array($qBulanLalu9))
    {
        $i++;   
        $total_IncomeBulanLalu9[$i] = $dIncomeBulanLalu9['jumlah_tf'];
        $hasil_IncomeBulanLalu9 = array_sum($total_IncomeBulanLalu9);
    }

    $qBulanIni9  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$bln' AND status = 'OK' AND team = 'IX' ");
    while($dIncomeBulanIni9 = mysqli_fetch_array($qBulanIni9))
    {
        $i++;   
        $total_IncomeBulanIni9[$i] = $dIncomeBulanIni9['jumlah_tf'];
        $hasil_IncomeBulanIni9 = array_sum($total_IncomeBulanIni9);
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

        $dIncomeFacebook3 = $dBulanIncomeFacebook["income_III"];
        $total_Facebook3[$i] = $dIncomeFacebook3;
        $hasil_Facebook3 = array_sum($total_Facebook3);

        $dIncomeFacebook4 = $dBulanIncomeFacebook["income_IV"];
        $total_Facebook4[$i] = $dIncomeFacebook4;
        $hasil_Facebook4 = array_sum($total_Facebook4);

        $dIncomeFacebook5 = $dBulanIncomeFacebook["income_V"];
        $total_Facebook5[$i] = $dIncomeFacebook5;
        $hasil_Facebook5 = array_sum($total_Facebook5);

        $dIncomeFacebook6 = $dBulanIncomeFacebook["income_VI"];
        $total_Facebook6[$i] = $dIncomeFacebook6;
        $hasil_Facebook6 = array_sum($total_Facebook6);

        $dIncomeFacebook7 = $dBulanIncomeFacebook["income_VII"];
        $total_Facebook7[$i] = $dIncomeFacebook7;
        $hasil_Facebook7 = array_sum($total_Facebook7);

        $dIncomeFacebook8 = $dBulanIncomeFacebook["income_VIII"];
        $total_Facebook8[$i] = $dIncomeFacebook8;
        $hasil_Facebook8 = array_sum($total_Facebook8);

        $dIncomeFacebook9 = $dBulanIncomeFacebook["income_IX"];
        $total_Facebook9[$i] = $dIncomeFacebook9;
        $hasil_Facebook9 = array_sum($total_Facebook9);
    }

}

$qOnline    = mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE id NOT LIKE '$dataLog[id]' AND id_pengurus NOT LIKE 'admin_web' AND status = 'Online' ORDER BY nama ASC ");
$nama = $qOnline->num_rows;


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
            "incomeIII"     => $hasil_III,
            "incomeIV"      => $hasil_IV,
            "incomeV"       => $hasil_V,
            "incomeVI"      => $hasil_VI,
            "incomeVII"       => $hasil_VII,
            "incomeVIII"       => $hasil_VIII,
            "incomeIX"       => $hasil_IX,
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
            "incomeIII" => $hasil_IncomeFBBulanIni3,
            "incomeIV"  => $hasil_IncomeFBBulanIni4,
            "incomeV"   => $hasil_IncomeFBBulanIni5,
            "incomeVI"  => $hasil_IncomeFBBulanIni6,
            "incomeVII"  => $hasil_IncomeFBBulanIni7,
            "incomeVIII"  => $hasil_IncomeFBBulanIni8,
            "incomeIX"  => $hasil_IncomeFBBulanIni9,
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
            "incomeFBKemarin3" => $hasil_IncomeFBKemarin3,
            "incomeFBHariIni3" => $hasil_IncomeFBHariIni3,
            "incomeFBBulanIni3" => $hasil_IncomeFBBulanIni3,
            "incomeFBKemarin4" => $hasil_IncomeFBKemarin4,
            "incomeFBHariIni4" => $hasil_IncomeFBHariIni4,
            "incomeFBBulanIni4" => $hasil_IncomeFBBulanIni4,
            "incomeFBKemarin5" => $hasil_IncomeFBKemarin5,
            "incomeFBHariIni5" => $hasil_IncomeFBHariIni5,
            "incomeFBBulanIni5" => $hasil_IncomeFBBulanIni5,
            "incomeFBKemarin6" => $hasil_IncomeFBKemarin6,
            "incomeFBHariIni6" => $hasil_IncomeFBHariIni6,
            "incomeFBBulanIni6" => $hasil_IncomeFBBulanIni6,
            "incomeFBKemarin7" => $hasil_IncomeFBKemarin7,
            "incomeFBHariIni7" => $hasil_IncomeFBHariIni7,
            "incomeFBBulanIni7" => $hasil_IncomeFBBulanIni7,
            "incomeFBKemarin8" => $hasil_IncomeFBKemarin8,
            "incomeFBHariIni8" => $hasil_IncomeFBHariIni8,
            "incomeFBBulanIni8" => $hasil_IncomeFBBulanIni8,
            "incomeFBKemarin9" => $hasil_IncomeFBKemarin9,
            "incomeFBHariIni9" => $hasil_IncomeFBHariIni9,
            "incomeFBBulanIni9" => $hasil_IncomeFBBulanIni9,
            "online"            => $nama
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
            "incomeIII"     => $hasil_IncomeIIIIni,
            "incomeIV"      => $hasil_IncomeIVIni,
            "incomeV"       => $hasil_IncomeVIni,
            "incomeVI"      => $hasil_IncomeVIIni,
            "incomeVII"     => $hasil_IncomeVIIIni,
            "incomeVIII"    => $hasil_IncomeVIIIIni,
            "incomeIX"      => $hasil_IncomeIXIni,
            "incomeNonResi" => $hasil_IncomeNonResiIni,
            "incomeLalu"    => $hasil_IncomeLaluIni,
            "incomeBulan"   => $hasil_IncomeBulanIni,
            "incomeSeluruh" => $seluruhIncome,
            "online"        => $nama
        ];

    } else if ($_COOKIE["username"] == "fb_saku1") {
        $data = [
            "incomeKemarin" => $hasil_IncomeKemarin,
            "incomeHariIni" => $hasil_IncomeHariIni,
            "incomeBulanLalu" => $hasil_IncomeBulanLalu,
            "incomeBulanIni" => $hasil_IncomeBulanIni,
            "incomeTahunIni" => $hasil_Facebook,
            "incomeFb2Kemarin" => $hasil_IncomeKemarin2,
            "incomeFb2HariIni" => $hasil_IncomeHariIni2,
            "incomeFb2BulanIni" => $hasil_IncomeBulanIni2,
            "incomeFb3Kemarin" => $hasil_IncomeKemarin3,
            "incomeFb3HariIni" => $hasil_IncomeHariIni3,
            "incomeFb3BulanIni" => $hasil_IncomeBulanIni3,
            "incomeFb4Kemarin" => $hasil_IncomeKemarin4,
            "incomeFb4HariIni" => $hasil_IncomeHariIni4,
            "incomeFb4BulanIni" => $hasil_IncomeBulanIni4,
            "incomeFb5Kemarin" => $hasil_IncomeKemarin5,
            "incomeFb5HariIni" => $hasil_IncomeHariIni5,
            "incomeFb5BulanIni" => $hasil_IncomeBulanIni5,
            "incomeFb6Kemarin" => $hasil_IncomeKemarin6,
            "incomeFb6HariIni" => $hasil_IncomeHariIni6,
            "incomeFb6BulanIni" => $hasil_IncomeBulanIni6,
            "incomeFb7Kemarin" => $hasil_IncomeKemarin7,
            "incomeFb7HariIni" => $hasil_IncomeHariIni7,
            "incomeFb7BulanIni" => $hasil_IncomeBulanIni7,
            "incomeFb8Kemarin" => $hasil_IncomeKemarin8,
            "incomeFb8HariIni" => $hasil_IncomeHariIni8,
            "incomeFb8BulanIni" => $hasil_IncomeBulanIni8,
            "incomeFb9Kemarin" => $hasil_IncomeKemarin9,
            "incomeFb9HariIni" => $hasil_IncomeHariIni9,
            "incomeFb9BulanIni" => $hasil_IncomeBulanIni9
        ];
    } else if ($_COOKIE["username"] == "fb_saku2") {
        $data = [
            "incomeKemarin" => $hasil_IncomeKemarin,
            "incomeHariIni" => $hasil_IncomeHariIni,
            "incomeBulanLalu" => $hasil_IncomeBulanLalu2,
            "incomeBulanIni" => $hasil_IncomeBulanIni,
            "incomeTahunIni" => $hasil_Facebook2,
            "incomeFb2Kemarin" => $hasil_IncomeKemarin2,
            "incomeFb2HariIni" => $hasil_IncomeHariIni2,
            "incomeFb2BulanIni" => $hasil_IncomeBulanIni2,
            "incomeFb3Kemarin" => $hasil_IncomeKemarin3,
            "incomeFb3HariIni" => $hasil_IncomeHariIni3,
            "incomeFb3BulanIni" => $hasil_IncomeBulanIni3,
            "incomeFb4Kemarin" => $hasil_IncomeKemarin4,
            "incomeFb4HariIni" => $hasil_IncomeHariIni4,
            "incomeFb4BulanIni" => $hasil_IncomeBulanIni4,
            "incomeFb5Kemarin" => $hasil_IncomeKemarin5,
            "incomeFb5HariIni" => $hasil_IncomeHariIni5,
            "incomeFb5BulanIni" => $hasil_IncomeBulanIni5,
            "incomeFb6Kemarin" => $hasil_IncomeKemarin6,
            "incomeFb6HariIni" => $hasil_IncomeHariIni6,
            "incomeFb6BulanIni" => $hasil_IncomeBulanIni6,
            "incomeFb7Kemarin" => $hasil_IncomeKemarin7,
            "incomeFb7HariIni" => $hasil_IncomeHariIni7,
            "incomeFb7BulanIni" => $hasil_IncomeBulanIni7,
            "incomeFb8Kemarin" => $hasil_IncomeKemarin8,
            "incomeFb8HariIni" => $hasil_IncomeHariIni8,
            "incomeFb8BulanIni" => $hasil_IncomeBulanIni8,
            "incomeFb9Kemarin" => $hasil_IncomeKemarin9,
            "incomeFb9HariIni" => $hasil_IncomeHariIni9,
            "incomeFb9BulanIni" => $hasil_IncomeBulanIni9
        ];

    } else if ($_COOKIE["username"] == "ig_saku1") {
        $data = [
            "incomeKemarin" => $hasil_IncomeKemarin,
            "incomeHariIni" => $hasil_IncomeHariIni,
            "incomeBulanLalu" => $hasil_IncomeBulanLalu3,
            "incomeBulanIni" => $hasil_IncomeBulanIni,
            "incomeTahunIni" => $hasil_Facebook3,
            "incomeFb2Kemarin" => $hasil_IncomeKemarin2,
            "incomeFb2HariIni" => $hasil_IncomeHariIni2,
            "incomeFb2BulanIni" => $hasil_IncomeBulanIni2,
            "incomeFb3Kemarin" => $hasil_IncomeKemarin3,
            "incomeFb3HariIni" => $hasil_IncomeHariIni3,
            "incomeFb3BulanIni" => $hasil_IncomeBulanIni3,
            "incomeFb4Kemarin" => $hasil_IncomeKemarin4,
            "incomeFb4HariIni" => $hasil_IncomeHariIni4,
            "incomeFb4BulanIni" => $hasil_IncomeBulanIni4,
            "incomeFb5Kemarin" => $hasil_IncomeKemarin5,
            "incomeFb5HariIni" => $hasil_IncomeHariIni5,
            "incomeFb5BulanIni" => $hasil_IncomeBulanIni5,
            "incomeFb6Kemarin" => $hasil_IncomeKemarin6,
            "incomeFb6HariIni" => $hasil_IncomeHariIni6,
            "incomeFb6BulanIni" => $hasil_IncomeBulanIni6,
            "incomeFb7Kemarin" => $hasil_IncomeKemarin7,
            "incomeFb7HariIni" => $hasil_IncomeHariIni7,
            "incomeFb7BulanIni" => $hasil_IncomeBulanIni7,
            "incomeFb8Kemarin" => $hasil_IncomeKemarin8,
            "incomeFb8HariIni" => $hasil_IncomeHariIni8,
            "incomeFb8BulanIni" => $hasil_IncomeBulanIni8,
            "incomeFb9Kemarin" => $hasil_IncomeKemarin9,
            "incomeFb9HariIni" => $hasil_IncomeHariIni9,
            "incomeFb9BulanIni" => $hasil_IncomeBulanIni9
        ];
        
    } else if ($_COOKIE["username"] == "ig_saku2") {
        $data = [
            "incomeKemarin" => $hasil_IncomeKemarin,
            "incomeHariIni" => $hasil_IncomeHariIni,
            "incomeBulanLalu" => $hasil_IncomeBulanLalu4,
            "incomeBulanIni" => $hasil_IncomeBulanIni,
            "incomeTahunIni" => $hasil_Facebook4,
            "incomeFb2Kemarin" => $hasil_IncomeKemarin2,
            "incomeFb2HariIni" => $hasil_IncomeHariIni2,
            "incomeFb2BulanIni" => $hasil_IncomeBulanIni2,
            "incomeFb3Kemarin" => $hasil_IncomeKemarin3,
            "incomeFb3HariIni" => $hasil_IncomeHariIni3,
            "incomeFb3BulanIni" => $hasil_IncomeBulanIni3,
            "incomeFb4Kemarin" => $hasil_IncomeKemarin4,
            "incomeFb4HariIni" => $hasil_IncomeHariIni4,
            "incomeFb4BulanIni" => $hasil_IncomeBulanIni4,
            "incomeFb5Kemarin" => $hasil_IncomeKemarin5,
            "incomeFb5HariIni" => $hasil_IncomeHariIni5,
            "incomeFb5BulanIni" => $hasil_IncomeBulanIni5,
            "incomeFb6Kemarin" => $hasil_IncomeKemarin6,
            "incomeFb6HariIni" => $hasil_IncomeHariIni6,
            "incomeFb6BulanIni" => $hasil_IncomeBulanIni6,
            "incomeFb7Kemarin" => $hasil_IncomeKemarin7,
            "incomeFb7HariIni" => $hasil_IncomeHariIni7,
            "incomeFb7BulanIni" => $hasil_IncomeBulanIni7,
            "incomeFb8Kemarin" => $hasil_IncomeKemarin8,
            "incomeFb8HariIni" => $hasil_IncomeHariIni8,
            "incomeFb8BulanIni" => $hasil_IncomeBulanIni8,
            "incomeFb9Kemarin" => $hasil_IncomeKemarin9,
            "incomeFb9HariIni" => $hasil_IncomeHariIni9,
            "incomeFb9BulanIni" => $hasil_IncomeBulanIni9
        ];

    } else if ($_COOKIE["username"] == "fb_sembako") {
        $data = [
            "incomeKemarin" => $hasil_IncomeKemarin,
            "incomeHariIni" => $hasil_IncomeHariIni,
            "incomeBulanLalu" => $hasil_IncomeBulanLalu5,
            "incomeBulanIni" => $hasil_IncomeBulanIni,
            "incomeTahunIni" => $hasil_Facebook5,
            "incomeFb2Kemarin" => $hasil_IncomeKemarin2,
            "incomeFb2HariIni" => $hasil_IncomeHariIni2,
            "incomeFb2BulanIni" => $hasil_IncomeBulanIni2,
            "incomeFb3Kemarin" => $hasil_IncomeKemarin3,
            "incomeFb3HariIni" => $hasil_IncomeHariIni3,
            "incomeFb3BulanIni" => $hasil_IncomeBulanIni3,
            "incomeFb4Kemarin" => $hasil_IncomeKemarin4,
            "incomeFb4HariIni" => $hasil_IncomeHariIni4,
            "incomeFb4BulanIni" => $hasil_IncomeBulanIni4,
            "incomeFb5Kemarin" => $hasil_IncomeKemarin5,
            "incomeFb5HariIni" => $hasil_IncomeHariIni5,
            "incomeFb5BulanIni" => $hasil_IncomeBulanIni5,
            "incomeFb6Kemarin" => $hasil_IncomeKemarin6,
            "incomeFb6HariIni" => $hasil_IncomeHariIni6,
            "incomeFb6BulanIni" => $hasil_IncomeBulanIni6,
            "incomeFb7Kemarin" => $hasil_IncomeKemarin7,
            "incomeFb7HariIni" => $hasil_IncomeHariIni7,
            "incomeFb7BulanIni" => $hasil_IncomeBulanIni7,
            "incomeFb8Kemarin" => $hasil_IncomeKemarin8,
            "incomeFb8HariIni" => $hasil_IncomeHariIni8,
            "incomeFb8BulanIni" => $hasil_IncomeBulanIni8,
            "incomeFb9Kemarin" => $hasil_IncomeKemarin9,
            "incomeFb9HariIni" => $hasil_IncomeHariIni9,
            "incomeFb9BulanIni" => $hasil_IncomeBulanIni9
        ];

    } else if ($_COOKIE["username"] == "ig_sembako") {
        $data = [
            "incomeKemarin" => $hasil_IncomeKemarin,
            "incomeHariIni" => $hasil_IncomeHariIni,
            "incomeBulanLalu" => $hasil_IncomeBulanLalu6,
            "incomeBulanIni" => $hasil_IncomeBulanIni,
            "incomeTahunIni" => $hasil_Facebook6,
            "incomeFb2Kemarin" => $hasil_IncomeKemarin2,
            "incomeFb2HariIni" => $hasil_IncomeHariIni2,
            "incomeFb2BulanIni" => $hasil_IncomeBulanIni2,
            "incomeFb3Kemarin" => $hasil_IncomeKemarin3,
            "incomeFb3HariIni" => $hasil_IncomeHariIni3,
            "incomeFb3BulanIni" => $hasil_IncomeBulanIni3,
            "incomeFb4Kemarin" => $hasil_IncomeKemarin4,
            "incomeFb4HariIni" => $hasil_IncomeHariIni4,
            "incomeFb4BulanIni" => $hasil_IncomeBulanIni4,
            "incomeFb5Kemarin" => $hasil_IncomeKemarin5,
            "incomeFb5HariIni" => $hasil_IncomeHariIni5,
            "incomeFb5BulanIni" => $hasil_IncomeBulanIni5,
            "incomeFb6Kemarin" => $hasil_IncomeKemarin6,
            "incomeFb6HariIni" => $hasil_IncomeHariIni6,
            "incomeFb6BulanIni" => $hasil_IncomeBulanIni6,
            "incomeFb7Kemarin" => $hasil_IncomeKemarin7,
            "incomeFb7HariIni" => $hasil_IncomeHariIni7,
            "incomeFb7BulanIni" => $hasil_IncomeBulanIni7,
            "incomeFb8Kemarin" => $hasil_IncomeKemarin8,
            "incomeFb8HariIni" => $hasil_IncomeHariIni8,
            "incomeFb8BulanIni" => $hasil_IncomeBulanIni8,
            "incomeFb9Kemarin" => $hasil_IncomeKemarin9,
            "incomeFb9HariIni" => $hasil_IncomeHariIni9,
            "incomeFb9BulanIni" => $hasil_IncomeBulanIni9
        ];
    
    } else if ($_COOKIE["username"] == "fb_pembangunan") {
        $data = [
            "incomeKemarin" => $hasil_IncomeKemarin,
            "incomeHariIni" => $hasil_IncomeHariIni,
            "incomeBulanLalu" => $hasil_IncomeBulanLalu7,
            "incomeBulanIni" => $hasil_IncomeBulanIni,
            "incomeTahunIni" => $hasil_Facebook7,
            "incomeFb2Kemarin" => $hasil_IncomeKemarin2,
            "incomeFb2HariIni" => $hasil_IncomeHariIni2,
            "incomeFb2BulanIni" => $hasil_IncomeBulanIni2,
            "incomeFb3Kemarin" => $hasil_IncomeKemarin3,
            "incomeFb3HariIni" => $hasil_IncomeHariIni3,
            "incomeFb3BulanIni" => $hasil_IncomeBulanIni3,
            "incomeFb4Kemarin" => $hasil_IncomeKemarin4,
            "incomeFb4HariIni" => $hasil_IncomeHariIni4,
            "incomeFb4BulanIni" => $hasil_IncomeBulanIni4,
            "incomeFb5Kemarin" => $hasil_IncomeKemarin5,
            "incomeFb5HariIni" => $hasil_IncomeHariIni5,
            "incomeFb5BulanIni" => $hasil_IncomeBulanIni5,
            "incomeFb6Kemarin" => $hasil_IncomeKemarin6,
            "incomeFb6HariIni" => $hasil_IncomeHariIni6,
            "incomeFb6BulanIni" => $hasil_IncomeBulanIni6,
            "incomeFb7Kemarin" => $hasil_IncomeKemarin7,
            "incomeFb7HariIni" => $hasil_IncomeHariIni7,
            "incomeFb7BulanIni" => $hasil_IncomeBulanIni7,
            "incomeFb8Kemarin" => $hasil_IncomeKemarin8,
            "incomeFb8HariIni" => $hasil_IncomeHariIni8,
            "incomeFb8BulanIni" => $hasil_IncomeBulanIni8,
            "incomeFb9Kemarin" => $hasil_IncomeKemarin9,
            "incomeFb9HariIni" => $hasil_IncomeHariIni9,
            "incomeFb9BulanIni" => $hasil_IncomeBulanIni9
        ];
    } else if ($_COOKIE["username"] == "ig_pembangunan") {
        $data = [
            "incomeKemarin" => $hasil_IncomeKemarin,
            "incomeHariIni" => $hasil_IncomeHariIni,
            "incomeBulanLalu" => $hasil_IncomeBulanLalu8,
            "incomeBulanIni" => $hasil_IncomeBulanIni,
            "incomeTahunIni" => $hasil_Facebook8,
            "incomeFb2Kemarin" => $hasil_IncomeKemarin2,
            "incomeFb2HariIni" => $hasil_IncomeHariIni2,
            "incomeFb2BulanIni" => $hasil_IncomeBulanIni2,
            "incomeFb3Kemarin" => $hasil_IncomeKemarin3,
            "incomeFb3HariIni" => $hasil_IncomeHariIni3,
            "incomeFb3BulanIni" => $hasil_IncomeBulanIni3,
            "incomeFb4Kemarin" => $hasil_IncomeKemarin4,
            "incomeFb4HariIni" => $hasil_IncomeHariIni4,
            "incomeFb4BulanIni" => $hasil_IncomeBulanIni4,
            "incomeFb5Kemarin" => $hasil_IncomeKemarin5,
            "incomeFb5HariIni" => $hasil_IncomeHariIni5,
            "incomeFb5BulanIni" => $hasil_IncomeBulanIni5,
            "incomeFb6Kemarin" => $hasil_IncomeKemarin6,
            "incomeFb6HariIni" => $hasil_IncomeHariIni6,
            "incomeFb6BulanIni" => $hasil_IncomeBulanIni6,
            "incomeFb7Kemarin" => $hasil_IncomeKemarin7,
            "incomeFb7HariIni" => $hasil_IncomeHariIni7,
            "incomeFb7BulanIni" => $hasil_IncomeBulanIni7,
            "incomeFb8Kemarin" => $hasil_IncomeKemarin8,
            "incomeFb8HariIni" => $hasil_IncomeHariIni8,
            "incomeFb8BulanIni" => $hasil_IncomeBulanIni8,
            "incomeFb9Kemarin" => $hasil_IncomeKemarin9,
            "incomeFb9HariIni" => $hasil_IncomeHariIni9,
            "incomeFb9BulanIni" => $hasil_IncomeBulanIni9
        ];
    } else if ($_COOKIE["username"] == "fb_kesehatan") {
        $data = [
            "incomeKemarin" => $hasil_IncomeKemarin,
            "incomeHariIni" => $hasil_IncomeHariIni,
            "incomeBulanLalu" => $hasil_IncomeBulanLalu9,
            "incomeBulanIni" => $hasil_IncomeBulanIni,
            "incomeTahunIni" => $hasil_Facebook9,
            "incomeFb2Kemarin" => $hasil_IncomeKemarin2,
            "incomeFb2HariIni" => $hasil_IncomeHariIni2,
            "incomeFb2BulanIni" => $hasil_IncomeBulanIni2,
            "incomeFb3Kemarin" => $hasil_IncomeKemarin3,
            "incomeFb3HariIni" => $hasil_IncomeHariIni3,
            "incomeFb3BulanIni" => $hasil_IncomeBulanIni3,
            "incomeFb4Kemarin" => $hasil_IncomeKemarin4,
            "incomeFb4HariIni" => $hasil_IncomeHariIni4,
            "incomeFb4BulanIni" => $hasil_IncomeBulanIni4,
            "incomeFb5Kemarin" => $hasil_IncomeKemarin5,
            "incomeFb5HariIni" => $hasil_IncomeHariIni5,
            "incomeFb5BulanIni" => $hasil_IncomeBulanIni5,
            "incomeFb6Kemarin" => $hasil_IncomeKemarin6,
            "incomeFb6HariIni" => $hasil_IncomeHariIni6,
            "incomeFb6BulanIni" => $hasil_IncomeBulanIni6,
            "incomeFb7Kemarin" => $hasil_IncomeKemarin7,
            "incomeFb7HariIni" => $hasil_IncomeHariIni7,
            "incomeFb7BulanIni" => $hasil_IncomeBulanIni7,
            "incomeFb8Kemarin" => $hasil_IncomeKemarin8,
            "incomeFb8HariIni" => $hasil_IncomeHariIni8,
            "incomeFb8BulanIni" => $hasil_IncomeBulanIni8,
            "incomeFb9Kemarin" => $hasil_IncomeKemarin9,
            "incomeFb9HariIni" => $hasil_IncomeHariIni9,
            "incomeFb9BulanIni" => $hasil_IncomeBulanIni9
        ];
    } else if ($_COOKIE["username"] == "manager_fb" || $_COOKIE["username"] == "manager_ig") {
        $data = [
            "incomeKemarin" => $hasil_IncomeKemarin,
            "incomeHariIni" => $hasil_IncomeHariIni,
            "incomeBulanIni" => $hasil_IncomeBulanIni,
            "incomeFb2Kemarin" => $hasil_IncomeKemarin2,
            "incomeFb2HariIni" => $hasil_IncomeHariIni2,
            "incomeFb2BulanIni" => $hasil_IncomeBulanIni2,
            "incomeFb3Kemarin" => $hasil_IncomeKemarin3,
            "incomeFb3HariIni" => $hasil_IncomeHariIni3,
            "incomeFb3BulanIni" => $hasil_IncomeBulanIni3,
            "incomeFb4Kemarin" => $hasil_IncomeKemarin4,
            "incomeFb4HariIni" => $hasil_IncomeHariIni4,
            "incomeFb4BulanIni" => $hasil_IncomeBulanIni4,
            "incomeFb5Kemarin" => $hasil_IncomeKemarin5,
            "incomeFb5HariIni" => $hasil_IncomeHariIni5,
            "incomeFb5BulanIni" => $hasil_IncomeBulanIni5,
            "incomeFb6Kemarin" => $hasil_IncomeKemarin6,
            "incomeFb6HariIni" => $hasil_IncomeHariIni6,
            "incomeFb6BulanIni" => $hasil_IncomeBulanIni6,
            "incomeFb7Kemarin" => $hasil_IncomeKemarin7,
            "incomeFb7HariIni" => $hasil_IncomeHariIni7,
            "incomeFb7BulanIni" => $hasil_IncomeBulanIni7,
            "incomeFb8Kemarin" => $hasil_IncomeKemarin8,
            "incomeFb8HariIni" => $hasil_IncomeHariIni8,
            "incomeFb8BulanIni" => $hasil_IncomeBulanIni8,
            "incomeFb9Kemarin" => $hasil_IncomeKemarin9,
            "incomeFb9HariIni" => $hasil_IncomeHariIni9,
            "incomeFb9BulanIni" => $hasil_IncomeBulanIni9
        ];
    }

    echo json_encode($data);

    $conn->close();
?>