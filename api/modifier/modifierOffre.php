<?php

function modifierOffre($offreId, $data){
    try {
        global $connect;

        $req = "UPDATE offre SET offreNom=:offreNom,offreDetail=:offreDetail,offrePrix=:offrePrix,offreCour=:offreCour where offreId=:offreId";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":offreId", $offreId);
        $stmt->bindParam(":offreNom", $data["offreNom"]);
        $stmt->bindParam(":offreDetail", $data["offreDetail"]);
        $stmt->bindParam(":offrePrix", $data["offrePrix"]);
        $stmt->bindParam(":offreCour", $data["offreCour"]);
        $stmt->execute();

        echo $stmt->rowCount();

    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}

?>