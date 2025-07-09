<?php
session_start();
include "../../../function.php";
$sql="SELECT team FROM data_akun WHERE nomor_id = '$dataLog[id]' ORDER BY `team` ASC ";
$hasil=mysqli_query($conn,$sql);
$dataTeam = $hasil->fetch_assoc(); ?>
<div class="form-floating mb-2">
    <select class="form-select" name="team" id="select-team-akun" aria-label="Default select example">
        <?php if ($hasil->num_rows == 0) { ?>
        <option selected value="">Pilih Salah Satu Team</option>
        <option value="I">Facebook</option>
        <option value="II">Instagram</option>
        <?php } else {
            ?>
        <option value="<?= $dataTeam['team']; ?>" selected> Team
            <?= 
                $dataTeam["team"] == "I" ? "Facebook" : 
                ($dataTeam["team"] == "II" ? "Instagram" : "Tidak Ada Team")
            ?>
        </option>
        <?php } ?>
    </select>
    <label for="select-team-akun">Pilih Team</label>
    <span class="alertTeam text-danger"></span>
</div>