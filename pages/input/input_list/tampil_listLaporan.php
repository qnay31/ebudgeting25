<?php
// error_reporting(0);
include "../../../function.php";
$akun = $_POST["akun"];

$query_akun = mysqli_query($conn, "SELECT * FROM data_akun WHERE nama_akun = '$akun'");
$data_akun  = $query_akun->fetch_assoc();
$kategori   = $data_akun["kategori"];

if ($kategori == "Facebook") {
    echo "Facebook";
} else if ($kategori == "Instagram") {
    echo "Instagram";
}
$conn->close();
?>