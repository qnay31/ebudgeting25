<?php

include "./../../../function.php";

if (isset($_POST['menuAkun'])) {
    $nama       = $_POST["menuAkun"];
    $kategori   = $_POST["kategori"];

    $qName  = mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE nama = '$nama'");
    $dName  = $qName->fetch_assoc();
    $id     = $dName["id"];

    $qTeam  = mysqli_query($conn, "SELECT * FROM data_akun WHERE nomor_id = '$id'");
    $dTeam  = mysqli_fetch_array($qTeam);
    $nTeam  = $qTeam->num_rows;

?>
<?php if ($nTeam > 0) { ?>
<div class="form-floating mb-2">
    <input type="text" class="form-control" name="kategori" value="<?= $dTeam["kategori"]; ?>" readonly>
    <label>Akun</label>
</div>

<div class="form-floating mb-2">
    <input type="text" class="form-control" name="userId" value="<?= $id; ?>" readonly>
    <label>key</label>
</div>

<div class="form-floating mb-2">
    <select class="form-select" name="team" aria-label="Default select example">
        <option value="<?= $dTeam['team']; ?>" selected> Team
            <?= 
            $dTeam["team"] == "I" ? "FB Uang Saku I" : 
            ($dTeam["team"] == "II" ? "FB Uang Saku II" : 
            ($dTeam["team"] == "III" ? "IG Uang Saku I" : 
            ($dTeam["team"] == "IV" ? "IG Uang Saku II" : 
            ($dTeam["team"] == "V" ? "FB Sembako" : 
            ($dTeam["team"] == "VI" ? "IG Sembako" : 
            ($dTeam["team"] == "VII" ? "FB Pembangunan" : 
            ($dTeam["team"] == "VIII" ? "IG Pembangunan" : 
            ($dTeam["team"] == "IX" ? "FB Kesehatan" : "Tidak Ada Team"))))))))
            ?>
        </option>
    </select>
    <label>Team</label>
</div>

<?php } else { ?>
<div class="form-floating mb-2">
    <input type="text" class="form-control" name="kategori" value="<?= $kategori; ?>" readonly>
    <label>Akun</label>
</div>

<div class="form-floating mb-2">
    <input type="text" class="form-control" name="userId" value="<?= $id; ?>" readonly>
    <label>key</label>
</div>

<div class="form-floating mb-2">
    <select class="form-select" name="team" aria-label="Default select example" required>
        <option selected value="">Pilih Salah Satu Team</option>
        <option value="I">FB Uang Saku I</option>
        <option value="II">FB Uang Saku II</option>
        <option value="III">IG Uang Saku I</option>
        <option value="IV">IG Uang Saku II</option>
        <option value="V">FB Sembako</option>
        <option value="VI">IG Sembako</option>
        <option value="VII">FB Pembangunan</option>
        <option value="VIII">IG Pembangunan</option>
        <option value="IX">FB Kesehatan</option>
        <option value="Tidak Ada Team">No Team</option>
    </select>
    <label for="floatingSelect">Pilih Team</label>
    <span class="alertTeam text-danger"></span>
</div>
<?php } ?>

<?php } ?>