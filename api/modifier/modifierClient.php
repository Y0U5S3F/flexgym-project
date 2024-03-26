<?php

function modifierClient($id, $data){
    try {
        global $connect;

        $req = "UPDATE clients SET clientNom = :clientNom, clientPrenom = :clientPrenom, clientEmail = :clientEmail, clientPass = :clientPass, clientTel = :clientTel, clientDatenais = :clientDatenais WHERE clientId = :clientId";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(':clientNom', $data['clientNom']);
        $stmt->bindParam(':clientPrenom', $data['clientPrenom']);
        $stmt->bindParam(':clientEmail', $data['clientEmail']);
        $stmt->bindParam(':clientPass', $data['clientPass']);
        $stmt->bindParam(':clientTel', $data['clientTel']);
        $stmt->bindParam(':clientDatenais', $data['clientDatenais']);
        $stmt->bindParam(':clientId', $id);
        $resultat = $stmt->execute();
        echo $stmt->rowCount();
    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}

?>