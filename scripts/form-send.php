<?php

    /* Salvo i dati inviati dal form "Scrivimi" in delle variabili dedicate. */
    $nome       = $_POST["nome"];
    $email      = $_POST["email"];
    $messaggio  = $_POST["messaggio"];
    if ( isset($_POST["newsletter"]) ) {
        $newsletter = 'y';
    } else { 
        $newsletter = 'n';
    }
    
    /* Eseguo lo script che effettua la connessione al database. */
    include("db-connect.php");
	
	try {
        /* Genero la query SQL da eseguire sul database e la eseguo. */
		$sql = "INSERT INTO scrivici (nome,email,messaggio,newsletter)
                VALUES ('$nome','$email','$messaggio','$newsletter');"; 
        $query = $conn->prepare($sql);
        $query->execute();
        
 	} catch (PDOException $e) {
        /* Se qualcosa va storto durante procedura avviso l'utente e termino lo script. */
        exit("<b>Errore</b>: impossibile eseguire la query!<br>
              Controlla 'scripts/form-send.php'.").$e-> getMessage();
    }

    /* Redireziono l'utente al form di contatto. */
    header("location: ../messaggio-inviato.php");
?>