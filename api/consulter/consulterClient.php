<?php

$var = $_SERVER['REQUEST_METHOD'];
require 'connect.php';
header("Content-type:application/json");

switch ($var) {
    case 'GET':
        if(isset($_GET["id"]) && ($_GET['id'] != null)) {
            $id = $_GET["id"];
            unProduit($id);
        } else {
            tousProduit();
        }
        break;
    case 'DELETE':
        if(isset($_GET["id"]) && ($_GET["id"] != null)) {
            $id = $_GET["id"];
            delProduit($id);
        }
        break;
}

function unProduit($id) {
    global $connexion;
    $requeste = "SELECT * FROM product WHERE id=:x";
    $stmt = $connexion->prepare($requeste);
    $stmt->bindParam(":x", $id);
    $stmt->execute();
    $resultat = $stmt->fetch(PDO::FETCH_ASSOC);
    if($resultat == null) {
        http_response_code(204);
        $msg = ["erreur" => "produit inexistant"];
        echo json_encode($msg);
    } else {
        echo json_encode($resultat);
    }
}

function tousProduit() {
    global $connexion;
    $requeste = "SELECT * FROM product";
    $stmt = $connexion->prepare($requeste);
    $stmt->execute();
    $resultat = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($resultat);
}

function delProduit($id) {
    global $connexion;
    $req = "DELETE from product where id=:y";
    $stmt = $connexion->prepare($req);
    $stmt->bindParam(":y", $id);
    $resultat = $stmt->execute();
    if($resultat == 0) {
        http_response_code(400);
        $msg = ["erreur" => "non existant"];
        echo json_encode($msg);
    }
}

?>