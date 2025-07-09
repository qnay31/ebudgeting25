<?php

    session_start();
    error_reporting(0);
    require 'function.php';

    if (!isset($_SESSION["halaman_utama"])) {
        header("Location: ./");
        exit;
    }

    $qPengurus = mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE id = '$dataLog[id]'");
    $dPengurus = $qPengurus->fetch_assoc();

    $nama       = $dPengurus["nama"];
    $username   = $dPengurus["username"];
    $profil     = $dPengurus["profil"];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Ebudgeting - Sistem Informasi Dan Keuangan Yayasan</title>

    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="Portal - Bootstrap 5 Admin Dashboard Template For Developers">
    <meta name="author" content="Xiaoying Riley at 3rd Wave Media">
    <link rel="shortcut icon" href="./assets/images/logo_favicon.png" type="image/x-icon">

    <!-- Bootstrap Icon -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">

    <!-- FontAwesome JS-->
    <script defer src="assets/plugins/fontawesome/js/all.min.js"></script>

    <?php if ($_COOKIE['id_pengurus'] == "manager_instagram" || $_COOKIE['id_pengurus'] == "manager_facebook") { ?>
    <?php } else { ?>
    <!-- owl corousel -->
    <link rel="stylesheet" href="./owlcarousel/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="./owlcarousel/assets/owl.theme.default.min.css">
    <?php } ?>

    <!-- croppie -->
    <link rel="stylesheet" href="https://unpkg.com/cropperjs@1.5.13/dist/cropper.min.css" />

    <!-- Sweetalert CSS -->
    <link rel="stylesheet" href="./assets/css/sweetalert2.min.css">

    <!-- DataTables CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.1/css/dataTables.bootstrap5.min.css">

    <?php if (
        $_COOKIE['id_pengurus'] == "sosial_media" || 
        $_COOKIE['id_pengurus'] == "kepala_income" ||
        $_COOKIE["id_pengurus"] == "ketua_yayasan" ||
        $_COOKIE['id_pengurus'] == "manager_instagram" ||
        $_COOKIE['id_pengurus'] == "manager_facebook") { ?>
    <!-- rowGroup -->
    <link href="https://cdn.datatables.net/rowgroup/1.0.2/css/rowGroup.dataTables.min.css" rel="stylesheet"
        type="text/css" />

    <?php } ?>

    <!-- searchPane -->
    <link rel="stylesheet" href="https://cdn.datatables.net/searchpanes/2.1.0/css/searchPanes.bootstrap5.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/select/1.5.0/css/select.bootstrap5.min.css">

    <!-- data tables export -->
    <link rel="stylesheet" type="text/css"
        href="https://cdn.datatables.net/buttons/2.1.0/css/buttons.bootstrap5.min.css" />

    <!-- App CSS -->
    <link id="theme-style" rel="stylesheet" href="assets/css/portal.css?v=<?= filemtime('assets/css/portal.css'); ?>">
</head>

