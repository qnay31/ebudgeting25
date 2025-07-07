<?php
    require '../../../function.php';
    $i = 1;
    $username       = $_COOKIE["username"];
    $dQuery         = mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE username = '$username'");
    $data           = $dQuery->fetch_assoc();
    $qNAkun         = mysqli_query($conn, "SELECT * FROM data_akun WHERE pemegang = '$data[nama]' ORDER BY `nama_akun` ASC ");
?>
<?php while ($dAkun = $qNAkun->fetch_array()) { ?>
<div class="item-data my-1">
    <?= $i++; ?>. <?= $dAkun["nama_akun"]; ?> - <?= $dAkun["kategori"]; ?>
</div>
<?php } ?>