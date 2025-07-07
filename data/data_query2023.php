<?php
error_reporting(0);
include '../function.php';
$periode = $_GET["periode"];
$i = 1;
if (
    $_COOKIE["id_pengurus"] == "kepala_pengajuan" ||
    $_COOKIE["id_pengurus"] == "management_keuangan" ||
    $_COOKIE["id_pengurus"] == "ketua_yayasan"
) {
    if($periode == "") {
        // program
        $k = mysqli_query($conn, "SELECT * FROM data_program");
        $skl = $k;
        while($d = mysqli_fetch_array($skl))
        {
            $i++;   
            $d_anggaran = $d['anggaran_global'];
            $total_anggaran[$i] = $d_anggaran;

            $hasil_anggaran = array_sum($total_anggaran);

            $d_terpakai = $d['terpakai_global'];
            $total_terpakai[$i] = $d_terpakai;

            $hasil_terpakai = array_sum($total_terpakai);
            $cashback = $hasil_anggaran-$hasil_terpakai;
        }

        // logistik
        $k2 = mysqli_query($conn, "SELECT * FROM data_logistik");
        $skl2 = $k2;
        while($d2 = mysqli_fetch_array($skl2))
        {
            $i++;   
            $d_anggaran2 = $d2['anggaran_global'];
            $total_anggaran2[$i] = $d_anggaran2;

            $hasil_anggaran2 = array_sum($total_anggaran2);

            $d_terpakai2 = $d2['terpakai_global'];
            $total_terpakai2[$i] = $d_terpakai2;

            $hasil_terpakai2 = array_sum($total_terpakai2);
            $cashback2 = $hasil_anggaran2-$hasil_terpakai2;
        }

        // uang makan
        $k3 = mysqli_query($conn, "SELECT * FROM data_uang_makan");
        $skl3 = $k3;
        while($d3 = mysqli_fetch_array($skl3))
        {
            $i++;   
            $d_anggaran3 = $d3['anggaran_global'];
            $total_anggaran3[$i] = $d_anggaran3;

            $hasil_anggaran3 = array_sum($total_anggaran3);
            $d_terpakai3 = $d3['terpakai_global'];
            $total_terpakai3[$i] = $d_terpakai3;

            $hasil_terpakai3 = array_sum($total_terpakai3);
            $cashback3 = $hasil_anggaran3-$hasil_terpakai3;
        }

        // aset yayasan
        $k4 = mysqli_query($conn, "SELECT * FROM data_aset_yayasan");
        $skl4 = $k4;
        while($d4 = mysqli_fetch_array($skl4))
        {
            $i++;   
            $d_anggaran4 = $d4['anggaran_global'];
            $total_anggaran4[$i] = $d_anggaran4;

            $hasil_anggaran4 = array_sum($total_anggaran4);

            $d_terpakai4 = $d4['terpakai_global'];
            $total_terpakai4[$i] = $d_terpakai4;

            $hasil_terpakai4 = array_sum($total_terpakai4);
            // die(var_dump($d_anggaranBulanan));
            $cashback4 = $hasil_anggaran4-$hasil_terpakai4;
        }

        // anggaran lainnya
        $k5 = mysqli_query($conn, "SELECT * FROM data_anggaran_lain");
        $skl5 = $k5;
        while($d5 = mysqli_fetch_array($skl5))
        {
            $i++;   
            $d_anggaran5 = $d5['anggaran_global'];
            $total_anggaran5[$i] = $d_anggaran5;

            $hasil_anggaran5 = array_sum($total_anggaran5);

            $d_terpakai5 = $d5['terpakai_global'];
            $total_terpakai5[$i] = $d_terpakai5;

            $hasil_terpakai5 = array_sum($total_terpakai5);
            // die(var_dump($d_anggaranBulanan));
            $cashback5 = $hasil_anggaran5-$hasil_terpakai5;
        }

        // gaji karyawan
        $k6 = mysqli_query($conn, "SELECT * FROM data_gaji_karyawan");
        $skl6 = $k6;
        while($d6 = mysqli_fetch_array($skl6))
        {
            $i++;   
            $d_anggaran6 = $d6['anggaran_global'];
            $total_anggaran6[$i] = $d_anggaran6;

            $hasil_anggaran6 = array_sum($total_anggaran6);

            $d_terpakai6 = $d6['terpakai_global'];
            $total_terpakai6[$i] = $d_terpakai6;

            $hasil_terpakai6 = array_sum($total_terpakai6);
            // die(var_dump($d_anggaranBulanan));
            $cashback6 = $hasil_anggaran6-$hasil_terpakai6;
        }

        // paud qu
        $k7 = mysqli_query($conn, "SELECT * FROM data_paudqu");
        $skl7 = $k7;
        while($d7 = mysqli_fetch_array($skl7))
        {
            $i++;   
            $d_anggaran7 = $d7['anggaran_global'];
            $total_anggaran7[$i] = $d_anggaran7;

            $hasil_anggaran7 = array_sum($total_anggaran7);

            $d_terpakai7 = $d7['terpakai_global'];
            $total_terpakai7[$i] = $d_terpakai7;

            $hasil_terpakai7 = array_sum($total_terpakai7);
            // die(var_dump($d_anggaranBulanan));
            $cashback7 = $hasil_anggaran7-$hasil_terpakai7;
        }

        // maintenance
        $k8 = mysqli_query($conn, "SELECT * FROM data_maintenance");
        $skl8 = $k8;
        while($d8 = mysqli_fetch_array($skl8))
        {
            $i++;   
            $d_anggaran8 = $d8['anggaran_global'];
            $total_anggaran8[$i] = $d_anggaran8;

            $hasil_anggaran8 = array_sum($total_anggaran8);

            $d_terpakai8 = $d8['terpakai_global'];
            $total_terpakai8[$i] = $d_terpakai8;

            $hasil_terpakai8 = array_sum($total_terpakai8);
            // die(var_dump($d_anggaranBulanan));
            $cashback8 = $hasil_anggaran8-$hasil_terpakai8;
        }

        // operasional
        $k9 = mysqli_query($conn, "SELECT * FROM data_operasional_yayasan");
        $skl9 = $k9;
        while($d9 = mysqli_fetch_array($skl9))
        {
            $i++;   
            $d_anggaran9 = $d9['anggaran_global'];
            $total_anggaran9[$i] = $d_anggaran9;

            $hasil_anggaran9 = array_sum($total_anggaran9);

            $d_terpakai9 = $d9['terpakai_global'];
            $total_terpakai9[$i] = $d_terpakai9;

            $hasil_terpakai9 = array_sum($total_terpakai9);
            // die(var_dump($d_anggaranBulanan));
            $cashback9 = $hasil_anggaran9-$hasil_terpakai9;
        }

        // jasa
        $k10 = mysqli_query($conn, "SELECT * FROM data_jasa");
        $skl10 = $k10;
        while($d10 = mysqli_fetch_array($skl10))
        {
            $i++;   
            $d_anggaran10 = $d10['anggaran_global'];
            $total_anggaran10[$i] = $d_anggaran10;

            $hasil_anggaran10 = array_sum($total_anggaran10);

            $d_terpakai10 = $d10['terpakai_global'];
            $total_terpakai10[$i] = $d_terpakai10;

            $hasil_terpakai10 = array_sum($total_terpakai10);
            // die(var_dump($d_anggaranBulanan));
            $cashback10 = $hasil_anggaran10-$hasil_terpakai10;
        }
    } else {
        // program
        $k = mysqli_query($conn, "SELECT * FROM data_program WHERE bulan = '$periode'");
        $skl = $k;
        while($d = mysqli_fetch_array($skl))
        {
            $i++;   
            $d_anggaran = $d['anggaran_global'];
            $total_anggaran[$i] = $d_anggaran;

            $hasil_anggaran = array_sum($total_anggaran);

            $d_terpakai = $d['terpakai_global'];
            $total_terpakai[$i] = $d_terpakai;

            $hasil_terpakai = array_sum($total_terpakai);
            $cashback = $hasil_anggaran-$hasil_terpakai;
        }

        // logistik
        $k2 = mysqli_query($conn, "SELECT * FROM data_logistik WHERE bulan = '$periode'");
        $skl2 = $k2;
        while($d2 = mysqli_fetch_array($skl2))
        {
            $i++;   
            $d_anggaran2 = $d2['anggaran_global'];
            $total_anggaran2[$i] = $d_anggaran2;

            $hasil_anggaran2 = array_sum($total_anggaran2);

            $d_terpakai2 = $d2['terpakai_global'];
            $total_terpakai2[$i] = $d_terpakai2;

            $hasil_terpakai2 = array_sum($total_terpakai2);
            $cashback2 = $hasil_anggaran2-$hasil_terpakai2;
        }

        // uang makan
        $k3 = mysqli_query($conn, "SELECT * FROM data_uang_makan WHERE bulan = '$periode'");
        $skl3 = $k3;
        while($d3 = mysqli_fetch_array($skl3))
        {
            $i++;   
            $d_anggaran3 = $d3['anggaran_global'];
            $total_anggaran3[$i] = $d_anggaran3;

            $hasil_anggaran3 = array_sum($total_anggaran3);
            $d_terpakai3 = $d3['terpakai_global'];
            $total_terpakai3[$i] = $d_terpakai3;

            $hasil_terpakai3 = array_sum($total_terpakai3);
            $cashback3 = $hasil_anggaran3-$hasil_terpakai3;
        }

        // aset yayasan
        $k4 = mysqli_query($conn, "SELECT * FROM data_aset_yayasan WHERE bulan = '$periode'");
        $skl4 = $k4;
        while($d4 = mysqli_fetch_array($skl4))
        {
            $i++;   
            $d_anggaran4 = $d4['anggaran_global'];
            $total_anggaran4[$i] = $d_anggaran4;

            $hasil_anggaran4 = array_sum($total_anggaran4);

            $d_terpakai4 = $d4['terpakai_global'];
            $total_terpakai4[$i] = $d_terpakai4;

            $hasil_terpakai4 = array_sum($total_terpakai4);
            // die(var_dump($d_anggaranBulanan));
            $cashback4 = $hasil_anggaran4-$hasil_terpakai4;
        }

        // anggaran lainnya
        $k5 = mysqli_query($conn, "SELECT * FROM data_anggaran_lain WHERE bulan = '$periode'");
        $skl5 = $k5;
        while($d5 = mysqli_fetch_array($skl5))
        {
            $i++;   
            $d_anggaran5 = $d5['anggaran_global'];
            $total_anggaran5[$i] = $d_anggaran5;

            $hasil_anggaran5 = array_sum($total_anggaran5);

            $d_terpakai5 = $d5['terpakai_global'];
            $total_terpakai5[$i] = $d_terpakai5;

            $hasil_terpakai5 = array_sum($total_terpakai5);
            // die(var_dump($d_anggaranBulanan));
            $cashback5 = $hasil_anggaran5-$hasil_terpakai5;
        }

        // gaji karyawan
        $k6 = mysqli_query($conn, "SELECT * FROM data_gaji_karyawan WHERE bulan = '$periode'");
        $skl6 = $k6;
        while($d6 = mysqli_fetch_array($skl6))
        {
            $i++;   
            $d_anggaran6 = $d6['anggaran_global'];
            $total_anggaran6[$i] = $d_anggaran6;

            $hasil_anggaran6 = array_sum($total_anggaran6);

            $d_terpakai6 = $d6['terpakai_global'];
            $total_terpakai6[$i] = $d_terpakai6;

            $hasil_terpakai6 = array_sum($total_terpakai6);
            // die(var_dump($d_anggaranBulanan));
            $cashback6 = $hasil_anggaran6-$hasil_terpakai6;
        }

        // paud qu
        $k7 = mysqli_query($conn, "SELECT * FROM data_paudqu WHERE bulan = '$periode'");
        $skl7 = $k7;
        while($d7 = mysqli_fetch_array($skl7))
        {
            $i++;   
            $d_anggaran7 = $d7['anggaran_global'];
            $total_anggaran7[$i] = $d_anggaran7;

            $hasil_anggaran7 = array_sum($total_anggaran7);

            $d_terpakai7 = $d7['terpakai_global'];
            $total_terpakai7[$i] = $d_terpakai7;

            $hasil_terpakai7 = array_sum($total_terpakai7);
            // die(var_dump($d_anggaranBulanan));
            $cashback7 = $hasil_anggaran7-$hasil_terpakai7;
        }

        // maintenance
        $k8 = mysqli_query($conn, "SELECT * FROM data_maintenance WHERE bulan = '$periode'");
        $skl8 = $k8;
        while($d8 = mysqli_fetch_array($skl8))
        {
            $i++;   
            $d_anggaran8 = $d8['anggaran_global'];
            $total_anggaran8[$i] = $d_anggaran8;

            $hasil_anggaran8 = array_sum($total_anggaran8);

            $d_terpakai8 = $d8['terpakai_global'];
            $total_terpakai8[$i] = $d_terpakai8;

            $hasil_terpakai8 = array_sum($total_terpakai8);
            // die(var_dump($d_anggaranBulanan));
            $cashback8 = $hasil_anggaran8-$hasil_terpakai8;
        }

        // operasional
        $k9 = mysqli_query($conn, "SELECT * FROM data_operasional_yayasan WHERE bulan = '$periode'");
        $skl9 = $k9;
        while($d9 = mysqli_fetch_array($skl9))
        {
            $i++;   
            $d_anggaran9 = $d9['anggaran_global'];
            $total_anggaran9[$i] = $d_anggaran9;

            $hasil_anggaran9 = array_sum($total_anggaran9);

            $d_terpakai9 = $d9['terpakai_global'];
            $total_terpakai9[$i] = $d_terpakai9;

            $hasil_terpakai9 = array_sum($total_terpakai9);
            // die(var_dump($d_anggaranBulanan));
            $cashback9 = $hasil_anggaran9-$hasil_terpakai9;
        }

        // jasa
        $k10 = mysqli_query($conn, "SELECT * FROM data_jasa WHERE bulan = '$periode'");
        $skl10 = $k10;
        while($d10 = mysqli_fetch_array($skl10))
        {
            $i++;   
            $d_anggaran10 = $d10['anggaran_global'];
            $total_anggaran10[$i] = $d_anggaran10;

            $hasil_anggaran10 = array_sum($total_anggaran10);

            $d_terpakai10 = $d10['terpakai_global'];
            $total_terpakai10[$i] = $d_terpakai10;

            $hasil_terpakai10 = array_sum($total_terpakai10);
            // die(var_dump($d_anggaranBulanan));
            $cashback10 = $hasil_anggaran10-$hasil_terpakai10;
        }
    }

    $totalAnggaran = $hasil_anggaran+$hasil_anggaran2+$hasil_anggaran3+$hasil_anggaran4+$hasil_anggaran5+$hasil_anggaran6+$hasil_anggaran7+$hasil_anggaran8+$hasil_anggaran9+$hasil_anggaran10;
    $totalTerpakai = $hasil_terpakai+$hasil_terpakai2+$hasil_terpakai3+$hasil_terpakai4+$hasil_terpakai5+$hasil_terpakai6+$hasil_terpakai7+$hasil_terpakai8+$hasil_terpakai9+$hasil_terpakai10;
    $totalCashback = $totalAnggaran-$totalTerpakai;

    if($periode == "") {
        $q  = mysqli_query($conn, "SELECT * FROM data_income");

    } else {
        $q  = mysqli_query($conn, "SELECT * FROM data_income WHERE bulan = '$periode'");
    }

    while ($dP = $q->fetch_array()) {
        $i++;

        $ia             = $dP['income_I'];
        $total_ia[$i]   = $ia;
        $hasil_ia       = array_sum($total_ia);

        $ib             = $dP['income_II'];
        $total_ib[$i]   = $ib;
        $hasil_ib       = array_sum($total_ib);

        $ic             = $dP['income_III'];
        $total_ic[$i]   = $ic;
        $hasil_ic       = array_sum($total_ic);

        $id             = $dP['income_IV'];
        $total_id[$i]   = $id;
        $hasil_id       = array_sum($total_id);

        $ie             = $dP['income_V'];
        $total_ie[$i]   = $ie;
        $hasil_ie       = array_sum($total_ie);

        $if             = $dP['income_VI'];
        $total_if[$i]   = $if;
        $hasil_if       = array_sum($total_if);

        $ig             = $dP['income_VII'];
        $total_ig[$i]   = $ig;
        $hasil_ig       = array_sum($total_ig);

        $ih             = $dP['income_VIII'];
        $total_ih[$i]   = $ih;
        $hasil_ih       = array_sum($total_ih);

        $ihi            = $dP['income_IX'];
        $total_ii[$i]   = $ii;
        $hasil_ii       = array_sum($total_ii);

        $itanpaResi             = $dP['income_tanpaResi'];
        $total_itanpaResi[$i]   = $itanpaResi;
        $hasil_itanpaResi       = array_sum($total_itanpaResi);

        $iglobal             = $dP['income_global'];
        $total_iglobal[$i]   = $iglobal;
        $hasil_iglobal       = array_sum($total_iglobal);
        
    }

    $totalPemasukan = $hasil_iglobal+$hasil_itanpaResi;

} else if(
    $_COOKIE["id_pengurus"] == "kepala_income" || 
    $_COOKIE["id_pengurus"] == "manager_facebook" ||
    $_COOKIE["id_pengurus"] == "manager_instagram"
) {
    if($periode == "") {
        $q  = mysqli_query($conn, "SELECT * FROM data_income");

    } else {
        $q  = mysqli_query($conn, "SELECT * FROM data_income WHERE bulan = '$periode'");
    }

    while ($dP = $q->fetch_array()) {
        $i++;

        $ia             = $dP['income_I'];
        $total_ia[$i]   = $ia;
        $hasil_ia       = array_sum($total_ia);

        $ib             = $dP['income_II'];
        $total_ib[$i]   = $ib;
        $hasil_ib       = array_sum($total_ib);

        $ic             = $dP['income_III'];
        $total_ic[$i]   = $ic;
        $hasil_ic       = array_sum($total_ic);

        $id             = $dP['income_IV'];
        $total_id[$i]   = $id;
        $hasil_id       = array_sum($total_id);
        
        $ie             = $dP['income_V'];
        $total_ie[$i]   = $ie;
        $hasil_ie       = array_sum($total_ie);

        $if             = $dP['income_VI'];
        $total_if[$i]   = $if;
        $hasil_if       = array_sum($total_if);

        $ig             = $dP['income_VII'];
        $total_ig[$i]   = $ig;
        $hasil_ig       = array_sum($total_ig);

        $ih             = $dP['income_VIII'];
        $total_ih[$i]   = $ih;
        $hasil_ih       = array_sum($total_ih);

        $ihi            = $dP['income_IX'];
        $total_ii[$i]   = $ii;

        $itanpaResi             = $dP['income_tanpaResi'];
        $total_itanpaResi[$i]   = $itanpaResi;
        $hasil_itanpaResi       = array_sum($total_itanpaResi);

        $iglobal             = $dP['income_global'];
        $total_iglobal[$i]   = $iglobal;
        $hasil_iglobal       = array_sum($total_iglobal);
    }
    $totalPemasukan = $hasil_iglobal+$hasil_itanpaResi;

} else if ($_COOKIE["id_pengurus"] == "sosial_media") {
    if($periode == "") {
        $qTahun  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE nomor_id = '$dataLog[id]' AND status = 'OK' ");
        
    } else {
        $qTahun  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE MONTH(tanggal_tf) = '$periode' AND nomor_id = '$dataLog[id]' AND status = 'OK' ");
    }

    while($dIncomeTahunan = mysqli_fetch_array($qTahun))
    {
        $i++;   
        $total_IncomeTahunan[$i] = $dIncomeTahunan['jumlah_tf'];
        $hasil_IncomeTahunan = array_sum($total_IncomeTahunan);
    }
}

