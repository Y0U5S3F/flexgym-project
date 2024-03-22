<?php

function chargerTousClient() {
    try {
        global $connect;
        $req = "SELECT * FROM client";
        $stmt = $connect->prepare($req);
        $stmt->execute();
    
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        header("Content-Type: application/json");
        
        echo json_encode($result);
    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}

function chargerClient($id) {
    try {
        global $connect;

        $request = "SELECT * FROM client WHERE id=:y";
        $stmt = $connect->prepare($request);
        $stmt->bindParam(":y", $id);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if($result == null) {
            http_response_code(204);
            $msg = ["Error: " => "client inexistant"];
            echo json_encode($msg);
        } else {
            echo json_encode($result);
        }
    } catch (PDOException $e) {
        die("Error: ". $e->getMessage());
    }

}

?>