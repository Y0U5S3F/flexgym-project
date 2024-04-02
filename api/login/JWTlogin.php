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
        $stmt->bindParam(":email", $_POST["email"]);
        $stmt->bindParam(":pass", $_POST["pass"]);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if($result){
            $key='350ab3fd6e84511a0034b7ee85921e079abf50d97d132ef7f41514844770a0825875b3f1a1febbac9ba5a6764355cd648210103c606c940fdded7adc12e6eabf9ca42dff40ec835d04b4c250ee535cbb809af88dfce9391d9b5de9353a8928fced06ac5b6cb042e8fb76918b409b98e8ad75c809f18311b03708abfb8a5c45ccb42140bd356e7bca7c0ad911947639c63fd96c0affc59b4a5f77e20fb51bb18fa6d9ccda6e5be0a8ae1495e96dd57107a9ef16abb52451393eaf85c5184131fa4bcd9e1a3889ef195bd83f58655d13ca9895c380056c9db874d7b91acafa5c60f2507c2b2f7c26394b82cfb6105d21f43b44aee992321027e697f0b32db41d1e'
        }
    }
}
?>