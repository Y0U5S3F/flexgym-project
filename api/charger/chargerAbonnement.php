<?php
function chargerTousAbonnement() {
    try {
        global $connect;
        $req = "SELECT * FROM abonnement";
        $stmt = $connect->prepare($req);
        $stmt->execute();
    
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        header("Content-Type: application/json");
        
        echo json_encode($result);
    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}

function chargerAbonnement($abonnementId) {
    try {
        global $connect;

        $request = "SELECT * FROM abonnement WHERE abonnementId=:y";
        $stmt = $connect->prepare($request);
        $stmt->bindParam(":y", $abonnementId);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if($result == null) {
            http_response_code(204);
            $msg = ["Error: " => "Abonnement inexistant"];
            echo json_encode($msg);
        } else {
            echo json_encode($result);
        }
    } catch (PDOException $e) {
        die("Error: ". $e->getMessage());
    }

}

?>