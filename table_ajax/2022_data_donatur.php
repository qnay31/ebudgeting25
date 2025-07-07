<?php
// error_reporting(0);
session_start();
require './../function.php';
// DB table to use
$table = 'income_media';
 
// Table's primary key
$primaryKey = 'id';

// Table where
if ($_COOKIE["id_pengurus"] == "sosial_media") {
    $where = "nomor_id = '$dataLog[id]' AND status = 'OK' ";
    
} else {
    $where = "status = 'OK' ";
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
);
 
// SQL server connection information
include './2022_connection.php';
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * If you just want to use the basic configuration for DataTables with PHP
 * server-side, there is no need to edit below this line.
 */
 
require( '../ssp.class.php' );
 
echo json_encode(
    SSP::complex( $_GET, $sql_details, $table, $primaryKey, $columns, $where )
);