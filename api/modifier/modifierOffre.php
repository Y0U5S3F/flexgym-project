<?php

function modifierOffre($offreId, $data){
    try {
        global $connect;

        $connect->exec("SET FOREIGN_KEY_CHECKS=0;");

        $req = "UPDATE offre SET offreNom=:offreNom,offreDetail=:offreDetail,offrePrix=:offrePrix,offreCour=:offreCour where offreId=:offreId";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":offreId", $offreId);
        $stmt->bindParam(":offreNom", $data["offreNom"]);
        $stmt->bindParam(":offreDetail", $data["offreDetail"]);
        $stmt->bindParam(":offrePrix", $data["offrePrix"]);
        $stmt->bindParam(":offreCour", $data["offreCour"]);
        $stmt->execute();

        $connect->exec("SET FOREIGN_KEY_CHECKS=1;");

        if($stmt->rowCount() == 0) {
            http_response_code(400);
            $msg = ["erreur" => "Offre non existant"];
            echo json_encode($msg);
        } else {
            echo json_encode(['success' => 'Offre modifié']);
        }

    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}

?>