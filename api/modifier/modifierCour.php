<?php

function modifierCour($courId, $data, $file){
    try {
        global $connect;

        $dir = $_SERVER['DOCUMENT_ROOT'] . '/img/';
        $image = $dir . basename($file['name']);

        if ($file['error'] !== UPLOAD_ERR_OK) {
            echo json_encode(['error' => 'File upload error: ' . $file['error']]);
            return;
        }

        if (!move_uploaded_file($file['tmp_name'], $image)) {
            echo json_encode(['error' => 'Failed to move uploaded file']);
            return;
        }

        $req = "SELECT * FROM personnel WHERE personnelId=:courCoach AND personnelRole='Coach'";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":courCoach", $data['courCoach']);
        $stmt->execute();
        if ($stmt->rowCount() == 0) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid courCoach']);
            return;
        }

        $req = "UPDATE cour SET courNom=:nom, courDetail=:detail, courCoach=:coach, courImg=:img WHERE courId=:id";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":nom", $data["courNom"]);
        $stmt->bindParam(":detail", $data["courDetail"]);
        $stmt->bindParam(":coach", $data["courCoach"]);
        $stmt->bindParam(":img", $image);
        $stmt->bindParam(":id", $courId);
        $stmt->execute();

        if($stmt->rowCount() == 0) {
            http_response_code(400);
            echo json_encode(["error" => "Failed to modify Cour"]);
        } else {
            echo json_encode(['success' => 'Image uploaded and Cour modified successfully']);
        }

    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => "Server error: " . $e->getMessage()]);
    }
}

?>