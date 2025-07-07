<?php
error_reporting(0);
session_start();
    include "../../function.php";
	
	if(isset($_POST["id"])){
		$id 	= $_POST["id"];
		mysqli_query($conn, "DELETE FROM `log_aktivity` WHERE id = '$id' ");

	}

	$conn->close();
?>