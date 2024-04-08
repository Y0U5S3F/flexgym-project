<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-type:application/json");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'vendor/autoload.php';
require '../connect.php';

use Firebase\JWT\JWT;

$error ='';

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST["email"]) && isset($_POST["pass"])){
    global $connect;

    if(empty($_POST["email"])){
        $error= 'Donner un email';
    }elseif(empty($_POST["pass"])){
        $error= 'Donner un mot de passe';
    }else{
        $stmt = $connect->prepare(
            "SELECT clientId AS id, clientEmail AS email, '0rxQHAxT' AS userType
            FROM client WHERE clientEmail = :email AND clientPass = :pass
            UNION
            SELECT personnelId AS id, personnelEmail AS email, 'X12nDlxf' AS userType
            FROM personnel WHERE personnelEmail = :email AND personnelPass = :pass AND personnelRole='Receptioniste'
            UNION
            SELECT adminId AS id, adminEmail AS email, 'Mv1NpnIV' AS userType
            FROM `admin` WHERE adminEmail = :email AND adminPass = :pass
        ");
        $stmt->bindParam(":email", $_POST["email"]);
        $stmt->bindParam(":pass", $_POST["pass"]);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if($result){
            $key='9ff65bc21be2246b86f8381b41489f8fee6338f96f82a751b0a59810e01e489a';
            $token = JWT::encode(
                array(
                    'iat'=>time(),
                    'nbf'=>time(),
                    'exp'=>time() + 3600,
                    'data'=>array(
                        'id'=>$result[0]["id"],
                        'email'=>$result[0]["email"],
                        'userType'=>$result[0]["userType"]
                    )
                ),
                $key,'HS256'
            );
            echo json_encode(array('token' => $token));
        } else {
            $error = 'Invalid email or password';
        }
    }
    if(!empty($error)){
        echo $error;
    }
}
?>