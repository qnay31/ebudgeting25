<?php
    require 'function.php';

    $fullName           = mysqli_real_escape_string($conn, $_POST["fullName"]);
    $username           = mysqli_real_escape_string($conn, strtolower($_POST["username"]));
    $posisi             = mysqli_real_escape_string($conn, $_POST["posisi"]);
    $idPosisi           = mysqli_real_escape_string($conn, $_POST["idPosisi"]);
    $password           = mysqli_real_escape_string($conn, $_POST["password"]);
    $confirmPassword    = mysqli_real_escape_string($conn, $_POST["confirmPassword"]);
	$ip     		    = get_client_ip();
	$date   		    = date("Y-m-d H:i:s");
    
    
    $queryName = mysqli_query($conn, "SELECT nama FROM akun_pengurus WHERE nama = '$fullName' ");
    if (mysqli_fetch_assoc($queryName)) {
		echo "Name";
		return false;
	}

    $queryUsername = mysqli_query($conn, "SELECT username FROM akun_pengurus WHERE username = '$username' ");
    if (mysqli_fetch_assoc($queryUsername)) {
		echo "Username";
		return false;
	}

    if ($password !== $confirmPassword) {
		echo "Password";
		return false;
	}

    $encrypt_password = password_hash($password, PASSWORD_DEFAULT);

    $result = mysqli_query($conn,
        "INSERT INTO akun_pengurus (id_pengurus, nama, username, password, profil, posisi) VALUES (
        '$idPosisi',
        '$fullName',
        '$username',
        '$encrypt_password',
        'profil.png',
        '$posisi'
        )"
);

    $sql = mysqli_query($conn, 
        "INSERT INTO log_aktivity (nama, posisi, ip, tanggal, aktivitas) VALUES (
        '$fullName', 
        '$posisi', 
        '$ip', 
        '$date', 
        '{$fullName} Telah Membuat Akun Baru {$posisi}')
    ");

    if ($result) {
        echo "success";
    }
?>