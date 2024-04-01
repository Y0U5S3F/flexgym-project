<?php 

function ajouterAdmin($data){
    try {
        global $connect;

        $req = "INSERT INTO admin(adminNom, adminPrenom, adminEmail, adminPass) 
        Values(:nom, :prenom, :email, :pass)";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":nom", $data["adminNom"]);
        $stmt->bindParam(":prenom", $data["adminPrenom"]);
        $stmt->bindParam(":email", $data["adminEmail"]);
        $stmt->bindParam(":pass", $data["adminPass"]);
        $stmt->execute();

        if($stmt->rowCount() == 0) {
            http_response_code(400);
            $msg = ["erreur" => "Admin non Crée"];
            echo json_encode($msg);
        } else {
            echo json_encode(['success' => 'Admin Crée']);
        }

    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}

?>