<body class="app">
    <header class="app-header fixed-top">
        <?php include './components/header.php'; ?>
        <?php include './components/sidebar.php'; ?>
    </header>
    <!--//app-header-->
    <div class="app-wrapper">
        <button onclick="topFunction()" id="myBtn" title="Go to top"><i class="bi bi-arrow-up"></i></button>
        <div class="app-content pt-3 p-md-3 p-lg-4">
            <?php include './pages/homeContent.php'; ?>
        </div>
        <!--//app-content-->
        <?php include './components/footer.php'; ?>
    </div>
    <!--//app-wrapper-->

    <!-- Javascript -->
    <script src="assets/plugins/popper.min.js"></script>
    <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>

    <?php if ($_COOKIE['id_pengurus'] == "sosial_media") { ?>
    <!-- canvas images -->
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    <?php } ?>

    <!-- Jquery JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="./assets/js/jquery.mask.js"></script>

    <!-- croppie -->
    <script src="https://unpkg.com/cropperjs@1.5.13/dist/cropper.min.js"></script>

    <?php if ($_COOKIE['id_pengurus'] == "manager_instagram" || $_COOKIE['id_pengurus'] == "manager_facebook") { ?>
    <?php } else { ?>
    <!-- owl corousel -->
    <script src="./owlcarousel/owl.carousel.js"></script>
    <?php } ?>

    <!-- Sweetalert JS -->
    <script src="./assets/js/sweetalert2.min.js"></script>

    <!-- DataTables JS -->
    <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.12.1/js/dataTables.bootstrap5.min.js"></script>

    <?php if (
        $_COOKIE['id_pengurus'] == "sosial_media" || 
        $_COOKIE['id_pengurus'] == "kepala_income" ||
        $_COOKIE['id_pengurus'] == "ketua_yayasan" ||
        $_COOKIE['id_pengurus'] == "manager_instagram" ||
        $_COOKIE['id_pengurus'] == "manager_facebook"
    ) { ?>
    <!-- rowGroup -->
    <script src="https://cdn.datatables.net/rowgroup/1.0.2/js/dataTables.rowGroup.min.js"></script>
    <?php } ?>

    <!-- searchPane -->
    <script type="text/javascript" src="https://cdn.datatables.net/searchpanes/2.1.0/js/dataTables.searchPanes.min.js">
    </script>
    <script type="text/javascript" src="https://cdn.datatables.net/searchpanes/2.1.0/js/searchPanes.bootstrap5.min.js">
    </script>
    <script type="text/javascript" src="https://cdn.datatables.net/select/1.5.0/js/dataTables.select.min.js"></script>

    <!-- file export -->
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.1.0/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.1.0/js/buttons.bootstrap5.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.1.0/js/buttons.html5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>

    <?php if ($_COOKIE['id_pengurus'] == "admin_web") { ?>
    <script src="./assets/js/admin.js?v=<?= filemtime('./assets/js/admin.js'); ?>"></script>
    <script src="./assets/js/adminTable.js?v=<?= filemtime('./assets/js/adminTable.js'); ?>"></script>
    <?php } else { ?>
    <!-- Charts JS -->
    <script src="assets/plugins/chart.js/chart.min.js"></script>
    <script src="assets/js/charts.js?v=<?= filemtime('./assets/js/charts.js'); ?>"></script>
    <?php } ?>

    <!-- Page Specific JS -->
    <script src="assets/js/app.js?v=<?= filemtime('./assets/js/app.js'); ?>"></script>
    <script src="./assets/js/uploadImage.js?v=<?= filemtime('./assets/js/uploadImage.js'); ?>"></script>
    <script src="./assets/js/switchPage.js?v=<?= filemtime('./assets/js/switchPage.js'); ?>"></script>
    <?php if ($_COOKIE['id_pengurus'] == "kepala_pengajuan") { ?>
    <script src="./assets/js/listSelect.js?v=<?= filemtime('./assets/js/listSelect.js'); ?>"></script>
    <?php } ?>

    <?php if ($_COOKIE['id_pengurus'] == "sosial_media" || $_COOKIE['id_pengurus'] == "kepala_income") { ?>
    <script src="./assets/js/inputMedia.js?v=<?= filemtime('./assets/js/inputMedia.js'); ?>"></script>
    <?php } ?>

    <?php if ($_COOKIE['id_pengurus'] == "kepala_pengajuan") { ?>
    <script src="./assets/js/submitButton.js?v=<?= filemtime('./assets/js/submitButton.js'); ?>"></script>
    <?php } ?>

    <?php if (
        $_COOKIE['id_pengurus'] == "kepala_pengajuan") { ?>
    <script src="./assets/js/tables.js?v=<?= filemtime('./assets/js/tables.js'); ?>"></script>

    <?php } ?>

    <?php if (
        $_COOKIE['id_pengurus'] == "management_keuangan" ||
        $_COOKIE['id_pengurus'] == "kepala_pengajuan" ||
        $_COOKIE['id_pengurus'] == "ketua_yayasan" ||
        $_COOKIE['id_pengurus'] == "kepala_income" ||
        $_COOKIE['id_pengurus'] == "manager_facebook" || 
        $_COOKIE['id_pengurus'] == "manager_instagram"
        ) { ?>
    <script src="./assets/js/dataTable_laporan.js?v=<?= filemtime('./assets/js/dataTable_laporan.js'); ?>"></script>
    <?php } ?>
    <?php if ($_COOKIE['id_pengurus'] == "sosial_media") { ?>
    <script src="./assets/js/dataTable_laporanIncome.js?v=<?= filemtime('./assets/js/dataTable_laporanIncome.js'); ?>">
    </script>
    <?php } ?>

    <?php if (
        $_COOKIE['id_pengurus'] == "ketua_yayasan" ||
        $_COOKIE['id_pengurus'] == "admin_web"
    ) { ?>
    <script src="./assets/js/table_log.js"></script>
    <?php } ?>

    <?php if ($_COOKIE['id_pengurus'] == "management_keuangan") { ?>
    <script src="./assets/js/notif.js?v=<?= filemtime('./assets/js/notif.js'); ?>"></script>
    <?php } ?>

    <?php if ($_COOKIE['id_pengurus'] == "admin_web") { ?>
    <?php } else { ?>
    <script src="./assets/js/pageDashboard.js?v=<?= filemtime('./assets/js/pageDashboard.js'); ?>"></script>
    <script src="./assets/js/data.js?v=<?= filemtime('./assets/js/data.js'); ?>"></script>
    <?php } ?>
</body>

</html>