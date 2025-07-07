<?php
// error_reporting(0);
session_start();
// DB table to use
$table = 'input_income_media';
 
// Table's primary key
$primaryKey = 'id';

// Table where
if($_COOKIE["id_pengurus"] == "manager_facebook") {
    if ($_COOKIE["username"] == "fb_saku1") {
        $where = "team = 'I' AND status = 'OK' ORDER BY pemegang ASC, `tanggal_tf` DESC ";
    
    } elseif ($_COOKIE["username"] == "fb_saku2") {
        $where = "team = 'II' AND status = 'OK' ORDER BY pemegang ASC, `tanggal_tf` DESC ";
    
    } elseif ($_COOKIE["username"] == "ig_saku1") {
        $where = "team = 'III' AND status = 'OK' ORDER BY pemegang ASC, `tanggal_tf` DESC ";
    
    } elseif ($_COOKIE["username"] == "ig_saku2") {
        $where = "team = 'IV' AND status = 'OK' ORDER BY pemegang ASC, `tanggal_tf` DESC ";
    
    } elseif ($_COOKIE["username"] == "fb_sembako") {
        $where = "team = 'V' AND status = 'OK' ORDER BY pemegang ASC, `tanggal_tf` DESC ";

    } elseif ($_COOKIE["username"] == "ig_sembako") {
        $where = "team = 'VI' AND status = 'OK' ORDER BY pemegang ASC, `tanggal_tf` DESC ";

    } elseif ($_COOKIE["username"] == "fb_pembangunan") {
        $where = "team = 'VII' AND status = 'OK' ORDER BY pemegang ASC, `tanggal_tf` DESC ";

    } elseif ($_COOKIE["username"] == "ig_pembangunan") {
        $where = "team = 'VIII' AND status = 'OK' ORDER BY pemegang ASC, `tanggal_tf` DESC ";

    } elseif ($_COOKIE["username"] == "manager_fb") {
        $where = "team LIKE 'I' OR team LIKE 'VII' OR team LIKE 'IX' AND status = 'OK' ORDER BY pemegang ASC, `tanggal_tf` DESC ";

    } elseif ($_COOKIE["username"] == "manager_ig") {
        $where = "team LIKE 'III' OR team LIKE 'VI' OR team LIKE 'VIII' AND status = 'OK' ORDER BY pemegang ASC, `tanggal_tf` DESC ";
    
    } else {
        $where = "team = 'IX' AND status = 'OK' ORDER BY pemegang ASC, `tanggal_tf` DESC ";
    }

} else {
    $where = "status = 'OK' ORDER BY pemegang ASC, `tanggal_tf` DESC ";
}

// Table colums 
$columns = array(
    array(
        'db' => 'id',
        'dt' => 'DT_RowId',
        'formatter' => function( $d, $row ) {
            return $d;
        }
    ),
    array( 'db' => 'pemegang', 'dt' => "suksesPemegang" ),
    array( 'db' => 'nama_akun', 'dt' => "suksesAkun" ),
    array( 'db' => 'nama_donatur', 'dt' => "suksesDonatur" ),
    array(
        'db'        => 'tanggal_tf',
        'dt'        => "suksesTanggal",
        'formatter' => function( $d, $row ) {
            return date( 'd-m-Y', strtotime($d));
        }
    ),
    array(
        'db'        => 'tanggal_tf',
        'dt'        => 'suksesBulan',
        'formatter' => function( $d, $row ) {
            $convert = date( 'd F Y', strtotime($d));
            $bulan   = substr($convert, 2);
            return $bulan;
        }
    ),
    array( 'db' => 'jam_tf', 'dt' => "suksesJam" ),
    array( 'db' => 'bank', 'dt' => "suksesBank" ),
    array( 'db' => 'id', 'dt' => "suksesEdit" ),
    array(
        'db'        => 'jumlah_tf',
        'dt'        => "suksesTransfer",
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ),
    array( 
        'db' => 'team', 
        'dt' => "suksesTeam",
        'formatter' => function( $d, $row ) {
            return $d == "I" ? "FB Uang Saku I" : 
            ($d == "II" ? "FB Uang Saku II" : 
            ($d == "III" ? "IG Uang Saku I" : 
            ($d == "IV" ? "IG Uang Saku II" : 
            ($d == "V" ? "FB Sembako" : 
            ($d == "VI" ? "IG Sembako" : 
            ($d == "VII" ? "FB Pembangunan" :
            ($d == "VIII" ? "IG Pembangunan" : 
            ($d == "IX" ? "FB Kesehatan" : "Tidak Ada"))))))));
        }
    ),
    array( 'db' => 'kategori', 'dt' => "suksesKategori")
);
 
// SQL server connection information
include './connection_table.php';
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * If you just want to use the basic configuration for DataTables with PHP
 * server-side, there is no need to edit below this line.
 */
 
require( '../ssp.class.php' );
 
echo json_encode(
    SSP::complex( $_GET, $sql_details, $table, $primaryKey, $columns, $where )
);