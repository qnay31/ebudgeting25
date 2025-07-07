<?php
error_reporting(0);
// DB table to use
$table = 'asal_sekolah';
 
// Table's primary key
$primaryKey = 'id';

// Table where
$where = "nama_sekolah NOT LIKE 'fgksdfjg%' ORDER BY nama_sekolah ASC";

// Table colums 
$columns = array(
    array(
        'db' => 'id',
        'dt' => 'DT_RowId',
        'formatter' => function( $d, $row ) {
            return $d;
        }
    ),
    array( 'db' => 'id', 'dt' => "lapId" ),
    array( 'db' => 'nama_sekolah', 'dt' => "lapSekolah" ),
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