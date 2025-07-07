<?php
error_reporting(0);
// DB table to use
$table = 'input_anggaran_lain';
 
// Table's primary key
$primaryKey = 'id';

// Table Where
$where = "status = 'OK' AND laporan = 'Terverifikasi' ORDER BY `tgl_dibuat` DESC " ;

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
        'db'        => 'dana_anggaran',
        'dt'        => 'lapAnggaran',
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ),
    array(
        'db'        => 'tgl_laporan',
        'dt'        => 'lapPemakaian',
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
    array( 'db' => 'pemakaian', 'dt' => 'lapDeskripsiPemakaian' ),
    array(
        'db'        => 'dana_terpakai',
        'dt'        => 'lapTerpakai',
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ),
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