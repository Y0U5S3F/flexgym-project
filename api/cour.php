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
        if(isset($_POST['courNom']) && isset($_POST['courDetail']) && isset($_POST['courCoach']) && isset($_FILES['courImg'])) {
            $data = array(
                'courNom' => $_POST['courNom'],
                'courDetail' => $_POST['courDetail'],
                'courCoach' => $_POST['courCoach']
            );
            $file = $_FILES['courImg'];
            ajouterCour($data, $file);
        } else {
            http_response_code(400);
            echo json_encode(array("Error: " => "Invalid data or file"));
        }
        break;    
    case 'PUT':
        $courId = $_GET['courId'];
        $contentType = $_SERVER["CONTENT_TYPE"];
        $types = ['image/jpeg', 'image/png','image/jpg', 'image/gif', 'image/webp', 'image/bmp'];
        if ($contentType === 'application/json') {
            $json = file_get_contents('php://input');
            $data = json_decode($json, true);
            modifierCour($courId, $data);
        } else if (in_array($contentType, $types)) {
            $file = file_get_contents('php://input');
            modifierCourImg($courId, $file, $contentType);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid Content-Type']);
        }
    }
?>