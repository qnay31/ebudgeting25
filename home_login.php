<?php
session_start();
error_reporting(0);
require 'function.php';

$username   = mysqli_real_escape_string($conn, $_POST ["username"]);
$password   = mysqli_real_escape_string($conn, $_POST ["password"]);
$date       = date("Y-m-d H:i:s");
$ip         = get_client_ip();

$result = mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE username = '$username' " );
$row = mysqli_fetch_assoc($result);
if ($row["username"] !== $username) {
    echo '0';
    return false;
}

if (mysqli_num_rows($result) === 1 ) {
    // cek password database
    if (password_verify($password, $row["password"]) ) {
        
        // set session
        if($row['username'] == "$username"){
            
            $_SESSION["halaman_utama"]      = true ;
            // buat session login dan username ADMIN
            $_SESSION["id"]           = $row["id"];
            $_SESSION["id_pengurus"]  = $row["id_pengurus"];
            $_SESSION["nama"]         = $row["nama"];
            $_SESSION["username"]     = $row["username"];
            $_SESSION["profil"]       = $row["profil"];
            $_SESSION["password"]     = $row["password"];
            $_SESSION["posisi"]       = $row["posisi"];
            
            setcookie('id_pengurus', $_SESSION['id_pengurus'], time() + (10 * 365 * 24 * 60 * 60) );
            setcookie('username', $_SESSION['username'], time() + (10 * 365 * 24 * 60 * 60) );

            if ($_SESSION["id_pengurus"] == "admin_web") {} else {
                    $sql = mysqli_query($conn, 
                    "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
                        '{$_SESSION[nama]}', 
                        '{$_SESSION[posisi]}', 
                        '$ip', 
                        '$date', 
                        '{$_SESSION[nama]} Telah Login Halaman {$_SESSION[posisi]}')
                    ");
            }

        }
        
        echo 'success';
        exit; 
    } 
    
} else {
    echo 'error';
}
?>