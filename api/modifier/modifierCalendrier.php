<?php
function modifierCalendrier($activiteId, $data){
    try {
        global $connect;

        $connect->exec("SET FOREIGN_KEY_CHECKS=0;");

        $req = "UPDATE calendrier SET activiteJour=:activiteJour,activiteTemps=:activiteTemps,activiteCour=:activiteCour where activiteId=:activiteId";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":activiteId", $activiteId);
        $stmt->bindParam(":activiteJour", $data["activiteJour"]);
        $stmt->bindParam(":activiteTemps", $data["activiteTemps"]);
        $stmt->bindParam(":activiteCour", $data["activiteCour"]);

        $stmt->execute();

        $connect->exec("SET FOREIGN_KEY_CHECKS=1;");

        if($stmt->rowCount() == 0) {
            http_response_code(400);
            echo json_encode(['erreur' => 'Calendrier non modifie']);
        } else {
            echo json_encode(['success' => 'Calendrier modifie']);
        }

    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}
?>