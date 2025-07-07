<?php
error_reporting(0);
include "../../../function.php";
if (isset($_POST['menuProgram'])) {
    $program = $_POST["menuProgram"];
?>

<?php if ($program == "Program Asrama Yatim") { ?>
<div class="form-group mb-3 listProgram">
    <div class="form-text mb-2">
        Sub Anggaran
    </div>
    <select class="form-select" name="yatim" aria-label="Default select example">
        <option selected value="">Pilih Salah Satu</option>
        <option value="Uang Saku">Uang Saku</option>
        <option value="Uang Makan">Uang Makan</option>
        <option value="Laundry">Laundry</option>
        <option value="Santunan">Santunan</option>
        <option value="Tabungan Yatim">Tabungan Yatim</option>
    </select>
    <span class="alertYatim text-danger"></span>
</div>

<?php } elseif ($program == "Program Pendidikan Yatim") { ?>
<!-- Button trigger modal -->
<div class="button mb-2 listProgram">
    <button type="button" class="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#modalSekolah">
        Tambah Sekolah
    </button> <span style="font-size: 13px;">(<b>Jika Belum Tersedia</b>)</span>
</div>
<div class="form-floating mb-2" id="tampil">
    <select class="form-select" name="yatim" aria-label="Default select example">
        <option selected value="">Pilih Salah Satu Sekolah</option>
        <?php
        $query  = mysqli_query($conn, "SELECT * FROM asal_sekolah ORDER BY `nama_sekolah` ASC");

        ?>
        <?php
            while ($data = mysqli_fetch_array($query)) { ?>
        <option value="<?= $data['nama_sekolah'];?>">
            <?= ucwords($data['nama_sekolah']) ?>
        </option>

        <?php 
            $conn->close();
        } ?>
    </select>
    <label for="floatingSelect">Asal Sekolah</label>
    <span class="alertYatim text-danger"></span>
</div>

<?php } elseif ($program == "Program Santunan Bulanan" || $program == "Program Kesehatan Yatim") { ?>

<?php } else { ?>
<div class="form-group mb-3 listProgram">
    <div class="form-text mb-2">
        Yatim
    </div>
    <select class="form-select" name="yatim" aria-label="Default select example">
        <option selected value="">Pilih Salah Satu Yatim</option>
        <option value="Yatim Binaan">Binaan</option>
        <option value="Yatim Luar Binaan">Luar Binaan</option>
    </select>
    <span class="alertYatim text-danger"></span>
</div>

<?php } ?>


<?php } ?>