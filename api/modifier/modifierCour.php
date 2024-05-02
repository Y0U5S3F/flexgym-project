<?php
function modifierCourImg($courId, $imageData, $contentType){
    global $connect;

    $req = "SELECT courImg FROM cour WHERE courId=:id";
    $stmt = $connect->prepare($req);
    $stmt->bindParam(":id", $courId);
    $stmt->execute();
    $oldImagePath = $stmt->fetchColumn();

    if ($oldImagePath && file_exists($_SERVER['DOCUMENT_ROOT'] . $oldImagePath)) {
        unlink($_SERVER['DOCUMENT_ROOT'] . $oldImagePath);
    }

    $tmpName = tempnam(sys_get_temp_dir(), 'img');
    file_put_contents($tmpName, $imageData);

    $extension = '.' . explode('/', $contentType)[1];
    
    $file = [
        'name' => $courId . $extension,
        'tmp_name' => $tmpName,
        'error' => UPLOAD_ERR_OK,
    ];

    $dir = '/img/';
    $imagePath = $dir . $file['name'];
    $absolutePath = $_SERVER['DOCUMENT_ROOT'] . $imagePath;

    if ($file['error'] !== UPLOAD_ERR_OK) {
        return ['error' => 'File upload error: ' . $file['error']];
    }

    if (!rename($file['tmp_name'], $absolutePath)) {
        return ['error' => 'Failed to move uploaded file'];
    }

    $req = "UPDATE cour SET courImg=:img WHERE courId=:id";
    $stmt = $connect->prepare($req);
    $stmt->bindParam(":img", $imagePath);
    $stmt->bindParam(":id", $courId);
    $stmt->execute();

    if($stmt->rowCount() == 0) {
        return ['error' => 'Failed to update courImg'];
    } else {
        return ['success' => 'Image uploaded and courImg updated successfully'];
    }
}

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

        $req = "UPDATE cour SET courNom=:nom, courDetail=:detail, courCoach=:coach WHERE courId=:id";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":nom", $data["courNom"]);
        $stmt->bindParam(":detail", $data["courDetail"]);
        $stmt->bindParam(":coach", $data["courCoach"]);
        $stmt->bindParam(":id", $courId);
        $stmt->execute();

        if($stmt->rowCount() == 0) {
            http_response_code(400);
            echo json_encode(["error" => "Failed to modify Cour"]);
        } else {
            echo json_encode(['success' => 'Cour modified successfully']);
        }

    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => "Server error: " . $e->getMessage()]);
    }
}
?>