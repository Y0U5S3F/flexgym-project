<?php
require 'vendor/autoload.php';
require '../connect.php';

use Firebase\JWT\JWT;

$error ='';

if(isset($_POST["login"])){
    global $connect;
    
    if(empty($_POST["email"])){
        $error= 'Donner un email';
    }elseif(empty($_POST["pass"])){
        $error= 'Donner un mot de passe';
    }else{
        $stmt = $connect->prepare(
            "SELECT clientEmail AS email, clientPass AS pass, '0rxQHAxT' AS userType
            FROM client WHERE clientEmail = :email AND clientPass = :pass
            UNION
            SELECT personnelEmail AS email, personnelPass AS pass, 'X12nDlxf' AS userType
            FROM personnel WHERE personnelEmail = :email AND personnelPass = :pass AND personnelRole='Receptioniste'
            UNION
            SELECT adminEmail AS email, adminPass AS pass, 'Mv1NpnIV' AS userType
            FROM `admin` WHERE adminEmail = :email AND adminPass = :pass
            ");
        $stmt->execute();
    }
}
?>