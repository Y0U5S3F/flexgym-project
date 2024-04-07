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
            "SELECT clientEmail AS email, '0rxQHAxT' AS userType
            FROM client WHERE clientEmail = :email AND clientPass = :pass
            UNION
            SELECT personnelEmail AS email, 'X12nDlxf' AS userType
            FROM personnel WHERE personnelEmail = :email AND personnelPass = :pass AND personnelRole='Receptioniste'
            UNION
            SELECT adminEmail AS email, 'Mv1NpnIV' AS userType
            FROM `admin` WHERE adminEmail = :email AND adminPass = :pass
        ");
        $stmt->bindParam(":email", $_POST["email"]);
        $stmt->bindParam(":pass", $_POST["pass"]);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if($result){
            $key='your_secret_key';
            $token = JWT::encode(
                array(
                    'iat'=>time(),
                    'nbf'=>time(),
                    'exp'=>time() + 3600,
                    'data'=>array(
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