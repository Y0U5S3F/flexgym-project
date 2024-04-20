<?php 
function ajouterClient($data){
    try {
        global $connect;

        $req = "INSERT INTO client(clientNom,clientPrenom,clientEmail,clientPass,clientTel,clientDatenais) Values(:nom,:prenom,:email,:pass,:tel,:datenais)";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":nom", $data["clientNom"]);
        $stmt->bindParam(":prenom", $data["clientPrenom"]);
        $stmt->bindParam(":email", $data["clientEmail"]);
        $stmt->bindParam(":pass", $data["clientPass"]);
        $stmt->bindParam(":tel", $data["clientTel"]);
        $stmt->bindParam(":datenais", $data["clientDatenais"]);
        $stmt->execute();

        if($stmt->rowCount() == 0) {
            http_response_code(400);
            $msg = ["erreur" => "Client non Cree"];
            echo json_encode($msg);
        } else {
            echo json_encode(['success' => 'Client Cree']);
        }

        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }
?>