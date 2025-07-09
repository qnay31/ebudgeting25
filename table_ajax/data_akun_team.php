<?php
error_reporting(0);
// DB table to use
$table = 'data_akun';
 
// Table's primary key
$primaryKey = 'id';

// Table where
$where = "id_pengurus = 'sosial_media' GROUP BY pemegang ORDER BY pemegang ASC, nama_akun ASC ";

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
    array( 'db' => 'nomor_id', 'dt' => "akunEditId" ),
    array( 'db' => 'pemegang', 'dt' => "akunNama" ),
    array( 'db' => 'nama_akun', 'dt' => "akunList" ),
    array( 
        'db' => 'team', 
        'dt' => "akunTeam",
        'formatter' => function( $d, $row ) {
            return $d == "I" ? "Facebook" : 
            ($d == "II" ? "Instagram" : "Tidak Ada");
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