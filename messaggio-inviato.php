<!DOCTYPE HTML>
<html lang="it">

    <head>
        <title>Messaggio inviato - kWeebie</title>
        <meta charset="UTF-8">
        <meta name="description" content="Pagina di conferma dell'invio del messaggio.">
        <meta name="keywords" content="eco, ecologia, green, sostenibilità, ambiente, natura">
        <meta name="robots" content="noindex, nofollow">
        <link rel="icon" href="images/favicon.gif" type="image/gif" sizes="16x16">
        <link rel="stylesheet" href="css/style.css">
        <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai|Roboto" rel="stylesheet">
    </head>

    <body>
        <?php include("sidebar.php"); ?>
        <div id="content">
            <h1>Messaggio inviato</h1>
            <div id="sent">
                ✔️ Il messaggio è stato inviato correttamente. Riceverai una risposta nelle prossime 48 ore.
            </div>
            <p>Verrai reindirizzato alla pagina principale del sito entro pochi secondi. Se ciò non dovesse accadere, clicca <a href="/"><b>qui</b></a>.</p>
            <?php header( "refresh:7;url=index.php" ); ?>
        </div>
    </body>
    
</html>