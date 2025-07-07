<?php
error_reporting(0);
// DB table to use
$table = 'log_aktivity';
 
// Table's primary key
$primaryKey = 'id';

// Table colums
$columns = array(
    array(
        'db' => 'id',
        'dt' => 'DT_RowId',
        'formatter' => function( $d, $row ) {
            return $d;
        }
    ),
    array( 'db' => 'id', 'dt' => 'logId' ),
    array( 'db' => 'nama', 'dt' => 'logNama' ),
    array( 'db' => 'posisi', 'dt' => 'logPosisi' ),
    array( 'db' => 'ip', 'dt' => 'logIp' ),
    array(
        'db'        => 'tanggal',
        'dt'        => 'logTanggal',
        'formatter' => function( $d, $row ) {
            return date( 'd-m-Y', strtotime($d));
        }
    ),
    array(
        'db'        => 'tanggal',
        'dt'        => 'logJam',
        'formatter' => function( $d, $row ) {
            return date('H:i:s', strtotime($d));
        }
    ),
    array( 'db' => 'aktivitas', 'dt' => 'logAktivitas' ),
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