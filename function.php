<?php
error_reporting(0);
date_default_timezone_set('Asia/Jakarta');
// connection
$conn = mysqli_connect("localhost", "root", "", "2023_ebudgeting");
$connYear = mysqli_connect("localhost", "root", "", "eb_v1");

// log cookie
$username       = $_COOKIE["username"];
$dQuery         = mysqli_query($conn, "SELECT * FROM akun_pengurus WHERE username = '$username'");
$dataLog        = $dQuery->fetch_assoc();

// ip
function get_client_ip()
{
	$ipaddress = '';
	if (getenv('HTTP_CLIENT_IP'))
		$ipaddress = getenv('HTTP_CLIENT_IP');
	else if (getenv('HTTP_X_FORWARDED_FOR'))
		$ipaddress = getenv('HTTP_X_FORWARDED_FOR');
	else if (getenv('HTTP_X_FORWARDED'))
		$ipaddress = getenv('HTTP_X_FORWARDED');
	else if (getenv('HTTP_FORWARDED_FOR'))
		$ipaddress = getenv('HTTP_FORWARDED_FOR');
	else if (getenv('HTTP_FORWARDED'))
		$ipaddress = getenv('HTTP_FORWARDED');
	else if (getenv('REMOTE_ADDR'))
		$ipaddress = getenv('REMOTE_ADDR');
	else
		$ipaddress = 'UNKNOWN';
	return $ipaddress;
}

// hapus titik
function RemoveSpecialChar($nom_acak)
{
	$res = str_replace(array("#", ".", ","), ' ', $nom_acak);
	return $res;
}

// compress Images
function compressImage($source, $destination, $quality) { 
    $imgInfo = getimagesize($source); 
    $mime = $imgInfo['mime']; 
    
    switch($mime){ 
        case 'image/jpeg': 
            $image = imagecreatefromjpeg($source); 
            break; 
        case 'image/png': 
            $image = imagecreatefrompng($source); 
            break; 
		case 'image/jpg';
			$image = imagecreatefrompng($source);
			break;
        default: 
            $image = imagecreatefromjpeg($source); 
    } 
    
    imagejpeg($image, $destination, $quality); 
    
    return $destination; 
} 

// convert bulan
function convertDateDBtoIndo($string)
{

	$bulanIndo = ['', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

	$tanggal 	= explode("-", $string)[2];
	$bulan 		= explode("-", $string)[1];
	$tahun 		= explode("-", $string)[0];

	return $tanggal . " " . $bulanIndo[abs($bulan)] . " " . $tahun;
}

function ExactBrowserName()
{

$ExactBrowserNameUA=$_SERVER['HTTP_USER_AGENT'];

if (strpos(strtolower($ExactBrowserNameUA), "safari/") and strpos(strtolower($ExactBrowserNameUA), "opr/")) {
    // OPERA
    $ExactBrowserNameBR="Opera";
} elseIf (strpos(strtolower($ExactBrowserNameUA), "safari/") and strpos(strtolower($ExactBrowserNameUA), "chrome/")) {
    // CHROME
    $ExactBrowserNameBR="Chrome";
} elseIf (strpos(strtolower($ExactBrowserNameUA), "msie")) {
    // INTERNET EXPLORER
    $ExactBrowserNameBR="Internet Explorer";
} elseIf (strpos(strtolower($ExactBrowserNameUA), "firefox/")) {
    // FIREFOX
    $ExactBrowserNameBR="Firefox";
} elseIf (strpos(strtolower($ExactBrowserNameUA), "safari/") and strpos(strtolower($ExactBrowserNameUA), "opr/")==false and strpos(strtolower($ExactBrowserNameUA), "chrome/")==false) {
    // SAFARI
    $ExactBrowserNameBR="Safari";
} else {
    // OUT OF DATA
    $ExactBrowserNameBR="OUT OF DATA";
};

return $ExactBrowserNameBR;
}

?>