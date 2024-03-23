<?php 

function ajouterClient($data){
    try {
        global $connect;

        $req = "INSERT INTO client(nom,prenom,email,pass,tel,datenais) Values(:nom,:prenom,:email,:pass,:tel,:datenais)";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":nom", $data["nom"]);
        $stmt->bindParam(":prenom", $data["prenom"]);
        $stmt->bindParam(":email", $data["email"]);
        $stmt->bindParam(":pass", $data["pass"]);
        $stmt->bindParam(":tel", $data["tel"]);
        $stmt->bindParam(":datenais", $data["datenais"]);
        $stmt->execute();
        echo $stmt->rowCount();
        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }

?>