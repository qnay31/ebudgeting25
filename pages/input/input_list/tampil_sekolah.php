<div class="form-floating mb-2">
    <select class="form-select" name="yatim" aria-label="Default select example">
        <option selected value="">Pilih Salah Satu Sekolah</option>
        <?php
        include "../../../function.php";
        $sql="SELECT * FROM asal_sekolah order by nama_sekolah ASC";
        $hasil=mysqli_query($conn,$sql);
        $no=0;
        while ($data = mysqli_fetch_array($hasil)) {
        $no++;
        ?>
        <option value="<?= $data['nama_sekolah']; ?>"><?= ucwords($data['nama_sekolah']); ?></option>
        <?php
    
            $conn->close();
        } ?>
    </select>
    <label for="floatingSelect">Asal Sekolah</label>
    <span class="alertYatim text-danger"></span>
</div>