<div class="loader-wrapper">
    <div class="loader">
    </div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
</div>

<div class="homeContent">
    <div class="container-xl">

        <h1 class="app-page-title">Dashboard</h1>

        <div class="app-card alert alert-dismissible shadow-sm mb-4 border-left-decoration" role="alert">
            <div class="inner">
                <div class="app-card-body p-3 p-lg-4">
                    <h3 class="mb-3">
                        <span id="salam"></span> <span class="nama-dashboard"><?= ucwords($nama) ?></span>! <span class="ucapan"></span>
                    </h3>
                    <div class="row gx-5 gy-3">
                        <div class="col-12 col-lg-9">

                            <div style="text-transform: capitalize">Sistem ebudgeting yang berisikan sebuah informasi
                                dalam perkembangan pekerjaan sehari -
                                hari

                            </div>
                        </div>
                        <!--//col-->
                    </div>
                    <!--//row-->
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <!--//app-card-body-->

            </div>
            <!--//inner-->
        </div>
        <!--//app-card-->

        <?php include './pages/sub_pages/home_cardDashboard.php'; ?>

        <?php if ($_COOKIE['id_pengurus'] == "admin_web") { ?>
        <?php include './pages/sub_pages/home_pageAdmin.php'; ?>

        <?php } ?>
        <!--//row-->

        <?php if (
            $_COOKIE["id_pengurus"] == "manager_instagram" ||
            $_COOKIE["id_pengurus"] == "sosial_media" ||
            $_COOKIE["id_pengurus"] == "admin_web" ||
            $_COOKIE["id_pengurus"] == "kepala_income" ||
            $_COOKIE["id_pengurus"] == "manager_facebook") { ?>
        <?php } else { ?>
        <?php include './pages/sub_pages/home_listDashboard.php'; ?>
        <!--//row-->
        <?php } ?>

        <?php if (
            $_COOKIE["id_pengurus"] == "management_keuangan" ||
            $_COOKIE["id_pengurus"] == "ketua_yayasan"
        ) { ?>
        <?php include './pages/sub_pages/home_incomeDashboard.php'; ?>
        <!--//row-->
        <?php } ?>

        <?php if (
            $_COOKIE["id_pengurus"] == "manager_instagram" ||
            $_COOKIE["id_pengurus"] == "manager_facebook") { ?>
        <?php include './pages/sub_pages/home_teamDashboard.php'; ?>
        <?php } ?>

    </div>
    <!--//container-fluid-->
</div>

<!-- <div class="docsContent">
</div> -->

<?php if ($_COOKIE['id_pengurus'] == "admin_web") { ?>
<?php } else { ?>
<div class="lapsContent">
    <div class="container-xl display-content">
        <div class="row g-3 mb-4 align-items-center justify-content-between">
            <div class="col-auto">
                <h1 class="app-page-title mb-0">Laporan</h1>
            </div>
        </div>
        <!--//row-->

        <?php include './pages/sub_pages/lap_content.php'; ?>
        <!--//laporan-content-->
    </div>
    <!--//container-fluid-->
</div>
<?php } ?>

<?php if (
    $_COOKIE["id_pengurus"] == "ketua_yayasan" ||
    $_COOKIE["id_pengurus"] == "manager_facebook" ||
    $_COOKIE["id_pengurus"] == "manager_instagram" ||
    $_COOKIE["id_pengurus"] == "kepala_income"
    ) { ?>
<div class="personContent">
    <div class="container-xl display-content">
        <div class="row g-3 mb-4 align-items-center justify-content-between">
            <div class="col-auto">
                <h1 class="app-page-title mb-2">Daftar Pengurus</h1>
                <span class="refresh-data">
                    <div class="btn btn-primary text-white">Refresh Data</div>
                </span>
            </div>
        </div>
        <!--//row-->
        <div class="row g-4 personDetail">

        </div>
        <!--//pengurus-content-->
    </div>
    <!--//container-fluid-->

</div>

<div class="detail-personContent">
    <div class="container-xl display-content">

        <h1 class="app-page-title mb-2">Detail Pengurus</h1>
        <span class="back-data">
            <div class="btn btn-primary text-white"><i class="bi bi-arrow-left"></i> Kembali</div>
        </span>

        <span class="list-detail-content">

        </span>
        <!-- list detail content pengurus -->
    </div>
    <!--//container-fluid-->

</div>
<?php } ?>

