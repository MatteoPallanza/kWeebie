<!DOCTYPE HTML>
<html lang="it">

    <head>
        <title>Scrivici - kWeebie</title>
        <meta charset="UTF-8">
        <meta name="description" content="Pagina di contatto. Attraverso l'apposito form è possibile rivolgersi al gestore del sito.">
        <meta name="keywords" content="eco, ecologia, green, sostenibilità, ambiente, natura">
        <meta name="robots" content="index, nofollow">
        <link rel="icon" href="images/favicon.gif" type="image/gif" sizes="16x16">
        <link rel="stylesheet" href="css/style.css">
        <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai|Roboto" rel="stylesheet">
    </head>

    <body>
        <?php include("sidebar.php"); ?>
        <div id="content">
            <h1>Scrivici</h1>
            Puoi contattarci compilando il form sottostante.
            <div id="form">
                <form action="scripts/form-send.php" method="POST">
                    <p>
                        <label><b>NOME</b> <span class="gray-message">(OBBLIGATORIO)</span><br>
                            <input type="text" pattern="^[a-zA-Z]+$" name="nome" autocomplete ="off" placeholder="Mario" title="Inserisci solo il tuo nome. Se ne possiedi più di uno, inserisci il primo. Non sono ammessi numeri o caratteri speciali." required>
                        </label>
                    </p>
                    <p>
                        <label><b>E-MAIL</b> <span class="gray-message">(OBBLIGATORIO)</span><br>
                            <input type="email" name="email" autocomplete ="off" placeholder="mail@esempio.it" required>
                        </label>
                    </p>
                    <p>
                        <label><b>MESSAGGIO</b> <span class="gray-message">(OBBLIGATORIO, MASSIMO 500 CARATTERI)</span><br>
                            <textarea name="messaggio" maxlength="500" placeholder="Ciao, mi piacerebbe..." required></textarea>
                        </label>
                    </p>
                    <p id="newsletter">
                        <input type="checkbox" name="newsletter" checked="checked"> Sì, desidero iscrivermi alla newsletter trimestrale <b>kWeebie</b> 
                        per ricevere nuovi suggerimenti per uno stile di vita ecosostenibile.
                    </p>
                    <p>
                        <input type="submit" value="INVIA ❯">
                    </p>
                </form>
            </div>
        </div>
    </body>
    
</html>