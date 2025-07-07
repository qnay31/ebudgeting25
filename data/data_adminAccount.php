<?php 
    // error_reporting(0);
    session_start();
    
    include './../function.php';
    $getID  = $_GET["id"];
    $query  = mysqli_query($conn, "SELECT * FROM data_akun WHERE id NOT LIKE '$getID' ORDER BY `nama_akun` ASC");
?>

<div class="form-floating my-2">
    <select class="form-select" name="listAccount" aria-label="Default select example">
        <option selected value="">Pilih Salah Satu Akun</option>

        <?php while ($data = mysqli_fetch_array($query)) { ?>
        <option value="<?= $data['nama_akun'];?>">
            <?= ucwords($data['nama_akun']) ?> - <?= ucwords($data['pemegang']) ?>
        </option>
        <?php 
    $conn->close();
    
    } ?>

    </select>
    <label for="floatingSelect">Nama Akun</label>
    <span class="alertAccount text-danger"></span>
</div>