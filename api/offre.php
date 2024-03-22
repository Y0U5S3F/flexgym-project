<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$var = $_SERVER['REQUEST_METHOD'];
require 'connect.php';
require 'charger/chargerOffre.php';
require 'supprimer/supprimerOffre.php';
require 'ajouter/ajouterOffre.php';
require 'modifier/modifierOffre.php';
header("Content-type:application/json");

switch ($var) {
    case 'GET':
        if(isset($_GET["offreId"]) && ($_GET['offreId'] != null)) {
            $offreId = $_GET["offreId"];
            chargerOffre($offreId);
        } else {
            chargerTousOffre();
        }
        break;
    case 'DELETE':
        if(isset($_GET["offreId"]) && ($_GET["offreId"] != null)) {
            $offreId = $_GET["offreId"];
            supprimerOffre($offreId);
        }
        break;
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        if ($data) {
            ajouterOffre($data);
        } else {
            http_response_code(400);
            echo json_encode(array("Error: " => "Invalid JSON data"));
        }
        break;
    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        if ($data && isset($_GET["offreId"]) && ($_GET["offreId"] != null)) {
            $offreId = $_GET["offreId"];
            modifierOffre($offreId, $data);
        } else {
            http_response_code(400);
            echo json_encode(array("Error: " => "Invalid JSON data or missing ID"));
        }
        break;

}

