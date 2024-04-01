<?php 

function ajouterCalendrier($data){
    try {
        global $connect;

        $req = "INSERT INTO calendrier(activiteJour, activiteTemps, activiteCour) 
        Values(:jour, :temps, :cour)";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":jour", $data["activiteJour"]);
        $stmt->bindParam(":temps", $data["activiteTemps"]);
        $stmt->bindParam(":cour", $data["activiteCour"]);
        $stmt->execute();

        if($stmt->rowCount() == 0) {
            http_response_code(400);
            $msg = ["erreur" => "Activite non Crée"];
            echo json_encode($msg);
        } else {
            echo json_encode(['success' => 'Activite Crée']);
        }

    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}

?>