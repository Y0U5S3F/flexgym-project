<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-type:application/json");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$var = $_SERVER['REQUEST_METHOD'];

require 'connect.php';
require 'charger/chargerClient.php';
require 'supprimer/supprimerClient.php';
require 'ajouter/ajouterClient.php';
require 'modifier/modifierClient.php';

switch ($var) {
    case 'GET':
        if(isset($_GET["clientId"]) && ($_GET['clientId'] != null)) {
            $clientId = $_GET["clientId"];
            chargerClient($clientId);
        } else {
            chargerTousClient();
        }
        break;
    case 'DELETE':
        if(isset($_GET["clientId"]) && ($_GET["clientId"] != null)) {
            $clientId = $_GET["clientId"];
            supprimerClient($clientId);
        }
        break;
    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        if ($data) {
            ajouterClient($data);
        } else {
            http_response_code(400);
            echo json_encode(array("Error: " => "Invalid JSON data"));
        }
        break;
    case 'PUT':
        $data = json_decode(file_get_contents("php://input"), true);
        if ($data && isset($_GET["clientId"]) && ($_GET["clientId"] != null)) {
            $clientId = $_GET["clientId"];
            modifierClient($clientId, $data);
        } else {
            http_response_code(400);
            echo json_encode(array("Error: " => "Invalid JSON data or missing ID"));
        }
        break;

}

