<?php 

function ajouterOffre($data){
    try {
        global $connect;

        $req = "INSERT INTO offre(offreNom,offreDetail,offrePrix,offreCour) 
        Values(:nom,:detail,:prix,:cour)";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":nom", $data["offreNom"]);
        $stmt->bindParam(":detail", $data["offreDetail"]);
        $stmt->bindParam(":prix", $data["offrePrix"]);
        $stmt->bindParam(":cour", $data["offreCour"]);
        $stmt->execute();

        if($stmt->rowCount() == 0) {
            http_response_code(400);
            $msg = ["erreur" => "Offre non Crée"];
            echo json_encode($msg);
        } else {
            echo json_encode(['success' => 'Offre Crée']);
        }

        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }

?>