<?php if ($_COOKIE["id_pengurus"] == "management_keuangan") { ?>
<div class="notifContent">
    <div class="container-xl display-content">
        <div class="position-relative mb-3">
            <div class="row g-3 justify-content-between">
                <div class="col-auto">
                    <h1 class="app-page-title mb-0">Notifikasi Pengajuan</h1>
                </div>
            </div>
        </div>

        <?php include './pages/sub_pages/notif_content.php'; ?>
        <!--//notif content-->

    </div>
    <!--//container-fluid-->
</div>

<div class="notifLaporanContent">
    <div class="container-xl display-content">
        <div class="position-relative mb-3">
            <div class="row g-3 justify-content-between">
                <div class="col-auto">
                    <h1 class="app-page-title mb-0">Notifikasi Laporan</h1>
                </div>
            </div>
        </div>
        <?php include './pages/sub_pages/notifLap_content.php'; ?>
        <!--//container-->

        <!--//notif content-->
    </div>
    <!--//container-fluid-->
</div>

<div class="notifIncomeContent">
    <div class="container-xl display-content">
        <div class="position-relative mb-3">
            <div class="row g-3 justify-content-between">
                <div class="col-auto">
                    <h1 class="app-page-title mb-0">Notifikasi Income</h1>
                </div>
            </div>
        </div>
        <?php include './pages/sub_pages/notifIncome_content.php'; ?>
        <!--//container-->

        <!--//notif content-->
    </div>
    <!--//container-fluid-->
</div>
<?php } ?>

<div class="accountContent">
    <div class="container-xl display-content">

        <h1 class="app-page-title">Akun Saya</h1>

        <?php include './pages/sub_pages/account_content.php'; ?>
    </div>
    <!--//container-fluid-->
</div>

<?php if (
    $_COOKIE["id_pengurus"] == "sosial_media" ||
    $_COOKIE["id_pengurus"] == "kepala_pengajuan" ||
    $_COOKIE["id_pengurus"] == "kepala_income"
    ) { ?>
<div class="inputContent">
    <div class="container-xl display-content">

        <div class="row g-3 mb-4 align-items-center justify-content-between">
            <div class="col-auto">
                <h1 class="app-page-title mb-0">Input</h1>
            </div>
        </div>
        <!--//row-->


        <nav id="orders-table-tab" class="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4">
            <a class="flex-sm-fill text-sm-center nav-link active" id="orders-all-tab" data-bs-toggle="tab" href="#input" role="tab" aria-controls="orders-all"
                aria-selected="true">Input</a>
            <a class="flex-sm-fill text-sm-center nav-link verifikasi" id="orders-paid-tab" data-bs-toggle="tab" href="#verifikasi" role="tab"
                aria-controls="orders-paid" aria-selected="false">Verifikasi</a>
            <?php if ($_COOKIE["id_pengurus"] == "kepala_income") { ?>
            <a class="flex-sm-fill text-sm-center nav-link Ilaporan" id="orders-pending-tab" data-bs-toggle="tab" href="#Ilaporan" role="tab"
                aria-controls="orders-pending" aria-selected="false">Income</a>
            <a class="flex-sm-fill text-sm-center nav-link success sukses" id="orders-cancelled-tab" data-bs-toggle="tab" href="#sukses" role="tab"
                aria-controls="orders-cancelled" aria-selected="false">CrossCheck</a>
            <?php } else { ?>
            <a class="flex-sm-fill text-sm-center nav-link Ilaporan" id="orders-pending-tab" data-bs-toggle="tab" href="#Ilaporan" role="tab"
                aria-controls="orders-pending" aria-selected="false">Laporan</a>
            <a class="flex-sm-fill text-sm-center nav-link success sukses" id="orders-cancelled-tab" data-bs-toggle="tab" href="#sukses" role="tab"
                aria-controls="orders-cancelled" aria-selected="false">Sukses</a>
            <?php } ?>
        </nav>


        <div class="tab-content" id="orders-table-tab-content">
            <?php include './pages/input_content.php'; ?>
            <!--//tab-pane input-->

            <?php include './pages/verifikasi_content.php'; ?>
            <!--//tab-pane verifikasi -->

            <?php include './pages/laporan_content.php'; ?>
            <!--//tab-pane laporan -->

            <?php include './pages/sukses_content.php'; ?>
            <!--//tab-pane sukses-->
        </div>
        <!--//tab-content-->

    </div>
    <!--//container-fluid-->
</div>
<?php } ?>

<?php if ($_COOKIE['id_pengurus'] == "admin_web") { ?>
<?php } else { ?>
<div class="chartsContent">
    <div class="container-xl display-content">

        <h1 class="app-page-title">Grafik</h1>
        <?php include './pages/sub_pages/chart_content.php'; ?>
    </div>
    <!--//container-fluid-->
</div>
<?php } ?>

<div class="dataTahunContent">
    <div class="container-xl display-content">
        <div class="position-relative mb-3">
            <div class="row g-3 justify-content-between">
                <div class="col-auto">
                    <h1 class="app-page-title mb-0">Data Tahunan</h1>
                </div>
            </div>
        </div>
        <?php include './pages/sub_pages/tahunan_content.php'; ?>
        <!--//container-->

        <!--//notif content-->
    </div>
    <!--//container-fluid-->
</div>

<?php if (
    $_COOKIE['id_pengurus'] == "ketua_yayasan" ||
    $_COOKIE['id_pengurus'] == "admin_web"
) { ?>
<div class="logContent">
    <div class="container-xl display-content">

        <h1 class="app-page-title">Log Aktivitas Ebudgeting</h1>

        <?php include './pages/sub_pages/log_content.php'; ?>
    </div>
    <!--//container-fluid-->
</div>
<?php } ?>