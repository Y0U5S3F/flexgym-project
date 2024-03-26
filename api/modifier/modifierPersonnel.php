<?php

function modifierClient($id, $data){
    try {
        global $connect;

        $req = "UPDATE client SET nom=:nom,prenom=:prenom,email=:email,pass=:pass,tel=:tel,datenais=:datenais where id=:id";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":id", $id);
        $stmt->bindParam(":nom", $data["nom"]);
        $stmt->bindParam(":prenom", $data["prenom"]);
        $stmt->bindParam(":email", $data["email"]);
        $stmt->bindParam(":pass", $data["pass"]);
        $stmt->bindParam(":tel", $data["tel"]);
        $stmt->bindParam(":datenais", $data["datenais"]);
        $resultat = $stmt->execute();
        echo $stmt->rowCount();
    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}

?>