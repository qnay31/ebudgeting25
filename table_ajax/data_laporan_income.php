<?php
error_reporting(0);
session_start();
require './../function.php';

// DB table to use
$table = 'input_income_media';
 
// Table's primary key
$primaryKey = 'id';

// Table where
if ($_COOKIE["id_pengurus"] == "kepala_income") {
    $where = "status = 'OK' ORDER BY `tanggal_tf` DESC ";

} else {
    $where = "nomor_id = '$dataLog[id]' AND status = 'OK' ORDER BY nama_akun ASC, `tanggal_tf` DESC";
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
    array( 
        'db'  => 'team', 
        'dt' => "suksesTeam",
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
    array( 'db'  => 'kategori', 'dt' => "suksesKategori" )

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