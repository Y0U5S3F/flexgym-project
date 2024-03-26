<?php
function chargerTousCour() {
    try {
        global $connect;
        $req = "SELECT * FROM cour";
        $stmt = $connect->prepare($req);
        $stmt->execute();
    
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        header("Content-Type: application/json");
        
        echo json_encode($result);
    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}

function chargerCour($courId) {
    try {
        global $connect;

        $request = "SELECT * FROM cour WHERE courId=:y";
        $stmt = $connect->prepare($request);
        $stmt->bindParam(":y", $courId);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if($result == null) {
            http_response_code(204);
            $msg = ["Error: " => "cour inexistant"];
            echo json_encode($msg);
        } else {
            echo json_encode($result);
        }
    } catch (PDOException $e) {
        die("Error: ". $e->getMessage());
    }

}

?>