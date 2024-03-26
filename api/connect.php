<?php

$host = 'localhost';
$db   = 'flexgym';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

try{
    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $connect = new PDO($dsn, $user, $pass);}
catch(Exception $e)
{
    $errorMessage = $e->getMessage();
    error_log($errorMessage);
}
?>