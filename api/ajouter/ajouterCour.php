<?php 

function ajouterCour($data){
    try {
        global $connect;

        $req = "SELECT * FROM personnel WHERE personnelId=:courCoach AND personnelRole='Coach'";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":courCoach", $data['courCoach']);
        $stmt->execute();
        if ($stmt->rowCount() == 0) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid courCoach']);
            return;
        }

        $req = "INSERT INTO cour(courNom,courDetail,courCoach) 
        Values(:nom,:detail,:coach)";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":nom", $data["courNom"]);
        $stmt->bindParam(":detail", $data["courDetail"]);
        $stmt->bindParam(":coach", $data["courCoach"]);
        $stmt->execute();

        if($stmt->rowCount() == 0) {
            http_response_code(400);
            $msg = ["erreur" => "Cour non Cree"];
            echo json_encode($msg);
        } else {
            echo json_encode(['success' => 'Cour Cree']);
        }

    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}

?>