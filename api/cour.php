<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-type:application/json");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'connect.php';
require 'charger/chargerCour.php';
require 'supprimer/supprimerCour.php';
require 'ajouter/ajouterCour.php';
require 'modifier/modifierCour.php';

$var = $_SERVER['REQUEST_METHOD'];

switch ($var) {
    case 'GET':
        if(isset($_GET["courId"]) && ($_GET['courId'] != null)) {
            $courId = $_GET["courId"];
            chargerCour($courId);
        } else {
            chargerTousCour();
        }
        break;
    case 'DELETE':
        if(isset($_GET["courId"]) && ($_GET["courId"] != null)) {
            $courId = $_GET["courId"];
            supprimerCour($courId);
        }
        break;
    case 'POST':

        $data = json_decode($_POST['json_data'], true);
        $file = $_FILES['userfile'];
        
        if ($data && $file) {
            ajouterCour($data, $file);
        } else {
            http_response_code(400);
            echo json_encode(array("Error: " => "Invalid data or file"));
        }
        break;
    case 'PUT':

        $data = json_decode(file_get_contents('php://input'), true);

        if ($data && isset($_GET["courId"]) && ($_GET["courId"] != null)) {
            $courId = $_GET["courId"];
            modifierCour($courId, $data);
        } else {
            http_response_code(400);
            echo json_encode(array("Error: " => "Invalid JSON data or missing ID"));
        }
        break;
}