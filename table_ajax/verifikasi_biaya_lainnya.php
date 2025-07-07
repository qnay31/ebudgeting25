<?php
error_reporting(0);
// DB table to use
$table = 'input_anggaran_lain';
 
// Table's primary key
$primaryKey = 'id';

// Table where
$where = "status = 'Pending'";

// Table colums 
$columns = array(
    array(
        'db' => 'id',
        'dt' => 'DT_RowId',
        'formatter' => function( $d, $row ) {
            return $d;
        }
    ),
    array( 'db' => 'id', 'dt' => "verId" ),
    array( 'db' => 'kategori', 'dt' => "verKategori" ),
    array( 'db' => 'posisi', 'dt' => "verPosisi" ),
    array(
        'db'        => 'tgl_dibuat',
        'dt'        => "verPengajuan",
        'formatter' => function( $d, $row ) {
            return date( 'd-m-Y', strtotime($d));
        }
    ),
    array( 'db' => 'deskripsi', 'dt' => "verDeskripsi" ),
    array( 'db' => 'status', 'dt' => "verStatus" ),
    array( 'db' => 'id', 'dt' => "verEdit" ),
    array(
        'db'        => 'dana_anggaran',
        'dt'        => "verAnggaran",
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    )
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