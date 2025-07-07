<?php
include '../function.php';
$getID = $_GET["key"];

$detail_query   = mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE id = '$getID'");
$data_query     = $detail_query->fetch_assoc();
$data_nama      = $data_query["nama"];
$data_posisi    = $data_query["posisi"];
$data_profil    = $data_query["profil"];

$detail_query_akun  = mysqli_query($conn, "SELECT * FROM data_akun WHERE pemegang = '$data_nama' ORDER BY `nama_akun` ASC ");
$number = 1;

$q_data_Income = mysqli_query($conn, "SELECT nama_akun, SUM(jumlah_tf) AS total_tf FROM input_income_media WHERE pemegang = '$data_nama' AND status = 'OK' GROUP BY nama_akun ORDER BY nama_akun ASC "); 
$bulan     = date("Y-m-d");
$bln       = substr($bulan, 5, 2);
$oldBln    = $bln - 1;
$tglKemarin= date('Y-m-d', strtotime("-1 day", strtotime($bulan)));
$i = 1;
// kamarin
$qKemarin  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE nomor_id = '$getID' AND tanggal_tf = '$tglKemarin' AND status = 'OK' ");
while($dIncomeKemarin = mysqli_fetch_array($qKemarin))
{
    $i++;   
    $total_IncomeKemarin[$i] = $dIncomeKemarin['jumlah_tf'];
    $hasil_IncomeKemarin = array_sum($total_IncomeKemarin);
}

// hari ini
$qHariIni  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE nomor_id = '$getID' AND tanggal_tf = '$bulan' AND status = 'OK' ");
while($dIncomeHariIni = mysqli_fetch_array($qHariIni))
{
    $i++;   
    $total_IncomeHariIni[$i] = $dIncomeHariIni['jumlah_tf'];
    $hasil_IncomeHariIni = array_sum($total_IncomeHariIni);
}

// Bulan lalu
$qLampau  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE nomor_id = '$getID' AND MONTH(tanggal_tf) = '$oldBln' AND status = 'OK' ");
while($dIncomeLalu = mysqli_fetch_array($qLampau))
{
    $i++;   
    $total_IncomeLalu[$i] = $dIncomeLalu['jumlah_tf'];
    $hasil_IncomeLalu = array_sum($total_IncomeLalu);
}

// Bulan Ini
$qToday  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE nomor_id = '$getID' AND MONTH(tanggal_tf) = '$bln' AND status = 'OK' ");
while($dIncomeBulanan = mysqli_fetch_array($qToday))
{
    $i++;   
    $total_IncomeBulanIni[$i] = $dIncomeBulanan['jumlah_tf'];
    $hasil_IncomeBulanIni = array_sum($total_IncomeBulanIni);
}

// tahun 
$qTahun  = mysqli_query($conn, "SELECT * FROM input_income_media WHERE nomor_id = '$getID' AND status = 'OK' ");
while($dIncomeTahunan = mysqli_fetch_array($qTahun))
{
    $i++;   
    $total_IncomeTahunan[$i] = $dIncomeTahunan['jumlah_tf'];
    $hasil_IncomeTahunan = array_sum($total_IncomeTahunan);
}

$qIncome = mysqli_query($conn, "SELECT nama_akun, SUM(jumlah_tf) AS total_tf FROM input_income_media WHERE pemegang = '$data_nama' AND status = 'OK' GROUP BY nama_akun ORDER BY nama_akun ASC "); 

