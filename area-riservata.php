<?php
    session_start();

    /* Se il visitatore è autenticato come utente registrato,
       viene redirezionato alla pagina "Contenuto protetto". */
    if(isset($_SESSION["utente"]))
        header("location: contenuto-protetto.php");
?>

<!DOCTYPE HTML>
<html lang="it">

    <head>
        <title> Area riservata - kWeebie </title>
        <meta charset="UTF-8">
        <meta name="description" content="Pagina di accesso all'area riservata del sito.">
        <meta name="robots" content="index, nofollow">
        <link rel="icon" href="images/favicon.gif" type="image/gif" sizes="16x16">
        <link rel="stylesheet" href="css/style.css">
        <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai|Roboto" rel="stylesheet">
    </head>

    <body>
        <?php include("sidebar.php"); ?>
        <div id="content">
            <h1>Area riservata</h1>
            <form action="scripts/login.php" method="POST">
                <fieldset>
                    <legend>Login</legend>
                    <p>
                        <label><b>USERNAME</b><br>
                            <input type="text" name="usr" required>
                        </label>
                    </p>
                    <p>
                        <label><b>PASSWORD</b><br>
                            <input type="password" name="psw" required>
                        </label>
                    </p>   
                    <p>
                        <input type="submit" name="login" value="LOGIN ❯">
                    </p>
                </fieldset>
            </form>
        </div>
    </body>

</html>