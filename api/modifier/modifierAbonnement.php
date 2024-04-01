<?php
function modifierAbonnement($abonnementId, $data){
    try {
        global $connect;

        $connect->exec("SET FOREIGN_KEY_CHECKS=0;");

        $req = "UPDATE abonnement SET abonnementEtat=:abonnementEtat,abonnementType=:abonnementType,abonnementProp=:abonnementProp,debutDate=:debutDate,finDate=:finDate where abonnementId=:abonnementId";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":abonnementId", $abonnementId);
        $stmt->bindParam(":abonnementEtat", $data["abonnementEtat"]);
        $stmt->bindParam(":abonnementType", $data["abonnementType"]);
        $stmt->bindParam(":abonnementProp", $data["abonnementProp"]);
        $stmt->bindParam(":debutDate", $data["debutDate"]);
        $stmt->bindParam(":finDate", $data["finDate"]);

        $stmt->execute();

        $connect->exec("SET FOREIGN_KEY_CHECKS=1;");

        if($stmt->rowCount() == 0) {
            http_response_code(400);
            echo json_encode(['erreur' => 'Abonnement non modifie']);
        } else {
            echo json_encode(['success' => 'Abonnement modifie']);
        }

    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}
?>