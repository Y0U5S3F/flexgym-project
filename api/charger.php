<?php

try {
    global $connect;
    $req = "SELECT * FROM client";
    $stmt = $connexion->prepare($req);
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    header("Content-Type: application/json");
    
    echo json_encode($result);
} catch (PDOException $e) {
    die("Error: " . $e->getMessage());
}
?>