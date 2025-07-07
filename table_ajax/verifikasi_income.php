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
    $where = "status = 'Pending'";

} else if ($_COOKIE["id_pengurus"] == "admin_web") {
    $where = "status = 'Dibatalkan' ORDER BY `tanggal_tf` DESC ";

} else {
    $where = "nomor_id = '$dataLog[id]' AND status = 'Pending' OR nomor_id = '$dataLog[id]' AND status = 'Dibatalkan' ORDER BY `tanggal_tf` DESC ";
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
    array( 'db' => 'nama_akun', 'dt' => "verAkun" ),
    array( 'db' => 'pemegang', 'dt' => "verNama" ),
    array( 'db' => 'nama_donatur', 'dt' => "verDonatur" ),
    array(
        'db'        => 'tanggal_tf',
        'dt'        => "verTanggal",
        'formatter' => function( $d, $row ) {
            return date( 'd-m-Y', strtotime($d));
        }
    ),
    array( 'db' => 'jam_tf', 'dt' => "verJam" ),
    array( 'db' => 'bank', 'dt' => "verBank" ),
    array( 'db' => 'status', 'dt' => "verStatus" ),
    array( 'db' => 'id', 'dt' => "verEdit" ),
    array(
        'db'        => 'jumlah_tf',
        'dt'        => "verTransfer",
        'formatter' => function( $d, $row ) {
            return number_format($d);
        }
    ), 
    array( 
        'db' => 'team', 
        'dt' => "verTeam",
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
    array( 'db' => 'kategori', 'dt' => "verKategori" ),
    array( 'db' => 'resi', 'dt' => 'verResi' )
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