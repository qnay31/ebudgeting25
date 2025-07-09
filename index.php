<?php
session_start();
// error_reporting(0);

require 'function.php';
if (isset($_COOKIE["username"])) {
    $username = $_COOKIE["username"];
    $qLogin = mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE username = '$username'");
    if (mysqli_num_rows($qLogin) === 1) {
        $data = mysqli_fetch_assoc($qLogin);
        // die(var_dump($data));
        $_SESSION["halaman_utama"]      = true ;
        $_SESSION["id"]           = $data["id"];
		$_SESSION["id_pengurus"]  = $data["id_pengurus"];
        $_SESSION["nama"]         = $data["nama"];
        $_SESSION["username"]     = $data["username"];
        $_SESSION["profil"]       = $data["profil"];
        $_SESSION["password"]     = $data["password"];
        $_SESSION["posisi"]       = $data["posisi"];

        header("Location: home");
    } else {
        session_destroy();
        session_unset();

        setcookie('id_pengurus', '', time() + (10 * 365 * 24 * 60 * 60) );
        setcookie('username', '', time() - (10 * 365 * 24 * 60 * 60) );
        header("Location: ./");
    }
    exit;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Login - Ebudgeting Yayasan Alkirom Amanah</title>

    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="Login - Ebudgeting Yayasan Alkirom Amanah">
    <meta name="author" content="Yayasan Alkirom Amanah">
    <link rel="shortcut icon" href="./assets/images/logo_favicon.png" type="image/x-icon">
    <link href="./assets/plugins/fontawesome/css/all.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="./assets/css/sweetalert2.min.css">

    <!-- App CSS -->
    <link id="theme-style" rel="stylesheet" href="assets/css/portal.css">

</head>

<body class="app app-login p-0">
    <div class="row g-0 app-auth-wrapper">
        <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
            <div class="d-flex flex-column align-content-end">
                <div class="app-auth-body mx-auto">
                    <div class="app-auth-branding mb-4"><a class="app-logo" href="#"><img class="logo-icon me-2"
                                src="assets/images/logo_favicon.png" alt="logo"></a></div>
                    <h2 class="auth-heading text-center mb-5">Masuk Ebudgeting</h2>
                    <div class="auth-form-container text-start">
                        <form class="auth-form login-form">
                            <div class="email mb-3 ">
                                <label class="sr-only" for="username">Username</label>
                                <input id="username" name="username" type="text" class="form-control signin-email"
                                    placeholder="Username" autocomplete="username" />
                                <p class="alertUsername text-danger"></p>
                            </div>
                            <!--//form-group-->
                            <div class="password mb-3">
                                <span toggle="#password-field" class="show-password toggle-password"><span
                                        class="showMe">Tampilkan</span>
                                    Password</label>
                                    <label class="sr-only" for="password-field">Password</label>
                                    <input type="password" class="form-control" name="password" id="password-field"
                                        placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"
                                        autocomplete="off">
                                    <p class="alertPassword text-danger"></p>
                                    <div class="extra mt-3 row justify-content-between">
                                        <div class="col-6">
                                        </div>
                                        <!--//col-6-->
                                        <div class="col-6">
                                            <div class="forgot-password text-end">
                                                <a href="reset-password">Lupa Sandi?</a>
                                            </div>
                                        </div>
                                        <!--//col-6-->
                                    </div>
                                    <!--//extra-->
                            </div>
                            <!--//form-group-->
                            <div class="text-center btn-submit">
                                <button type="submit" name="login"
                                    class="btn app-btn-primary w-100 theme-btn mx-auto">Masuk</button>
                            </div>
                        </form>

                        <div class="auth-option text-center pt-5">Belum Punya Akun? Daftar <a class="text-link"
                                href="register">disini</a>.</div>
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
    <script src="./assets/js/login.js?v=<?= filemtime('./assets/js/login.js'); ?>"></script>

</body>

</html>