<?php
error_reporting(0);
session_start();
    include "../../function.php";
	
	if(isset($_POST["id"])){
		$id 	= $_POST["id"];
		mysqli_query($conn, "DELETE FROM `asal_sekolah` WHERE id = '$id' ");

	}

	$conn->close();
?>