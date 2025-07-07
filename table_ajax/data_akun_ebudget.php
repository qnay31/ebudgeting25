<?php
error_reporting(0);
include '../function.php';
// DB table to use
$table = 'akun_pengurus';
 
// Table's primary key
$primaryKey = 'id';

// Table where
$where = "id_pengurus = 'sosial_media' ORDER BY nama ASC ";

// Table colums 
$columns = array(
    array(
        'db' => 'id',
        'dt' => 'DT_RowId',
        'formatter' => function( $d, $row ) {
            return $d;
        }
    ),
    array( 'db' => 'id', 'dt' => "akunId" ),
    array( 'db' => 'nama', 'dt' => "akunNama" ),
    array( 'db' => 'username', 'dt' => "akunUsername" ),
    array( 'db' => 'posisi', 'dt' => "akunPosisi" ),

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