.<?php 

function ajouterOffre($data){
    try {
        global $connect;

        $req = "INSERT INTO offre(offreNom,offreDetail,offrePrix) 
        Values(:nom,:detail,:prix)";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":nom", $data["offreNom"]);
        $stmt->bindParam(":detail", $data["offreDetail"]);
        $stmt->bindParam(":prix", $data["offrePrix"]);
        $stmt->execute();

        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }

?>