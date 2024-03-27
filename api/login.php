<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include ("connect.php");
$data = json_decode(file_get_contents('php://input'), true);
if(isset($data) && !empty($data))
{
$email = trim($data['email']);
$pass = trim($data['pass']);

$stmt = $connect->prepare("SELECT clientEmail AS email, clientPass AS pass
FROM client WHERE clientEmail = :email AND clientPass = :pass UNION
SELECT personnelEmail AS email, personnelPass AS pass
FROM personnel WHERE personnelEmail = :email AND personnelPass = :pass UNION
SELECT adminEmail AS email, adminPass AS pass
FROM `admin` WHERE adminEmail = :email AND adminPass = :pass");
$stmt->bindParam(":email", $email);
$stmt->bindParam(":pass", $pass);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

if($result)
{
echo json_encode($result);
}
else
{
http_response_code(404);
}
}
?>