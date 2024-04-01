<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-type:application/json");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'connect.php';
require 'charger/chargerAdmin.php';
require 'supprimer/supprimerAdmin.php';
require 'ajouter/ajouterAdmin.php';
require 'modifier/modifierAdmin.php';

$var = $_SERVER['REQUEST_METHOD'];

switch ($var) {
    case 'GET':
        if(isset($_GET["adminId"]) && ($_GET['adminId'] != null)) {
            $adminId = $_GET["adminId"];
            chargerAdmin($adminId);
        } else {
            chargerTousAdmin();
        }
        break;
    case 'DELETE':
        if(isset($_GET["adminId"]) && ($_GET["adminId"] != null)) {
            $adminId = $_GET["adminId"];
            supprimerAdmin($adminId);
        }
        break;
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        if ($data) {
            ajouterAdmin($data);
        } else {
            http_response_code(400);
            echo json_encode(array("Error: " => "Invalid JSON data"));
        }
        break;
    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        if ($data && isset($_GET["adminId"]) && ($_GET["adminId"] != null)) {
            $adminId = $_GET["adminId"];
            modifierAdmin($adminId, $data);
        } else {
            http_response_code(400);
            echo json_encode(array("Error: " => "Invalid JSON data or missing ID"));
        }
        break;
}
?>