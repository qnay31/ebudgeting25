<?php
error_reporting(0);
require './../function.php';
// DB table to use
$table = 'input_income_media';
 
// Table's primary key
$primaryKey = 'id';

// Table where
if ($_COOKIE["id_pengurus"] == "sosial_media") {
    $where = "nomor_id = '$dataLog[id]' AND status = 'OK' ";
    
} else {
    if ($_COOKIE["id_pengurus"] == "manager_facebook") {
        if ($_COOKIE["username"] == "ig_saku1") {
            $where = "kategori = 'Instagram' AND team = 'III' AND status = 'OK' ";
        
        } else if ($_COOKIE["username"] == "ig_saku2") {
            $where = "kategori = 'Instagram' AND team = 'IV' AND status = 'OK' ";

        } else if ($_COOKIE["username"] == "ig_sembako") {
            $where = "kategori = 'Instagram' AND team = 'VI' AND status = 'OK' ";

        } else if ($_COOKIE["username"] == "ig_pembangunan") {
            $where = "kategori = 'Instagram' AND team = 'VIII' AND status = 'OK' ";
            
        } else if ($_COOKIE["username"] == "manager_ig") {
            $where = "kategori = 'Instagram' AND team LIKE 'III' OR team LIKE 'VI' OR team LIKE 'VIII' AND status = 'OK' ";

        } else {
            if ($_COOKIE["username"] == "fb_saku1") {
                $where = "kategori = 'Facebook' AND team = 'I' AND status = 'OK' ";
            
            } elseif ($_COOKIE["username"] == "fb_saku2") {
                $where = "kategori = 'Facebook' AND team = 'II' AND status = 'OK' ";

            } elseif ($_COOKIE["username"] == "fb_sembako") {
                $where = "kategori = 'Facebook' AND team = 'V' AND status = 'OK' ";

            } elseif ($_COOKIE["username"] == "fb_pembangunan") {
                $where = "kategori = 'Facebook' AND team = 'VII' AND status = 'OK' ";
            
            } elseif ($_COOKIE["username"] == "fb_kesehatan") {
                $where = "kategori = 'Facebook' AND team = 'IX' AND status = 'OK' ";
            
            } else if ($_COOKIE["username"] == "manager_fb") {
                $where = "kategori = 'Facebook' AND team LIKE 'I' OR team LIKE 'VII' OR team LIKE 'IX' AND status = 'OK' ";
            }
        }
        
    } else {
        $where = "status = 'OK' ";
    }
    
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