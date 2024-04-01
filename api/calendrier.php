<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-type:application/json");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'connect.php';
require 'charger/chargerCalendrier.php';
require 'supprimer/supprimerCalendrier.php';
require 'ajouter/ajouterCalendrier.php';
require 'modifier/modifierCalendrier.php';

$var = $_SERVER['REQUEST_METHOD'];

switch ($var) {
    case 'GET':
        if(isset($_GET["activiteId"]) && ($_GET['activiteId'] != null)) {
            $activiteId = $_GET["activiteId"];
            chargerCalendrier($activiteId);
        } else {
            chargerTousCalendrier();
        }
        break;
    case 'DELETE':
        if(isset($_GET["activiteId"]) && ($_GET["activiteId"] != null)) {
            $activiteId = $_GET["activiteId"];
            supprimerCalendrier($activiteId);
        }
        break;
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        if ($data) {
            ajouterCalendrier($data);
        } else {
            http_response_code(400);
            echo json_encode(array("Error: " => "Invalid JSON data"));
        }
        break;
    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        if ($data && isset($_GET["activiteId"]) && ($_GET["activiteId"] != null)) {
            $activiteId = $_GET["activiteId"];
            modifierCalendrier($activiteId, $data);
        } else {
            http_response_code(400);
            echo json_encode(array("Error: " => "Invalid JSON data or missing ID"));
        }
        break;
}
?>