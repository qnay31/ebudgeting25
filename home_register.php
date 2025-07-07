<?php
// error_reporting(0);
require 'function.php';

$username   = mysqli_real_escape_string($conn, strtolower($_POST["inputUsername"]));
$type       = mysqli_real_escape_string($conn, $_POST["inputType"]);
$query      = mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE username = '$username'");

if ($type == "cekUser") {
    $nums       = $query->num_rows;

    if ($nums === 0) {
        echo 0;
        return false;
        
    } else {
        echo 1;
    }
    
} else {
    $password           = mysqli_real_escape_string($conn, $_POST["inputPassword"]);
    $confirmPassword    = mysqli_real_escape_string($conn, $_POST["inputConfirmPassword"]);
	$ip     		    = get_client_ip();
	$date   		    = date("Y-m-d H:i:s");

    $data       = $query->fetch_assoc();
    $nama       = $data["nama"];
    $posisi     = $data["posisi"];

    if ($password !== $confirmPassword) {
        echo 'noConfirm';
        
    } else if (password_verify($password, $data["password"]) ) {
        echo 1;
        
    } else {
        $encrypt_password = password_hash($password, PASSWORD_DEFAULT);

        mysqli_query($conn, "UPDATE akun_pengurus SET password = '$encrypt_password' WHERE username = '$username'");

        $sql = mysqli_query($conn, 
            "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
            '$nama', 
            '$posisi', 
            '$ip', 
            '$date', 
            '{$nama} Telah Membuat kata sandi baru dengan lupa kata sandi')
        ");

        echo '0';
    }
}

?>