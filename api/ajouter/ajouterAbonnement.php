<?php 

function ajouterAbonnement($data){
    try {
        global $connect;

        $req = "INSERT INTO abonnement(abonnementEtat, abonnementType, abonnementProp, debutDate, finDate) 
        Values(:etat, :type, :prop, :debut, :fin)";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":etat", $data["abonnementEtat"]);
        $stmt->bindParam(":type", $data["abonnementType"]);
        $stmt->bindParam(":prop", $data["abonnementProp"]);
        $stmt->bindParam(":debut", $data["debutDate"]);
        $stmt->bindParam(":fin", $data["finDate"]);
        $stmt->execute();

        if($stmt->rowCount() == 0) {
            http_response_code(400);
            $msg = ["erreur" => "Abonnement non Crée"];
            echo json_encode($msg);
        } else {
            echo json_encode(['success' => 'Abonnement Crée']);
        }

    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}

?>