<?php
session_start();
include "../../function.php";

$id             = mysqli_real_escape_string($conn, $_POST["inputId"]);
$pengajuan      = mysqli_real_escape_string($conn, $_POST["inputPengajuan"]);
if ($pengajuan == "Aset Yayasan") {
    $tableInput     = "aset_yayasan";
    
    if ($dataLog["id_pengurus"] == "admin_web") {
        $qKategori   = mysqli_query($conn, "SELECT * FROM input_$tableInput WHERE id = '$id'");
        $dKategori   = $qKategori->fetch_assoc();

        $qty_anggar     = mysqli_real_escape_string($conn, $_POST["inputQtyAnggaran"]);
        $qtyAnggar      = RemoveSpecialChar($qty_anggar);
        $qtyAnggaran    = str_replace(' ', '', $qtyAnggar);

        if ($dKategori["dana_terpakai"] > 0) {
            $qty_acak       = mysqli_real_escape_string($conn, $_POST["inputQty"]);
            $qtyPakai       = RemoveSpecialChar($qty_acak);
            $qty            = str_replace(' ', '', $qtyPakai);
        }

    } else {
        $qty_acak       = mysqli_real_escape_string($conn, $_POST["inputQty"]);
        $qtyPakai       = RemoveSpecialChar($qty_acak);
        $qty            = str_replace(' ', '', $qtyPakai);
    }
    
} elseif ($pengajuan == "Uang Makan") {
    $tableInput     = "uang_makan";

} elseif ($pengajuan == "Gaji Karyawan") {
    $tableInput     = "gaji_karyawan";

} elseif ($pengajuan == "Biaya Lainnya") {
    $tableInput = "anggaran_lain";

} elseif ($pengajuan == "Maintenance") {
    $tableInput = "maintenance";

} elseif ($pengajuan == "Operasional Yayasan") {
    $tableInput = "operasional_yayasan";
    
} else {
    $tableInput = "jasa";
}

if ($dataLog["id_pengurus"] == "admin_web" && $pengajuan !== "Aset Yayasan") {
    $qKategori   = mysqli_query($conn, "SELECT * FROM input_$tableInput WHERE id = '$id'");
    $dKategori   = $qKategori->fetch_assoc();
}

if ($dataLog["id_pengurus"] == "admin_web") {
    $tglPengajuan   = mysqli_real_escape_string($conn, $_POST["inputTglPengajuan"]);
    $perencanaan    = mysqli_real_escape_string($conn, $_POST["inputPerencanaan"]);
    $nom_anggar     = mysqli_real_escape_string($conn, $_POST["inputAnggaran"]);
    $anggar         = RemoveSpecialChar($nom_anggar);
    $anggaran       = str_replace(' ', '', $anggar);

    if ($dKategori["dana_terpakai"] > 0) {
        $tglLaporan     = mysqli_real_escape_string($conn, $_POST["inputTgl"]);
        $pemakaian      = mysqli_real_escape_string($conn, $_POST["inputPemakaian"]);
        $nom_acak       = mysqli_real_escape_string($conn, $_POST["inputTerpakai"]);
        $pakai          = RemoveSpecialChar($nom_acak);
        $terpakai       = str_replace(' ', '', $pakai);
    }
} else {
    $tglLaporan     = mysqli_real_escape_string($conn, $_POST["inputTgl"]);
    $pemakaian      = mysqli_real_escape_string($conn, $_POST["inputPemakaian"]);
    $nom_acak       = mysqli_real_escape_string($conn, $_POST["inputTerpakai"]);
    $pakai          = RemoveSpecialChar($nom_acak);
    $terpakai       = str_replace(' ', '', $pakai);
}

$ip             = get_client_ip();
$date           = date("Y-m-d H:i:s");
// die(var_dump([$id, $tglLaporan, $pemakaian, $terpakai]));