?>
<div class="row justify-content-center mt-4">
    <div class="col-12 col-lg-6">
        <div class="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
            <div class="app-card-header p-3 border-bottom-0">
                <div class="row align-items-center gx-3">
                    <div class="col-auto">
                        <div class="app-icon-holder">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
                        </div>
                        <!--//icon-holder-->

                    </div>
                    <!--//col-->
                    <div class="col-auto">
                        <h4 class="app-card-title">Profile</h4>
                    </div>
                    <!--//col-->
                </div>
                <!--//row-->
            </div>
            <!--//app-card-header-->
            <div class="app-card-body px-4 w-100">
                <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-12">
                            <div class="item-data account-image">
                                <img src="./assets/images/profiles/<?= $data_profil; ?>"
                                    class="profile-image rounded-circle" data-toggle="popover"
                                    data-image="<?= $data_profil; ?>" />
                            </div>

                        </div>
                        <!--//col-->
                    </div>
                    <!--//row-->
                </div>
                <!--//item-->
                <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-auto">
                            <div class="item-label"><strong>Nama</strong></div>
                            <div class="item-data"><?= ucwords($data_nama); ?></div>
                        </div>
                    </div>
                </div>
                <!--//item-->
                <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-auto">
                            <div class="item-label"><strong>Posisi</strong></div>
                            <div class="item-data">
                                <?= $data_posisi; ?>
                            </div>
                        </div>
                        <!--//col-->
                    </div>
                    <!--//row-->
                </div>
                <!--//item-->
                <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-auto">
                            <div class="item-label"><strong>Yayasan</strong></div>
                            <div class="item-data">
                                Yayasan Alkirom Amanah
                            </div>
                        </div>
                        <!--//col-->
                    </div>
                    <!--//row-->
                </div>
                <!--//item-->

                <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center list-account-detail">
                        <div class="col-auto">
                            <div class="item-label"><strong>Daftar Akun</strong></div>

                            <?php while ($dAkun = $detail_query_akun->fetch_array()) { ?>
                            <div class="item-data">
                                <?= $number++; ?>. <?= $dAkun["nama_akun"]; ?> - <?= $dAkun["kategori"]; ?> - Team
                                <?= $dAkun["team"] == "I" ? "FB Uang Saku I" : 
                                    ($dAkun["team"] == "II" ? "FB Uang Saku II" : 
                                    ($dAkun["team"] == "III" ? "IG Uang Saku I" : 
                                    ($dAkun["team"] == "IV" ? "IG Uang Saku II" : 
                                    ($dAkun["team"] == "V" ? "FB Sembako" : 
                                    ($dAkun["team"] == "VI" ? "IG Sembako" : 
                                    ($dAkun["team"] == "VII" ? "FB Pembangunan" : 
                                    ($dAkun["team"] == "VIII" ? "IG Pembangunan" : 
                                    ($dAkun["team"] == "IX" ? "FB Kesehatan" : "Tidak Ada Team")))))))) ?>
                            </div>
                            <?php } ?>
                        </div>
                        <!--//col-->
                    </div>
                    <!--//row-->
                </div>
                <!--//item-->
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <div class="col-12 col-lg-6">
        <div class="col-lg-12 mb-2">
            <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                    <h4 class="stats-type mb-1">Total Income</h4>
                    <div class="stats-figure"><?= number_format($hasil_IncomeKemarin, 0, ".", "."); ?></div>
                    <div class="stats-meta text-success">
                        Income/Kemarin
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-lg-12 mb-2">
            <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                    <h4 class="stats-type mb-1">Total Income</h4>
                    <div class="stats-figure"><?= number_format($hasil_IncomeHariIni, 0, ".", "."); ?></div>
                    <div class="stats-meta text-success">
                        Income/Hari Ini
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-lg-12 mb-2">
            <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                    <h4 class="stats-type mb-1">Total Income</h4>
                    <div class="stats-figure"><?= number_format($hasil_IncomeLalu, 0, ".", "."); ?></div>
                    <div class="stats-meta text-success">
                        Income/Bulan Lalu
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-lg-12 mb-2">
            <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                    <h4 class="stats-type mb-1">Total Income</h4>
                    <div class="stats-figure"><?= number_format($hasil_IncomeBulanIni, 0, ".", "."); ?></div>
                    <div class="stats-meta text-success">
                        Income/Bulan Ini
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
        <div class="col-lg-12 mb-2">
            <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                    <h4 class="stats-type mb-1">Total Income</h4>
                    <div class="stats-figure"><?= number_format($hasil_IncomeTahunan, 0, ".", "."); ?></div>
                    <div class="stats-meta text-success">
                        Income/Tahun Ini
                    </div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
    </div>

    <span class="list-periode-account-detail">
        <div class="col-xs-12 my-3">
            <!-- Default dropend button -->
            <div class="btn-group dropend">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Periode <span class="title-dropdown"></span>
                </button>
                <ul class="dropdown-menu dropdown-menu-periode">
                    <li><a class="dropdown-item" href="#Global" id="00">Global</a></li>
                    <li><a class="dropdown-item" href="#Januari" id="01">Januari</a></li>
                    <li><a class="dropdown-item" href="#Februari" id="02">Februari</a></li>
                    <li><a class="dropdown-item" href="#Maret" id="03">Maret</a></li>
                    <li><a class="dropdown-item" href="#April" id="04">April</a></li>
                    <li><a class="dropdown-item" href="#Mei" id="05">Mei</a></li>
                    <li><a class="dropdown-item" href="#Juni" id="06">Juni</a></li>
                    <li><a class="dropdown-item" href="#Juli" id="07">Juli</a></li>
                    <li><a class="dropdown-item" href="#Agustus" id="08">Agustus</a></li>
                    <li><a class="dropdown-item" href="#September" id="09">September</a></li>
                    <li><a class="dropdown-item" href="#Oktober" id="10">Oktober</a></li>
                    <li><a class="dropdown-item" href="#November" id="11">November</a></li>
                    <li><a class="dropdown-item" href="#Desember" id="12">Desember</a></li>
                </ul>
            </div>
        </div>
        <div class="col-xs-12">
            <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                    <div class="stats-figure title-data-pemasukan">Periode Global</div>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
    </span>
    <?php 
    $i = 1;
    while ($data = $qIncome->fetch_assoc()) {
    $nums = $qIncome->num_rows; ?>
    <?php if ($nums === 1) { ?>
    <div class="col-xs-12 col-md-12 col-lg-12 my-2">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1"><?= $data["nama_akun"]; ?></h4>
                <div class="stats-figure incomeMedia"><?= number_format($data["total_tf"],0,".", "."); ?></div>
                <div class="stats-meta text-success">
                    Income/Bulan Ini
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <?php } else if($nums === 2) { ?>
    <div class="col-xs-12 col-md-6 col-lg-6 my-2">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1"><?= $data["nama_akun"]; ?></h4>
                <div class="stats-figure incomeMedia"><?= number_format($data["total_tf"],0,".", "."); ?></div>
                <div class="stats-meta text-success">
                    Income/Bulan Ini
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->
    <?php } else if($nums === 3) { ?>
    <div class="col-xs-12 col-md-4 col-lg-4 my-2">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1"><?= $data["nama_akun"]; ?></h4>
                <div class="stats-figure incomeMedia"><?= number_format($data["total_tf"],0,".", "."); ?></div>
                <div class="stats-meta text-success">
                    Income/Bulan Ini
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->

    <?php } else { ?>
    <div class="col-xs-12 col-md-3 col-lg-3 my-2">
        <div class="app-card app-card-stat shadow-sm h-100">
            <div class="app-card-body p-3 p-lg-4">
                <h4 class="stats-type mb-1"><?= $data["nama_akun"]; ?></h4>
                <div class="stats-figure incomeMedia"><?= number_format($data["total_tf"],0,".", "."); ?></div>
                <div class="stats-meta text-success">
                    Income/Bulan Ini
                </div>
            </div>
            <!--//app-card-body-->
        </div>
        <!--//app-card-->
    </div>
    <!--//col-->
    <?php } ?>
    <?php } ?>

    <div class="row">
        <?php if ($_COOKIE["id_pengurus"] == "kepala_income") { ?>
        <div class="col-xs-12 col-md-12 col-lg-12 select-data-account my-2">
            <div class="app-card app-card-stat shadow-sm h-100" id="laporanIncome"
                data-name="<?= $data_query["id"]; ?>">
                <div class="app-card-body p-3 p-lg-4">
                    <h4 class="stats-type mb-1">Laporan Income</h4>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <?php } else { ?>
        <div class="col-xs-6 col-md-6 col-lg-6 select-data-account my-2">
            <div class="app-card app-card-stat shadow-sm h-100" id="laporanIncome"
                data-name="<?= $data_query["id"]; ?>">
                <div class="app-card-body p-3 p-lg-4">
                    <h4 class="stats-type mb-1">Laporan Income</h4>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->

        <div class="col-xs-6 col-md-6 col-lg-6 select-data-account my-2">
            <div class="app-card app-card-stat shadow-sm h-100" id="laporanAkun" data-name="<?= $data_query["id"]; ?>">
                <div class="app-card-body p-3 p-lg-4">
                    <h4 class="stats-type mb-1">Laporan Akun</h4>
                </div>
                <!--//app-card-body-->
            </div>
            <!--//app-card-->
        </div>
        <!--//col-->
        <?php } ?>
    </div>

    <div class="list-laporan-income" style="display: none">
        <div class="row">
            <div class="col-xs-6 col-md-6 col-lg-6 my-2">
                <div class="button-list-laporan-income">
                    <button class="btn btn-primary text-white w-100 active" id="bulanan">Bulan</button>
                </div>
            </div>

            <div class="col-xs-6 col-md-6 col-lg-6 my-2">
                <div class="button-list-laporan-income">
                    <button class="btn btn-primary text-white w-100" id="tahunan"
                        data-name="<?= $data_query["id"];; ?>">Tahun</button>
                </div>
            </div>
        </div>

        <div class="app-card app-card-orders-table mb-5 py-2">
            <div class="app-card app-card-body title-pemasukan">
                <h5 class="text-center mt-3 mb-2">Laporan Income <span class="title-table">Bulan</span> Ini</h5>

                <!-- table laporan income bulan -->
                <div class="laporanIncomeDetail">
                    <div class="table table-responsive">
                        <table class="table table-striped table-bordered nowrap" id="incomeBulan">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                            <thead>
                                <tr style="text-align: center;">
                                    <th scope="col">No</th>
                                    <th scope="col">Akun</th>
                                    <th scope="col">Pemegang</th>
                                    <th scope="col">Nama Akun</th>
                                    <th scope="col">Nama Donatur</th>
                                    <th scope="col">Tanggal Transfer</th>
                                    <th scope="col">Periode</th>
                                    <th scope="col">Bank</th>
                                    <th scope="col">Income</th>
                                    <th scope="col">Team</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- server side -->
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colspan="8" style="text-align: center;">Total</th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                <!-- table laporan income tahun -->
                <div class="laporanIncomeDetailTahun">
                    <div class="table table-responsive display-content">
                        <table class="table table-striped table-bordered nowrap" id="incomeTahun">
                            <span class="btn reload"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                            <thead>
                                <tr style="text-align: center;">
                                    <th scope="col">No</th>
                                    <th scope="col">Akun</th>
                                    <th scope="col">Pemegang</th>
                                    <th scope="col">Nama Akun</th>
                                    <th scope="col">Nama Donatur</th>
                                    <th scope="col">Tanggal Transfer</th>
                                    <th scope="col">Periode</th>
                                    <th scope="col">Bank</th>
                                    <th scope="col">Income</th>
                                    <th scope="col">Team</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- server side -->
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colspan="8" style="text-align: center;">Total</th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="list-laporan-akun" style="display: none">
        <div class="row">
            <div class="col-xs-6 col-md-6 col-lg-6 my-2">
                <div class="button-list-laporan-akun">
                    <button class="btn btn-primary text-white w-100 active" id="bulanan">Bulan</button>
                </div>
            </div>

            <div class="col-xs-6 col-md-6 col-lg-6 my-2">
                <div class="button-list-laporan-akun">
                    <button class="btn btn-primary text-white w-100" id="tahunan"
                        data-name="<?= $data_query["id"];; ?>">Tahun</button>
                </div>
            </div>
        </div>

        <div class="app-card app-card-orders-table mb-5 py-2">
            <div class="app-card app-card-body title-laporan">
                <h5 class="text-center mt-3 mb-2">Laporan Akun <span class="title-table">Bulan</span> Ini</h5>

                <!-- table laporan income bulan -->
                <div class="laporanAkunDetail">
                    <div class="table table-responsive">
                        <div class="list-media-akun mr-2">
                            <div class="btn btn-primary facebook active" id="mediaFacebook">Facebook</div>
                            <div class="btn btn-primary instagram" id="mediaInstagram"
                                data-name="<?= $data_query["id"];; ?>">Instagram</div>
                        </div>
                        <div class="table-facebook">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered nowrap" id="lapTableAkunFacebookBulan">
                                    <span class="btn reload"><i
                                            class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Pemegang</th>
                                            <th scope="col">Akun</th>
                                            <th scope="col">Tanggal Laporan</th>
                                            <th scope="col">Periode</th>
                                            <th scope="col">Teman</th>
                                            <th scope="col">Add Teman</th>
                                            <th scope="col">Teman Baru</th>
                                            <th scope="col">Hapus Teman</th>
                                            <th scope="col">Serangan</th>
                                            <th scope="col">Respon</th>
                                            <th scope="col">Tdk Respon</th>
                                            <th scope="col">Donatur</th>
                                            <th scope="col">Income</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- server side -->
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colspan="6" style="text-align: center;">Total</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                        <div class="table-instagram">
                            <div class="table-responsive display-content">
                                <table class="table table-striped table-bordered nowrap"
                                    id="lapTableAkunInstagramBulan">
                                    <span class="btn reload"><i
                                            class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Pemegang</th>
                                            <th scope="col">Akun</th>
                                            <th scope="col">Tanggal Laporan</th>
                                            <th scope="col">Periode</th>
                                            <th scope="col">Pengikut</th>
                                            <th scope="col">Mengikuti</th>
                                            <th scope="col">Pengikut Baru</th>
                                            <th scope="col">Mengikuti Baru</th>
                                            <th scope="col">Hapus Pengikut</th>
                                            <th scope="col">Hapus Mengikuti</th>
                                            <th scope="col">Serangan</th>
                                            <th scope="col">Respon</th>
                                            <th scope="col">Tdk Respon</th>
                                            <th scope="col">Donatur</th>
                                            <th scope="col">Income</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- server side -->
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colspan="7" style="text-align: center;">Total</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- table laporan income tahun -->
                <div class="laporanAkunDetailTahun">
                    <div class="table table-responsive display-content">
                        <div class="list-media-akun mr-2">
                            <div class="btn btn-primary facebook active" id="mediaFacebook">Facebook</div>
                            <div class="btn btn-primary instagram" id="mediaInstagram"
                                data-name="<?= $data_query["id"];; ?>">Instagram</div>
                        </div>
                        <div class="table-facebook">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered nowrap" id="lapTableAkunFacebookTahun">
                                    <span class="btn reload"><i
                                            class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Pemegang</th>
                                            <th scope="col">Akun</th>
                                            <th scope="col">Tanggal Laporan</th>
                                            <th scope="col">Periode</th>
                                            <th scope="col">Teman</th>
                                            <th scope="col">Add Teman</th>
                                            <th scope="col">Teman Baru</th>
                                            <th scope="col">Hapus Teman</th>
                                            <th scope="col">Serangan</th>
                                            <th scope="col">Respon</th>
                                            <th scope="col">Tdk Respon</th>
                                            <th scope="col">Donatur</th>
                                            <th scope="col">Income</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- server side -->
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colspan="6" style="text-align: center;">Total</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                        <div class="table-instagram">
                            <div class="table-responsive display-content">
                                <table class="table table-striped table-bordered nowrap"
                                    id="lapTableAkunInstagramTahun">
                                    <span class="btn reload"><i
                                            class="bi bi-arrow-counterclockwise"></i>&nbsp;Refresh</span>
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Pemegang</th>
                                            <th scope="col">Akun</th>
                                            <th scope="col">Tanggal Laporan</th>
                                            <th scope="col">Periode</th>
                                            <th scope="col">Pengikut</th>
                                            <th scope="col">Mengikuti</th>
                                            <th scope="col">Pengikut Baru</th>
                                            <th scope="col">Mengikuti Baru</th>
                                            <th scope="col">Hapus Pengikut</th>
                                            <th scope="col">Hapus Mengikuti</th>
                                            <th scope="col">Serangan</th>
                                            <th scope="col">Respon</th>
                                            <th scope="col">Tdk Respon</th>
                                            <th scope="col">Donatur</th>
                                            <th scope="col">Income</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- server side -->
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colspan="7" style="text-align: center;">Total</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
<!--//row-->
<script src="assets/js/pengurusDetail.js?v=<?= filemtime('./../assets/js/pengurusDetail.js'); ?>"></script>