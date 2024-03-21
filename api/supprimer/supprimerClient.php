<?php

try {
    global $connexion;

    $req = "DELETE from client where id=:y";
    $stmt = $connexion->prepare($req);
    $stmt->bindParam(":y", $id);
    $resultat = $stmt->execute();
    if($resultat == 0) {
        http_response_code(400);
        $msg = ["erreur" => "non existant"];
        echo json_encode($msg);
    }
    
} catch (PDOException $e) {
    die("Error: " . $e->getMessage());
}
?>