<?php
error_reporting(0);
session_start();
// DB table to use
$table = 'input_uang_makan';
 
// Table's primary key
$primaryKey = 'id';

// Table Where
if ($_COOKIE["id_pengurus"] == "admin_web") {
    $where = "status NOT LIKE 'hfi%' ORDER BY tgl_dibuat DESC ";
    
} else {
    $where = "status = 'OK' AND laporan = 'Menunggu Verifikasi' " ;
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
    array( 'db' => 'laporan', 'dt' => 'lapStatus' ),
    array( 'db' => 'id', 'dt' => 'lapEdit' ),
    array( 'db' => 'kategori', 'dt' => 'lapKategori' ),
    array(
        'db'        => 'tgl_dibuat',
        'dt'        => 'lapPengajuan',
        'formatter' => function( $d, $row ) {
            return date( 'd-m-Y', strtotime($d));
        }
    ),
    array( 'db' => 'deskripsi', 'dt' => 'lapDeskripsi' ),
    array(
        'db'        => 'tgl_laporan',
        'dt'        => 'lapPemakaian',
        'formatter' => function( $d, $row ) {
            return date( 'd-m-Y', strtotime($d));
        }
    ),
    array( 'db' => 'pemakaian', 'dt' => 'lapDeskripsiPemakaian' ),
    array( 'db' => 'id', 'dt' => 'lapResi' ),
    array( 'db' => 'dokumen', 'dt' => 'lapDokumen' ),
    array( 'db' => 'dana_anggaran', 'dt' => 'anggaran' ),
    array( 'db' => 'dana_terpakai', 'dt' => 'terpakai' ),
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