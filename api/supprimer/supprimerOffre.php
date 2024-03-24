<?php

function supprimerOffre($offreId) {
    try {
        global $connect;

        $connect->exec("SET FOREIGN_KEY_CHECKS=0;");

        $req = "DELETE from offre where offreId=:y";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":y", $offreId);
        $stmt->execute();

        $connect->exec("SET FOREIGN_KEY_CHECKS=1;");

        if($stmt->rowCount() == 0) {
            http_response_code(400);
            $msg = ["erreur" => "offre non existant"];
            echo json_encode($msg);
        } else {
            echo json_encode(['success' => 'Offre deleted successfully']);
        }
    } catch (PDOException $e) {
        $connect->exec("SET FOREIGN_KEY_CHECKS=1;");
        http_response_code(500);
        echo json_encode(["erreur" => $e->getMessage()]);
    }
}
?>