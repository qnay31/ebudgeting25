<?php
// error_reporting(0);
session_start();

include './../../../function.php';
$qIncome = mysqli_query($connYear, "SELECT nama_akun, SUM(jumlah_tf) AS total_tf FROM income_media WHERE pemegang = '$dataLog[nama]' AND status = 'OK' GROUP BY nama_akun ORDER BY nama_akun ASC "); 
?>
<div class="row g-3 mb-2">

    <?php 
$i = 1;
while ($data = $qIncome->fetch_assoc()) {
    $nums = $qIncome->num_rows; ?>
    <?php if ($nums === 1) { ?>
    <div class="col-xs-12 col-md-12 col-lg-12">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1"><?= $data["nama_akun"]; ?></h4>
                <div class="stats-figure incomeMedia"><?= number_format($data["total_tf"],0,".", "."); ?></div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <?php } else if($nums === 2) { ?>
    <div class="col-xs-12 col-md-6 col-lg-6">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1"><?= $data["nama_akun"]; ?></h4>
                <div class="stats-figure incomeMedia"><?= number_format($data["total_tf"],0,".", "."); ?></div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->
    <?php } else if($nums === 3) { ?>
    <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1"><?= $data["nama_akun"]; ?></h4>
                <div class="stats-figure incomeMedia"><?= number_format($data["total_tf"],0,".", "."); ?></div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <?php } else { ?>
    <div class="col-xs-12 col-md-3 col-lg-3">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1"><?= $data["nama_akun"]; ?></h4>
                <div class="stats-figure incomeMedia"><?= number_format($data["total_tf"],0,".", "."); ?></div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->
    <?php } ?>
    <?php } ?>
</div>