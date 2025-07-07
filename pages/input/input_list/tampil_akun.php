<div class="form-floating mb-2">
    <select class="form-select" name="akun" aria-label="Default select example">
        <option selected value="">Pilih Salah Satu Akun</option>
        <?php
        session_start();
        include "../../../function.php";
        $sql="SELECT * FROM data_akun WHERE nomor_id = '$dataLog[id]' ORDER BY `nama_akun` ASC ";
        $hasil=mysqli_query($conn,$sql);
        $no=0;
        while ($data = mysqli_fetch_array($hasil)) {
        $no++;
        ?>
        <?php if ($hasil->num_rows == 0) { ?>
        <option value="" selected>Pilih Salah Satu Akun</option>

        <?php } else { ?>
        <option value="<?= $data['nama_akun']; ?>"><?= ucwords($data['nama_akun']); ?> - <?= $data["kategori"] ?></option>
        <?php } ?>
        <?php } ?>
    </select>
    <label for="floatingSelect">Nama Akun</label>
    <span class="alertAkun text-danger"></span>
</div>