<?php
function chargerTousOffre() {
    try {
        global $connect;
        $req = "SELECT * FROM offre";
        $stmt = $connect->prepare($req);
        $stmt->execute();
    
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        header("Content-Type: application/json");
        
        echo json_encode($result);
    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}

function chargerOffre($offreId) {
    try {
        global $connect;

        $request = "SELECT * FROM offre WHERE offreId=:y";
        $stmt = $connect->prepare($request);
        $stmt->bindParam(":y", $offreId);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if($result == null) {
            http_response_code(204);
            $msg = ["Error: " => "offre inexistant"];
            echo json_encode($msg);
        } else {
            echo json_encode($result);
        }
    } catch (PDOException $e) {
        die("Error: ". $e->getMessage());
    }

}

?>