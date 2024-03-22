<?php
function supprimerOffre($offreId) {
    try {
        global $connect;

        $req = "DELETE from offre where offreId=:y";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":y", $offreId);
        $resultat = $stmt->execute();

        if($resultat == 0) {
            http_response_code(400);
            $msg = ["erreur" => "offre non existant"];
            echo json_encode($msg);
        }
    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}
?>