<?php
include_once("connect.php");
$data = json_decode(file_get_contents('php://input'), true);
if(isset($data) && !empty($data))
{
$pass = trim($data['pass']);
$email = trim($data['email']);

$stmt = $mysqli->prepare("SELECT clientEmail AS email, clientPass AS pass
FROM client WHERE clientEmail = :email AND clientPass = :pass UNION
SELECT personnelEmail AS email, personnelPass AS pass
FROM personnel WHERE personnelEmail = :email AND personnelPass = :pass UNION
SELECT adminEmail AS email, adminPass AS pass
FROM admin WHERE adminEmail = :email AND adminPass = :pass");
$stmt->bind_param(":email", $email);
$stmt->bind_param(":pass", $pass);
$stmt->execute();
$result = $stmt->get_result();

if($result)
{
$rows = array();
while($row = $result->fetch_assoc())
{
$rows[] = $row;
}
echo json_encode($rows);
}
else
{
http_response_code(404);
}
}
?>