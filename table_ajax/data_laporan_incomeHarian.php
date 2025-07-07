<?php
error_reporting(0);
// DB table to use
$table = 'income_global';
 
// Table's primary key
$primaryKey = 'id';

// Table where
$where = "status = 'Terverifikasi' ORDER BY tgl_pemasukan DESC ";

// Table colums 
$columns = array(
    array(
        'db' => 'id',
        'dt' => 'DT_RowId',
        'formatter' => function( $d, $row ) {
            return $d;
        }
    ),
    array( 'db' => 'kategori', 'dt' => "lapKategori" ),
    array( 
        'db' => 'gedung', 
        'dt' => "lapGedung",
        'formatter' => function( $d, $row ) {
            return $d == "I" ? "FB Uang Saku I" : 
            ($d == "II" ? "FB Uang Saku II" : 
            ($d == "III" ? "IG Uang Saku I" : 
            ($d == "IV" ? "IG Uang Saku II" : 
            ($d == "V" ? "FB Sembako" : 
            ($d == "VI" ? "IG Sembako" : 
            ($d == "VII" ? "FB Pembangunan" :
            ($d == "VIII" ? "IG Pembangunan" : 
            ($d == "IX" ? "FB Kesehatan" : "Tidak Ada"))))))));
        } 
    ),
    array(
        'db'        => 'tgl_pemasukan',
        'dt'        => "lapTanggal",
        'formatter' => function( $d, $row ) {
            return date( 'd-m-Y', strtotime($d));
        }
    ),
    array(
        'db'        => 'tgl_pemasukan',
        'dt'        => 'lapBulan',
        'formatter' => function( $d, $row ) {
            $convert = date( 'd F Y', strtotime($d));
            $bulan   = substr($convert, 2);
            return $bulan;
        }
    ),
    array( 'db' => 'status', 'dt' => "lapStatus" ),
    array(
        'db'        => 'income',
        'dt'        => "lapIncome",
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