if ($dataLog["id_pengurus"] == "admin_web") {
    if ($pengajuan == "Aset Yayasan") {
        if ($dKategori["dana_terpakai"] > 0) {
            $query  = mysqli_query($conn, "SELECT * FROM input_$tableInput WHERE tgl_dibuat = '$tglPengajuan' AND deskripsi = '$perencanaan' AND qty_anggaran = '$qtyAnggaran' AND dana_anggaran = '$anggaran' AND tgl_laporan = '$tglLaporan' AND pemakaian = '$pemakaian' AND qty_pembelian = '$qty' AND dana_terpakai = '$terpakai' ");
    
        } else {
            $query  = mysqli_query($conn, "SELECT * FROM input_$tableInput WHERE tgl_dibuat = '$tglPengajuan' AND deskripsi = '$perencanaan' AND qty_anggaran = '$qtyAnggaran' AND dana_anggaran = '$anggaran' ");
        }
    } else {
        if ($dKategori["dana_terpakai"] > 0) {
            $query  = mysqli_query($conn, "SELECT * FROM input_$tableInput WHERE tgl_dibuat = '$tglPengajuan' AND deskripsi = '$perencanaan' AND dana_anggaran = '$anggaran' AND tgl_laporan = '$tglLaporan' AND pemakaian = '$pemakaian' AND dana_terpakai = '$terpakai' ");
    
        } else {
            $query  = mysqli_query($conn, "SELECT * FROM input_$tableInput WHERE tgl_dibuat = '$tglPengajuan' AND deskripsi = '$perencanaan' AND  dana_anggaran = '$anggaran' ");
        }
    }
    
} else {    
    if ($pengajuan == "Aset Yayasan") {
        $query  = mysqli_query($conn, "SELECT * FROM input_$tableInput WHERE qty_pembelian = '$qty' AND tgl_laporan = '$tglLaporan' AND pemakaian = '$pemakaian' AND dana_terpakai = '$terpakai' ");
        
    } else {
        $query  = mysqli_query($conn, "SELECT * FROM input_$tableInput WHERE tgl_laporan = '$tglLaporan' AND pemakaian = '$pemakaian' AND dana_terpakai = '$terpakai' ");
    }
}

$num    = $query->num_rows;

if($num === 1) {
    echo "1"; 
    
} else {
    echo "0";

    if ($dataLog["id_pengurus"] == "admin_web") {
        if ($dKategori["dana_terpakai"] > 0) {
            if ($pengajuan == "Aset Yayasan") {
                $sql ="UPDATE input_$tableInput SET tgl_dibuat = '$tglPengajuan', deskripsi = '$perencanaan', qty_anggaran = '$qtyAnggaran', dana_anggaran = '$anggaran', qty_pembelian = '$qty', tgl_laporan = '$tglLaporan', pemakaian = '$pemakaian', dana_terpakai = '$terpakai', laporan = 'Menunggu Verifikasi' WHERE id = '$id'";
        
            } else {
                $sql ="UPDATE input_$tableInput SET tgl_dibuat = '$tglPengajuan', deskripsi = '$perencanaan', dana_anggaran = '$anggaran', tgl_laporan = '$tglLaporan', pemakaian = '$pemakaian', dana_terpakai = '$terpakai', laporan = 'Menunggu Verifikasi' WHERE id = '$id'";
            } 
    
        } else {
            if ($pengajuan == "Aset Yayasan") {
                $sql ="UPDATE input_$tableInput SET tgl_dibuat = '$tglPengajuan', deskripsi = '$perencanaan', qty_anggaran = '$qtyAnggaran', dana_anggaran = '$anggaran' WHERE id = '$id'";
        
            } else {
                $sql ="UPDATE input_$tableInput SET tgl_dibuat = '$tglPengajuan', deskripsi = '$perencanaan', dana_anggaran = '$anggaran' WHERE id = '$id'";
            } 
        }

        $hasil = mysqli_query($conn,$sql);

    } else {
        if ($pengajuan == "Aset Yayasan") {
            $sql ="UPDATE input_$tableInput SET qty_pembelian = '$qty', tgl_laporan = '$tglLaporan', pemakaian = '$pemakaian', dana_terpakai = '$terpakai' WHERE id = '$id'";
    
        } else {
            $sql ="UPDATE input_$tableInput SET tgl_laporan = '$tglLaporan', pemakaian = '$pemakaian', dana_terpakai = '$terpakai' WHERE id = '$id'";
        }
        
        $hasil = mysqli_query($conn,$sql);

        mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
        '{$dataLog[nama]}', 
        '{$dataLog[posisi]}', 
        '$ip', 
        '$date', 
        '{$dataLog[nama]} Bagian {$dataLog[posisi]} Telah Mengubah Data Laporan dari Pengajuan $pengajuan')
    ");

    }
    
}

$conn->close();

?>