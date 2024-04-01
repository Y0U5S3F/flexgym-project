<?php
function chargerTousActivite() {
    try {
        global $connect;
        $req = "SELECT * FROM calendrier";
        $stmt = $connect->prepare($req);
        $stmt->execute();
    
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        header("Content-Type: application/json");
        
        echo json_encode($result);
    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}

function chargerActivite($activiteId) {
    try {
        global $connect;

        $request = "SELECT * FROM calendrier WHERE activiteId=:y";
        $stmt = $connect->prepare($request);
        $stmt->bindParam(":y", $activiteId);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if($result == null) {
            http_response_code(204);
            $msg = ["Error: " => "Activite inexistant"];
            echo json_encode($msg);
        } else {
            echo json_encode($result);
        }
    } catch (PDOException $e) {
        die("Error: ". $e->getMessage());
    }

}

?>