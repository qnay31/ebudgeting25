<!DOCTYPE html>
<html lang="en">

<head>
    <title>Reset Password - Ebudgeting Yayasan Alkirom Amanah</title>

    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="Reset Password - Ebudgeting Yayasan Alkirom Amanah">
    <meta name="author" content="Yayasan Alkirom Amanah">
    <link rel="shortcut icon" href="./assets/images/logo_favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="./assets/css/sweetalert2.min.css">

    <!-- FontAwesome JS-->
    <script defer src="assets/plugins/fontawesome/js/all.min.js"></script>

    <!-- App CSS -->
    <link id="theme-style" rel="stylesheet" href="assets/css/portal.css">

</head>

<body class="app app-reset-password p-0">
    <div class="row g-0 app-auth-wrapper">
        <div class="col-12 col-md-7 col-lg-6 auth-main-col p-5">
            <div class="d-flex flex-column align-content-end">
                <div class="app-auth-body mx-auto">
                    <div class="app-auth-branding mb-4 text-center"><a class="app-logo" href="index.html"><img
                                class="logo-icon me-2" src="./assets/images/logo_favicon.png" alt="logo"></a></div>
                    <h2 class="auth-heading text-center mb-4">Lupa Password</h2>

                    <div class="auth-intro mb-4 text-center">Masukkan username dibawah ini untuk mendapatkan kata sandi
                        baru</div>

                    <div class="auth-form-container">

                        <form class="auth-form resetpass-form" action="" method="post">
                            <div class="confirmUsername mb-3">
                                <label class="sr-only" for="reset-username">Username</label>
                                <input id="reset-username" name="username" type="text" class="form-control cek-username"
                                    placeholder="Username" autocomplete="username">
                                <p class="alertUsername text-danger"></p>
                            </div>

                            <div class="reset-password text-left"></div>
                            <!--//form-group-->
                            <div class="text-center cekUser">
                                <button class="btn btn-success w-100 text-white" id="cekUser">Cek Username</button>
                            </div>
                        </form>

                        <div class="auth-option text-center pt-5"><a class="app-link" href="./">Masuk</a> <span
                                class="px-2">|</span> <a class="app-link" href="register">Daftar</a></div>
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