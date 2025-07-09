<?php
// error_reporting(0);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Register - Ebudgeting Yayasan Alkirom Amanah </title>

    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="Register - Ebudgeting Yayasan Alkirom Amanah<">
    <meta name="author" content="Yayasan Alkirom Amanah">
    <link rel="shortcut icon" href="./assets/images/logo_favicon.png" type="image/x-icon">

    <!-- FontAwesome JS-->
    <script defer src="assets/plugins/fontawesome/js/all.min.js"></script>
    <link rel="stylesheet" href="./assets/css/sweetalert2.min.css">

    <!-- App CSS -->
    <link id="theme-style" rel="stylesheet" href="assets/css/portal.css">

</head>

<body class="app app-signup p-0">
    <div class="row g-0 app-auth-wrapper">
        <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
            <div class="d-flex flex-column align-content-end">
                <div class="app-auth-body mx-auto">
                    <div class="app-auth-branding mb-4"><a class="app-logo" href="#"><img class="logo-icon me-2"
                                src="assets/images/logo_favicon.png" alt="logo"></a></div>
                    <h2 class="auth-heading text-center mb-4">Daftar Akun Ebudgeting</h2>

                    <div class="auth-form-container text-start mx-auto">
                        <form class="auth-form auth-signup-form signup-form">
                            <div class="email mb-2">
                                <label class="sr-only" for="signup-name">Nama Lengkap</label>
                                <input id="signup-name" name="fullName" type="text" class="form-control signup-name"
                                    placeholder="Nama Lengkap" autocomplete="off">
                                <p class="alertNamaLengkap text-danger"></p>
                            </div>
                            <div class="email mb-2">
                                <label class="sr-only" for="username">username</label>
                                <input id="username" name="username" type="text" class="form-control signup-name"
                                    placeholder="Username" maxlength='32' autocomplete="off">
                                <p class="alertUsername text-danger"></p>
                            </div>
                            <div class="email mb-2">
                                <input type="text" name="posisi" class="form-control signup-name"
                                    value="Admin Media Sosial" readonly>
                                <input type="hidden" name="idPosisi" value="sosial_media">

                            </div>
                            <div class="password mb-2">
                                <span toggle="#password-field" class="show-password toggle-password"><span
                                        class="showMe">Tampilkan</span>
                                    Password</span>
                                <label class="sr-only" for="password-field">Password</label>
                                <input name="password" type="password" class="form-control signup-password"
                                    id="password-field" placeholder="Password" maxlength='32' autocomplete="off">
                                <p class="alertPassword text-danger"></p>
                            </div>
                            <div class="password mb-2">
                                <span toggle="#password-field2" class="show-password toggle-password"><span
                                        class="showMe2">Tampilkan</span>
                                    Password</span>
                                <label class="sr-only" for="password-field2">Password</label>
                                <input id="password-field2" name="confirmPassword" type="password"
                                    class="form-control signup-password" placeholder="Konfirmasi Password"
                                    maxlength='32' autocomplete="off">
                                <p class="alertConfirmPassword text-danger"></p>
                            </div>

                            <div class="text-center btn-submit">
                                <button type="submit"
                                    class="btn app-btn-primary w-100 theme-btn mx-auto">Daftar</button>
                            </div>
                        </form>
                        <!--//auth-form-->

                        <div class="auth-option text-center pt-5">Sudah Punya Akun? <a class="text-link"
                                href="./">Login</a></div>
                    </div>
                    <!--//auth-form-container-->



                </div>
                <!--//auth-body-->

                <?php include './components/log_footer.php'; ?>
                <!--//app-auth-footer-->
            </div>
            <!--//flex-column-->
        </div>
        <!--//auth-main-col-->
        <div class="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
            <div class="auth-background-holder">
            </div>
            <div class="auth-background-mask"></div>
            <!--//auth-background-overlay-->
        </div>
        <!--//auth-background-col-->

    </div>
    <!--//row-->

    <!-- scripts -->
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="./assets/js/sweetalert2.min.js"></script>
    <script src="./assets/js/login.js"></script>

</body>

</html>