// ========================================= json data =================================== //

if (
    $_COOKIE["id_pengurus"] == "management_keuangan" ||
    $_COOKIE["id_pengurus"] == "ketua_yayasan"
) {
    $data = [
        "program"   => [
            "anggaran"  => $hasil_anggaran,
            "terpakai"  => $hasil_terpakai,
            "cashback"   => $cashback,
        ],
        "logistik"   => [
            "anggaran"  => $hasil_anggaran2,
            "terpakai"  => $hasil_terpakai2,
            "cashback"   => $cashback2,
        ],
        "uangMakan"   => [
            "anggaran"  => $hasil_anggaran3,
            "terpakai"  => $hasil_terpakai3,
            "cashback"   => $cashback3,
        ],
        "aset"   => [
            "anggaran"  => $hasil_anggaran4,
            "terpakai"  => $hasil_terpakai4,
            "cashback"   => $cashback4,
        ],
        "lainnya"   => [
            "anggaran"  => $hasil_anggaran5,
            "terpakai"  => $hasil_terpakai5,
            "cashback"   => $cashback5,
        ],
        "gaji"   => [
            "anggaran"  => $hasil_anggaran6,
            "terpakai"  => $hasil_terpakai6,
            "cashback"   => $cashback6,
        ],
        "paud"   => [
            "anggaran"  => $hasil_anggaran7,
            "terpakai"  => $hasil_terpakai7,
            "cashback"   => $cashback7,
        ],
        "maintenance"   => [
            "anggaran"  => $hasil_anggaran8,
            "terpakai"  => $hasil_terpakai8,
            "cashback"   => $cashback8,
        ],
        "operasional"   => [
            "anggaran"  => $hasil_anggaran9,
            "terpakai"  => $hasil_terpakai9,
            "cashback"   => $cashback9,
        ],
        "jasa"   => [
            "anggaran"  => $hasil_anggaran10,
            "terpakai"  => $hasil_terpakai10,
            "cashback"   => $cashback10,
        ],
        "total"   => [
            "anggaran"  => $totalAnggaran,
            "terpakai"  => $totalTerpakai,
            "cashback"   => $totalCashback,
        ],
        "pemasukan" => [
            "media" => $hasil_iglobal,
            "teamI" => $hasil_ia,
            "teamII" => $hasil_ib,
            "teamIII" => $hasil_ic,
            "teamIV" => $hasil_id,
            "teamV" => $hasil_ie,
            "teamVI" => $hasil_if,
            "teamVII" => $hasil_ig,
            "teamVIII" => $hasil_ih,
            "teamIX" => $hasil_ii,
            "nonResi" => $hasil_itanpaResi,
            "totalPemasukan" => $totalPemasukan
        ]
    ];
} else if ($_COOKIE["id_pengurus"] == "kepala_pengajuan") {
    $data = [
        "program"   => [
            "anggaran"  => $hasil_anggaran,
            "terpakai"  => $hasil_terpakai,
            "cashback"   => $cashback,
        ],
        "logistik"   => [
            "anggaran"  => $hasil_anggaran2,
            "terpakai"  => $hasil_terpakai2,
            "cashback"   => $cashback2,
        ],
        "uangMakan"   => [
            "anggaran"  => $hasil_anggaran3,
            "terpakai"  => $hasil_terpakai3,
            "cashback"   => $cashback3,
        ],
        "aset"   => [
            "anggaran"  => $hasil_anggaran4,
            "terpakai"  => $hasil_terpakai4,
            "cashback"   => $cashback4,
        ],
        "lainnya"   => [
            "anggaran"  => $hasil_anggaran5,
            "terpakai"  => $hasil_terpakai5,
            "cashback"   => $cashback5,
        ],
        "gaji"   => [
            "anggaran"  => $hasil_anggaran6,
            "terpakai"  => $hasil_terpakai6,
            "cashback"   => $cashback6,
        ],
        "paud"   => [
            "anggaran"  => $hasil_anggaran7,
            "terpakai"  => $hasil_terpakai7,
            "cashback"   => $cashback7,
        ],
        "maintenance"   => [
            "anggaran"  => $hasil_anggaran8,
            "terpakai"  => $hasil_terpakai8,
            "cashback"   => $cashback8,
        ],
        "operasional"   => [
            "anggaran"  => $hasil_anggaran9,
            "terpakai"  => $hasil_terpakai9,
            "cashback"   => $cashback9,
        ],
        "jasa"   => [
            "anggaran"  => $hasil_anggaran10,
            "terpakai"  => $hasil_terpakai10,
            "cashback"   => $cashback10,
        ],
        "total"   => [
            "anggaran"  => $totalAnggaran,
            "terpakai"  => $totalTerpakai,
            "cashback"   => $totalCashback,
        ]
    ];
} else if(
    $_COOKIE["id_pengurus"] == "kepala_income" || 
    $_COOKIE["id_pengurus"] == "manager_facebook" ||
    $_COOKIE["id_pengurus"] == "manager_instagram"
) {
    $data = [
        "pemasukan" => [
            "media" => $hasil_iglobal,
            "teamI" => $hasil_ia,
            "teamII" => $hasil_ib,
            "teamIII" => $hasil_ic,
            "teamIV" => $hasil_id,
            "teamV" => $hasil_ie,
            "teamVI" => $hasil_if,
            "teamVII" => $hasil_ig,
            "teamVIII" => $hasil_ih,
            "teamIX" => $hasil_ii,
            "nonResi" => $hasil_itanpaResi,
            "totalPemasukan" => $totalPemasukan
        ]
    ];
} else if ($_COOKIE["id_pengurus"] == "sosial_media") {
    $data = [
        "pemasukan" => $hasil_IncomeTahunan
    ];
}

echo json_encode($data);

$conn->close();

?>