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

        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }

?>