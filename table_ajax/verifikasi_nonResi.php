<?php
error_reporting(0);
session_start();
// DB table to use
$table = 'input_incometanparesi';
 
// Table's primary key
$primaryKey = 'id';

// Table where
if ($_COOKIE["id_pengurus"] == "management_keuangan") {
    $where = "status = 'Pending'";

} else if ($_COOKIE["id_pengurus"] == "admin_web") {
    $where = "status = 'Terverifikasi'";
    
} else {
    $where = "status = 'Pending' ORDER BY `tgl_pemasukan` DESC ";
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
    array( 'db' => 'kategori', 'dt' => "verKategori" ),
    array( 'db' => 'posisi', 'dt' => "verPosisi" ),
    array(
        'db'        => 'tgl_pemasukan',
        'dt'        => "verTanggal",
        'formatter' => function( $d, $row ) {
            return date( 'd-m-Y', strtotime($d));
        }
    ),
    array( 'db' => 'status', 'dt' => "verStatus" ),
    array( 'db' => 'id', 'dt' => "verEdit" ),
    array(
        'db'        => 'income',
        'dt'        => "verIncome",
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