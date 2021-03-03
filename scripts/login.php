<?php
    session_start();

    /* Salvo i dati inviati dal form "Login" in delle variabili dedicate. */
    $usr = $_REQUEST["usr"];
    $psw = $_REQUEST["psw"];

    /* Eseguo lo script che effettua la connessione al database. */
    include("db-connect.php");

    try {
        /* Genero la query SQL da eseguire sul database e la eseguo. */
        $sql = "SELECT 1 FROM utenti WHERE usr='$usr' AND psw='$psw'";
        $query = $conn->prepare($sql);
        $query->execute();
    } catch (PDOException $e) {
        /* Se qualcosa va storto durante procedura avviso l'utente e termino lo script. */
        exit("<b>Errore</b>: impossibile eseguire la query!<br>
              Controlla 'scripts/login.php'.").$e-> getMessage();
    }
    
    /* Se è presente una corrispondenza sul database, consento l'accesso all'utente. */
    if($query->fetchColumn()) {
        $_SESSION["utente"]=$usr;
        header("location: ../contenuto-protetto.php");
    }
    else {
        header("location: ../area-riservata.php");
    }
?>
