<?php
    $host     = 'localhost';
    $db       = 'eb_v1';
    $user     = 'root';
    $password = '';

    $dsn = "mysql:host=$host;dbname=$db;charset=UTF8";

    try {
        $sql_details = new PDO($dsn, $user, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    
    } catch (PDOException $e) {
         echo $e->getMessage();
    }
?>