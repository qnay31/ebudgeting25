<?php

// error_reporting(0);
session_start();

include './../function.php';
if ($_COOKIE["id_pengurus"] == "manager_facebook") {
    $Ains = mysqli_query($conn, "SELECT akun_pengurus.profil, akun_pengurus.posisi, data_akun.team, data_akun.nomor_id 
    AS id, data_akun.pemegang AS nama FROM akun_pengurus JOIN data_akun ON akun_pengurus.id_pengurus = 
    data_akun.id_pengurus WHERE data_akun.team = 'I' GROUP BY data_akun.pemegang  ORDER BY `nama` ASC ");
    
} else if ($_COOKIE["id_pengurus"] == "manager_instagram") {
    $Ains = mysqli_query($conn, "SELECT akun_pengurus.profil, akun_pengurus.posisi, data_akun.team, data_akun.nomor_id 
    AS id, data_akun.pemegang AS nama FROM akun_pengurus JOIN data_akun ON akun_pengurus.id_pengurus = 
    data_akun.id_pengurus WHERE data_akun.team = 'II' GROUP BY data_akun.pemegang  ORDER BY `nama` ASC ");
        
} else {
    $Ains = mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE id_pengurus = 'sosial_media' ORDER BY `nama` ASC ");
}
?>

<?php 
$i = 1;
while ($data_Ains = $Ains->fetch_assoc()) { ?>
<div class="col-12 col-md-4 col-xl-3">
    <div class="app-card app-card-doc shadow-sm h-100" data-account="<?= $data_Ains["id"]; ?>">
        <div class="app-card-thumb-holder p-3">
            <span class="images-profil-person">
                <?php
                    $qFoto = mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE id = '$data_Ains[id]' ");
                ?>
                <?php if ($_COOKIE["id_pengurus"] == "ketua_yayasan") { ?>
                <img src="assets/images/profiles/<?= $data_Ains["profil"]; ?>" alt="user profile"
                    class="profile-image rounded-circle">

                <?php } else { ?>
                <?php
                    while ($dataFoto = $qFoto->fetch_assoc()) { ?>
                <img src="assets/images/profiles/<?= $dataFoto["profil"]; ?>" alt="user profile"
                    class="profile-image rounded-circle">
                <?php } ?>
                <?php } ?>
            </span>
            <!-- <span class="badge bg-success">NEW</span>   -->
            <a class="app-card-link-mask"></a>
        </div>
        <div class="app-card-body p-3 has-card-actions">

            <h4 class="app-doc-title truncate mb-0 personName"><a><?= $i++; ?>. <?= ucwords($data_Ains["nama"]); ?>
                    (<?= $data_Ains["posisi"]; ?>)</a></h4>
            <div class="app-doc-meta">
                <ul class="list-unstyled mb-0">
                    <?php
                        $no = 1;
                        $query3   = mysqli_query($conn, "SELECT * FROM data_akun WHERE pemegang = '$data_Ains[nama]' ORDER BY `nama_akun` ASC ");
                    ?>
                    <?php while ($data3 = mysqli_fetch_array($query3)) { ?>
                    <li class="name-account"><span class="text-muted personAkun">Akun <?= $data3["kategori"] ?> :</span>
                        <?= ucwords($data3["nama_akun"]) ?>
                    </li>
                    <?php } ?>
                </ul>
            </div>
            <!--//app-doc-meta-->
        </div>
        <!--//app-card-body-->

        <div class="row g-4">
            <?php
                $bulan     = date("Y-m-d");
                $bln       = substr($bulan, 5,-3);
                $qIncomeBulanan = mysqli_query($conn, "SELECT pemegang, SUM(jumlah_tf) AS total_tf FROM input_income_media WHERE pemegang = '$data_Ains[nama]' AND MONTH(tanggal_tf) = '$bln' AND status = 'OK' GROUP BY pemegang ");

                $qIncome = mysqli_query($conn, "SELECT pemegang, SUM(jumlah_tf) AS total_tf FROM input_income_media WHERE pemegang = '$data_Ains[nama]' AND status = 'OK' GROUP BY pemegang "); 
            ?>


            <div class="col-6">
                <div class="app-card h-100">
                    <div class="app-card-body p-3">
                        <h4 class="app-doc-title mb-0 personIncomeMonth">
                            <?php
                                $no = 1;
                                while ($data = mysqli_fetch_array($qIncomeBulanan)) { 
                            ?>
                            <a class="text-primary"><?= number_format($data["total_tf"],0,"." , ".") ?></a> <br>
                            <span>Bulan Ini</span>
                            <?php } ?>
                        </h4>
                    </div>
                    <!--//app-card-body-->
                </div>
            </div>
            <!--//app-card-->


            <div class="col-6">
                <div class="app-card h-100">
                    <div class="app-card-body p-3">
                        <h4 class="app-doc-title mb-0 personIncomeYear">
                            <?php
                            $no = 1;
                                while ($data = mysqli_fetch_array($qIncome)) { 
                            ?>
                            <a class="text-primary"><?= number_format($data["total_tf"],0,"." , ".") ?></a> <br>
                            <span>Tahun Ini</span>
                            <?php } ?>
                        </h4>
                    </div>
                    <!--//app-card-body-->
                </div>
                <!--//app-card-->
            </div>
            <!--//col-->
        </div>
    </div>
    <!--//app-card-->
</div>
<!--//col-->
<?php } ?>
<script src="assets/js/pengurus.js?v=<?= filemtime('./../assets/js/pengurus.js'); ?>"></script>