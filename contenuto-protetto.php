<?php
    session_start();

    /* Se il visitatore non è autenticato come utente registrato,
       viene redirezionato alla pagina "Area riservata". */
    if( !(isset($_SESSION['utente'])) ){
      header("location: area-riservata.php");
    }
?>

<!DOCTYPE HTML>
<html lang="it">

    <head>
        <title> Contenuto protetto - kWeebie </title>
        <meta charset="UTF-8">
        <meta name="description" content="Cotenuto protetto del sito.">
        <meta name="robots" content="noindex, nofollow">
        <link rel="icon" href="images/favicon.gif" type="image/gif" sizes="16x16">
        <link rel="stylesheet" href="css/style.css">
        <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai|Roboto" rel="stylesheet">
    </head>

    <body>
        <?php include("sidebar.php"); ?>
        <div id="content">
            <h1>Contenuto protetto</h1>
            <div style="text-align:center;font-size:18pt">
                <p>Se visualizzi questa pagina, sei attualmente collegato al sito con una <b>sessione PHP</b>.</p>
                <p><img src="images/contenuto-protetto.png" alt="logo kWeebie con faccia divertente" /></p>
                <form action="scripts/logout.php">
                    <input type="submit" name="logout" value="LOGOUT ❯" />
                </form>
            </div>
        </div>
    </body>

</html>