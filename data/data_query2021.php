<?php
error_reporting(0);
include '../function.php';
$i = 1;
if (
    $_COOKIE["id_pengurus"] == "kepala_pengajuan" ||
    $_COOKIE["id_pengurus"] == "management_keuangan" ||
    $_COOKIE["id_pengurus"] == "ketua_yayasan"
) {
    // program
    $k = mysqli_query($connYear, "SELECT * FROM data_program");
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
    $k2 = mysqli_query($connYear, "SELECT * FROM data_logistik");
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

    // bakti sosial
    $k3 = mysqli_query($connYear, "SELECT * FROM data_baksos");
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
    $k4 = mysqli_query($connYear, "SELECT * FROM data_aset_yayasan");
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

    // produksi
    $k5 = mysqli_query($connYear, "SELECT * FROM data_produksi");
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
    $k6 = mysqli_query($connYear, "SELECT * FROM data_gaji");
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

    // humas
    $k7 = mysqli_query($connYear, "SELECT * FROM data_humas");
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
    $k8 = mysqli_query($connYear, "SELECT * FROM data_maintenance");
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
    $k9 = mysqli_query($connYear, "SELECT * FROM data_operasional_yayasan");
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

    $totalAnggaran = $hasil_anggaran+$hasil_anggaran2+$hasil_anggaran3+$hasil_anggaran4+$hasil_anggaran5+$hasil_anggaran6+$hasil_anggaran7+$hasil_anggaran8+$hasil_anggaran9;
    $totalTerpakai = $hasil_terpakai+$hasil_terpakai2+$hasil_terpakai3+$hasil_terpakai4+$hasil_terpakai5+$hasil_terpakai6+$hasil_terpakai7+$hasilterpakai8+$hasil_terpakai9;
    $totalCashback = $totalAnggaran-$totalTerpakai;

    $q  = mysqli_query($connYear, "SELECT * FROM data_income_new");
    while ($dP = $q->fetch_array()) {
        $i++;

        $ia             = $dP['income_a'];
        $total_ia[$i]   = $ia;
        $hasil_ia       = array_sum($total_ia);

        $ib             = $dP['income_b'];
        $total_ib[$i]   = $ib;
        $hasil_ib       = array_sum($total_ib);

        $iinstagram             = $dP['income_instagram'];
        $total_iinstagram[$i]   = $iinstagram;
        $hasil_iinstagram       = array_sum($total_iinstagram);

        $ibogor             = $dP['income_bogor'];
        $total_ibogor[$i]   = $ibogor;
        $hasil_ibogor       = array_sum($total_ibogor);

        $iglobal             = $dP['income_global'];
        $total_iglobal[$i]   = $iglobal;
        $hasil_iglobal       = array_sum($total_iglobal);

        $iFacebook  = $hasil_ia+$hasil_ib+$hasil_ibogor;
    }

    $q2  = mysqli_query($connYear, "SELECT * FROM data_pemasukan");
    while ($dP2 = $q2->fetch_array()) {
        $i++;

        $icelengan             = $dP2['pemasukan_celengan'];
        $total_icelengan[$i]   = $icelengan;
        $hasil_icelengan       = array_sum($total_icelengan);

        $ikotak_amal             = $dP2['pemasukan_kotak_amal'];
        $total_ikotak_amal[$i]   = $ikotak_amal;
        $hasil_ikotak_amal       = array_sum($total_ikotak_amal);

    }

    $totalPemasukan = $hasil_iglobal+$hasil_icelengan+$hasil_ikotak_amal;

} else if(
    $_COOKIE["id_pengurus"] == "kepala_income" || 
    $_COOKIE["id_pengurus"] == "manager_facebook" ||
    $_COOKIE["id_pengurus"] == "manager_instagram"
) {
    $q  = mysqli_query($connYear, "SELECT * FROM data_income_new");
    while ($dP = $q->fetch_array()) {
        $i++;

        $ia             = $dP['income_a'];
        $total_ia[$i]   = $ia;
        $hasil_ia       = array_sum($total_ia);

        $ib             = $dP['income_b'];
        $total_ib[$i]   = $ib;
        $hasil_ib       = array_sum($total_ib);

        $iinstagram             = $dP['income_instagram'];
        $total_iinstagram[$i]   = $iinstagram;
        $hasil_iinstagram       = array_sum($total_iinstagram);

        $ibogor             = $dP['income_bogor'];
        $total_ibogor[$i]   = $ibogor;
        $hasil_ibogor       = array_sum($total_ibogor);

        $iglobal             = $dP['income_global'];
        $total_iglobal[$i]   = $iglobal;
        $hasil_iglobal       = array_sum($total_iglobal);

        $iFacebook  = $hasil_ia+$hasil_ib+$hasil_ibogor;
    }

    $q2  = mysqli_query($connYear, "SELECT * FROM data_pemasukan");
    while ($dP2 = $q2->fetch_array()) {
        $i++;

        $icelengan             = $dP2['pemasukan_celengan'];
        $total_icelengan[$i]   = $icelengan;
        $hasil_icelengan       = array_sum($total_icelengan);

        $ikotak_amal             = $dP2['pemasukan_kotak_amal'];
        $total_ikotak_amal[$i]   = $ikotak_amal;
        $hasil_ikotak_amal       = array_sum($total_ikotak_amal);

    }
    $totalPemasukan = $hasil_iglobal+$hasil_icelengan+$hasil_ikotak_amal;
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
        "baksos"   => [
            "anggaran"  => $hasil_anggaran3,
            "terpakai"  => $hasil_terpakai3,
            "cashback"   => $cashback3,
        ],
        "aset"   => [
            "anggaran"  => $hasil_anggaran4,
            "terpakai"  => $hasil_terpakai4,
            "cashback"   => $cashback4,
        ],
        "produksi"   => [
            "anggaran"  => $hasil_anggaran5,
            "terpakai"  => $hasil_terpakai5,
            "cashback"   => $cashback5,
        ],
        "gaji"   => [
            "anggaran"  => $hasil_anggaran6,
            "terpakai"  => $hasil_terpakai6,
            "cashback"   => $cashback6,
        ],
        "humas"   => [
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
        "total"   => [
            "anggaran"  => $totalAnggaran,
            "terpakai"  => $totalTerpakai,
            "cashback"   => $totalCashback,
        ],
        "pemasukan" => [
            "media" => $hasil_iglobal,
            "facebook" => $iFacebook,
            "instagram" => $hasil_iinstagram,
            "kotak" => $hasil_ikotak_amal,
            "celengan" => $hasil_icelengan,
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
        "baksos"   => [
            "anggaran"  => $hasil_anggaran3,
            "terpakai"  => $hasil_terpakai3,
            "cashback"   => $cashback3,
        ],
        "aset"   => [
            "anggaran"  => $hasil_anggaran4,
            "terpakai"  => $hasil_terpakai4,
            "cashback"   => $cashback4,
        ],
        "produksi"   => [
            "anggaran"  => $hasil_anggaran5,
            "terpakai"  => $hasil_terpakai5,
            "cashback"   => $cashback5,
        ],
        "gaji"   => [
            "anggaran"  => $hasil_anggaran6,
            "terpakai"  => $hasil_terpakai6,
            "cashback"   => $cashback6,
        ],
        "humas"   => [
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
            "facebook" => $iFacebook,
            "instagram" => $hasil_iinstagram,
            "kotak" => $hasil_ikotak_amal,
            "celengan" => $hasil_icelengan,
            "totalPemasukan" => $totalPemasukan
        ]
    ];
}


echo json_encode($data);

$conn->close();

?>