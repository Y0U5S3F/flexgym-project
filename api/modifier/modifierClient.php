<?php
function modifierClient($clientId, $data){
    try {
        global $connect;

        $req = "UPDATE client SET clientNom=:clientNom,clientPrenom=:clientPrenom,clientEmail=:clientEmail,clientPass=:clientPass,clientTel=:clientTel,clientDatenais=:clientDatenais where clientId=:clientId";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":clientId", $clientId);
        $stmt->bindParam(":clientNom", $data["clientNom"]);
        $stmt->bindParam(":clientPrenom", $data["clientPrenom"]);
        $stmt->bindParam(":clientEmail", $data["clientEmail"]);
        $stmt->bindParam(":clientPass", $data["clientPass"]);
        $stmt->bindParam(":clientTel", $data["clientTel"]);
        $stmt->bindParam(":clientDatenais", $data["clientDatenais"]);

        $stmt->execute();

        if($stmt->rowCount() == 0) {
            http_response_code(400);
            echo json_encode(['erreur' => 'Client non modifie']);
        } else {
            echo json_encode(['success' => 'Client modifie']);
        }

    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}
?>