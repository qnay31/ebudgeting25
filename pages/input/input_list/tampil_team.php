<?php
session_start();
include "../../../function.php";
$sql="SELECT team FROM data_akun WHERE nomor_id = '$dataLog[id]' ORDER BY `team` ASC ";
$hasil=mysqli_query($conn,$sql);
$dataTeam = $hasil->fetch_assoc(); ?>
<div class="form-floating mb-2">
    <select class="form-select" name="team" aria-label="Default select example">
        <?php if ($hasil->num_rows == 0) { ?>
        <option selected value="">Pilih Salah Satu Team</option>
        <option value="I">FB Uang Saku I</option>
        <option value="II">FB Uang Saku II</option>
        <option value="III">IG Uang Saku</option>
        <option value="V">FB Sembako</option>
        <option value="VI">IG Sembako</option>
        <option value="VII">FB Pembangunan</option>
        <option value="VIII">IG Pembangunan</option>
        <option value="IX">FB Kesehatan</option>
        <?php } else {
            ?>
        <option value="<?= $dataTeam['team']; ?>" selected> Team
            <?= 
                $dataTeam["team"] == "I" ? "FB Uang Saku I" : 
                ($dataTeam["team"] == "II" ? "FB Uang Saku II" : 
                ($dataTeam["team"] == "III" ? "IG Uang Saku" : 
                ($dataTeam["team"] == "V" ? "FB Sembako" : 
                ($dataTeam["team"] == "VI" ? "IG Sembako" : 
                ($dataTeam["team"] == "VII" ? "FB Pembangunan" : 
                ($dataTeam["team"] == "VIII" ? "IG Pembangunan" : 
                ($dataTeam["team"] == "IX" ? "FB Kesehatan" : "Tidak Ada Team")))))))
            ?>
        </option>
        <?php } ?>
    </select>
    <label for="floatingSelect">Pilih Team</label>
    <span class="alertTeam text-danger"></span>
</div>