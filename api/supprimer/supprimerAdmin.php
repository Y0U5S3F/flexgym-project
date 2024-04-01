<?php
function supprimerAdmin($adminId) {
    try {
        global $connect;

        $req = "DELETE from admin where adminId=:y";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":y", $adminId);
        $stmt->execute();

        if($stmt->rowCount() == 0) {
            http_response_code(400);
            $msg = ["erreur" => "admin non existant"];
            echo json_encode($msg);
        } else {
            echo json_encode(['success' => 'Admin supprime']);
        }
    } catch (PDOException $e) {
        $connect->exec("SET FOREIGN_KEY_CHECKS=1;");
        http_response_code(500);
        echo json_encode(["erreur" => $e->getMessage()]);
    }
}
?>