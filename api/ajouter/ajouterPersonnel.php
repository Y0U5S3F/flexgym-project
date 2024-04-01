<?php 

function ajouterPersonnel($data){
    try {
        global $connect;

        $req = "INSERT INTO personnel(personnelRole,personnelNom,personnelPrenom,personnelEmail,personnelPass) Values(:personnelRole,:personnelNom,:personnelPrenom,:personnelEmail,:personnelPass)";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":personnelRole", $data["personnelRole"]);
        $stmt->bindParam(":personnelNom", $data["personnelNom"]);
        $stmt->bindParam(":personnelPrenom", $data["personnelPrenom"]);
        $stmt->bindParam(":personnelEmail", $data["personnelEmail"]);
        $stmt->bindParam(":personnelPass", $data["personnelPass"]);
        $stmt->execute();

        if($stmt->rowCount() == 0) {
            http_response_code(400);
            $msg = ["erreur" => "Personnel non Crée"];
            echo json_encode($msg);
        } else {
            echo json_encode(['success' => 'Personnel Crée']);
        }

    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}

?>