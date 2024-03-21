<?php 

function ajouterClient($data){
    try {
        global $connexion;

        $req = "INSERT INTO client(nom,prenom,email,tel,datenais) 
        Values(:nom,:prenom,:email,:tel,:datenais)";
        $stmt = $connexion->prepare($req);
        $stmt->bindParam(":nom", $data["nom"]);
        $stmt->bindParam(":prenom", $data["prenom"]);
        $stmt->bindParam(":email", $data["email"]);
        $stmt->bindParam(":tel", $data["tel"]);
        $stmt->bindParam(":datenais", $data["datenais"]);
        $stmt->execute();

        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }

?>