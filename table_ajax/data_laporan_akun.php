<?php
error_reporting(0);
session_start();
require './../function.php';

// DB table to use
$table = 'input_laporan_media';

// Table's primary key
$primaryKey = 'id';

// Table where
if ($_COOKIE["id_pengurus"] == "ketua_yayasan") {
    $request = $_GET['media'];
        $where = "kategori = '$request' ORDER BY tgl_laporan DESC ";
    
} else if($_COOKIE["id_pengurus"] == "manager_facebook" || $_COOKIE["id_pengurus"] == "manager_instagram") {
    $request = $_GET['media'];
    if ($_COOKIE["username"] == "facebook_depok") {
        $where = "team = 'I' AND kategori = '$request' ORDER BY tgl_laporan DESC  ";
    
    } else {
        $where = "team = 'II' AND kategori = '$request' ORDER BY tgl_laporan DESC  ";
    
    }
    
} else if ($_COOKIE["id_pengurus"] == "admin_web") {
    $where = "id_pengurus NOT LIKE 'gfsgk%' ORDER BY tgl_laporan DESC ";
    
} else {
    if ($_GET["listMedia"] == "facebook") {
        $where = "nomor_id = '$dataLog[id]' AND kategori = 'Facebook' ";
        
    } else {
        $where = "nomor_id = '$dataLog[id]' AND kategori = 'Instagram' ";
    };
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
    array( 'db' => 'id', 'dt' => 'lapId' ),
    array( 'db' => 'pemegang', 'dt' => 'lapPemegang' ),
    array( 'db' => 'nama_akun', 'dt' => 'lapAkun' ),
    array(
        'db'        => 'tgl_laporan',
        'dt'        => 'lapLaporan',
        'formatter' => function( $d, $row ) {
            return date( 'd-m-Y', strtotime($d));
        }
    ),
    array(
        'db'        => 'tgl_laporan',
        'dt'        => 'lapBulan',
        'formatter' => function( $d, $row ) {
            $convert = date( 'd F Y', strtotime($d));
            $bulan   = substr($convert, 2);
            return $bulan;
        }
    ),
    array(
        'db'        => 'total_teman',
        'dt'        => 'lapTeman',
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ),
    array(
        'db'        => 'Total_add',
        'dt'        => 'lapAdd',
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ),
    array(
        'db'        => 'teman_baru',
        'dt'        => 'lapTemanBaru',
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ),
    array(
        'db'        => 'teman_hapus',
        'dt'        => 'lapTemanHapus',
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ),
    array(
        'db'        => 'total_pengikut',
        'dt'        => 'lapPengikut',
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ),
    array(
        'db'        => 'total_mengikuti',
        'dt'        => 'lapMengikuti',
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ),
    array(
        'db'        => 'pengikut_baru',
        'dt'        => 'lapIkutBaru',
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ),
    array(
        'db'        => 'mengikuti_baru',
        'dt'        => 'lapIkutiBaru',
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ),
    array(
        'db'        => 'hapus_pengikut',
        'dt'        => 'lapIkutHapus',
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ),
    array(
        'db'        => 'hapus_mengikuti',
        'dt'        => 'lapIkutiHapus',
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ),
    array(
        'db'        => 'totalSerangan',
        'dt'        => 'lapSerangan',
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ),
    array(
        'db'        => 'donatur',
        'dt'        => 'lapDonatur',
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ),
    array(
        'db'        => 'respon',
        'dt'        => 'lapRespon',
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ),
    array(
        'db'        => 'tidak_respon',
        'dt'        => 'lapNoRespon',
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ),
    array(
        'db'        => 'total_income',
        'dt'        => 'lapIncome',
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ),
    array( 
        'db' => 'team', 
        'dt' => 'lapTeam',
        'formatter' => function( $d, $row ) {
            return $d == "I" ? "Facebook" : 
            ($d == "II" ? "Instagram" : "Tidak Ada");
        }
    ),
    
);
 
// SQL server connection information
include './connection_table.php';
 
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * If you just want to use the basic configuration for DataTables with PHP
 * server-side, there is no need to edit below this line.
 */
 
require( '../ssp.class.php' );
 
echo json_encode(
    SSP::complex( $_GET, $sql_details, $table, $primaryKey, $columns, $where)
);