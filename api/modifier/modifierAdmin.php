<?php
function modifierAdmin($adminId, $data){
    try {
        global $connect;

        $req = "UPDATE admin SET adminNom=:adminNom,adminPrenom=:adminPrenom,adminEmail=:adminEmail,adminPass=:adminPass where adminId=:adminId";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":adminId", $adminId);
        $stmt->bindParam(":adminNom", $data["adminNom"]);
        $stmt->bindParam(":adminPrenom", $data["adminPrenom"]);
        $stmt->bindParam(":adminEmail", $data["adminEmail"]);
        $stmt->bindParam(":adminPass", $data["adminPass"]);

        $stmt->execute();

        if($stmt->rowCount() == 0) {
            http_response_code(400);
            echo json_encode(['erreur' => 'Admin non modifie']);
        } else {
            echo json_encode(['success' => 'Admin modifie']);
        }

    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}
?>