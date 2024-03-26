<?php

function modifierCour($courId, $data){
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

        $connect->exec("SET FOREIGN_KEY_CHECKS=0;");

        $req = "UPDATE cour SET courNom=:courNom,courDetail=:courDetail,courCoach=:courCoach where courId=:courId";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":courId", $courId);
        $stmt->bindParam(":courNom", $data['courNom']);
        $stmt->bindParam(":courDetail", $data['courDetail']);
        $stmt->bindParam(":courCoach", $data['courCoach']);

        $stmt->execute();

        $connect->exec("SET FOREIGN_KEY_CHECKS=1;");

        if($stmt->rowCount() == 0) {
            http_response_code(400);
            $msg = ["erreur" => "Cour non existant"];
            echo json_encode($msg);
        } else {
            echo json_encode(['success' => 'Cour modifie']);
        }
    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}

?>