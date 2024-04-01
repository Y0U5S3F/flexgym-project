<?php
function modifierPersonnel($personnelId, $data){
    try {
        global $connect;

        $req = "UPDATE personnel SET personnelRole=:personnelRole,personnelNom=:personnelNom,personnelPrenom=:personnelPrenom,personnelEmail=:personnelEmail,personnelPass=:personnelPass where personnelId=:personnelId";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":personnelId", $personnelId);
        $stmt->bindParam(":personnelRole", $data["personnelRole"]);
        $stmt->bindParam(":personnelNom", $data["personnelNom"]);
        $stmt->bindParam(":personnelPrenom", $data["personnelPrenom"]);
        $stmt->bindParam(":personnelEmail", $data["personnelEmail"]);
        $stmt->bindParam(":personnelPass", $data["personnelPass"]);

        $stmt->execute();

        if($stmt->rowCount() == 0) {
            http_response_code(400);
            echo json_encode(['erreur' => 'Personnel non modifie']);
        } else {
            echo json_encode(['success' => 'Personnel modifie']);
        }

    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}
?>