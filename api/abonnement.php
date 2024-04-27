<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, token");
header("Content-type: application/json");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'connect.php';
require 'charger/chargerAbonnement.php';
require 'supprimer/supprimerAbonnement.php';
require 'ajouter/ajouterAbonnement.php';
require 'modifier/modifierAbonnement.php';

$var = $_SERVER['REQUEST_METHOD'];

switch ($var) {
    case 'GET':
        if (isset($_GET["abonnementId"]) && ($_GET['abonnementId'] != null)) {
            $abonnementId = $_GET["abonnementId"];
            chargerAbonnement($abonnementId);
        } else {
            chargerTousAbonnement();
        }
        break;
    case 'DELETE':
        if (isset($_GET["abonnementId"]) && ($_GET["abonnementId"] != null)) {
            $abonnementId = $_GET["abonnementId"];
            supprimerAbonnement($abonnementId);
        }
        break;
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        if ($data) {
            ajouterAbonnement($data);
        } else {
            http_response_code(400);
            echo json_encode(array("Error" => "Invalid JSON data"));
        }
        break;
    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        if ($data && isset($_GET["abonnementId"]) && ($_GET["abonnementId"] != null)) {
            $abonnementId = $_GET["abonnementId"];
            modifierAbonnement($abonnementId, $data);
        } else {
            http_response_code(400);
            echo json_encode(array("Error" => "Invalid JSON data or missing ID"));
        }
        break;
}

?>