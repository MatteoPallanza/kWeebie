<!DOCTYPE HTML>
<html lang="it">

    <head>
        <title>Mappa ecocompattatori - kWeebie</title>
        <meta charset="UTF-8">
        <meta name="description" content="Sito per la sensibilizzazione verso uno stile di vita ecosostenibile.">
        <meta name="keywords" content="eco, ecologia, green, sostenibilità, ambiente, natura">
        <meta name="robots" content="index, nofollow">
        <link rel="icon" href="images/favicon.gif" type="image/gif" sizes="16x16">
        <link rel="stylesheet" href="css/style.css">
        <!-- Aggiungo il riferimento al CSS di Leaflet. -->
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
            integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
            crossorigin=""/>
        <!-- Aggiungo il riferimento allo sript di Leaflet. -->
        <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
            integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
            crossorigin=""></script>
        <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai|Roboto" rel="stylesheet">
    </head>

    <body>
        <?php include("sidebar.php"); ?>
        <div id="content">
            <a href="http://www.riciclia.it/" target="_blank"><img src="images/riciclia-logo.png" alt="logo di riciclia" style="float:right"></a>
            <h1>Mappa ecocompattatori</h1>
            <p>In questa pagina è presente una mappa degli ecocompattatori Riciclia presenti in tutta Italia. In questi innovativi macchinari è possibile
            conferire lattine in alluminio, bottiglie di plastica in PET, flaconi e tappi di plastica, ottenendo sconti e omaggi presso le attività convenzionate.</p>
            <p>Gli ecocompattatori contrassegnati da un'icona verde (<img src="images/marker-icon-green.png" alt="icona verde" height="15" />) sono posizionati in luoghi pubblici, 
            quelli contrassegnati con un'icona blu (<img src="images/marker-icon.png" alt="icona blu" height="15" />) sono posizionati in luoghi commerciali aperti al pubblico con 
            orari di apertura estesi.</p>        
            <p>Gli ecocompattatori indicati con un'icona rossa (<img src="images/marker-icon-red.png" alt="icona rossa" height="15" />) sono accessibili solo da persone autorizzate.</p>
            <p>Per una lista aggiornata di tutti gli ecocompattatori presenti nella tua zona, visita la <a href="http://www.riciclia.it/i-nostri-concessionari/" target="_blank">
            lista</a> sul sito Riciclia.</p>
            <div id="map"></div>
            <script src="scripts/ecocomp-mappa.js"></script>
            <br>
            <hr>
            <h2>Tabella</h2>
            <p>Nella seguente tabella sono elencati tutti gli ecocompattatori presenti nella mappa sovrastante, da quello più a nord a quello più a sud.</p>
            <?php include("scripts/db-connect.php"); ?>
            <div id="table-wrapper">
                <table id="ecocompattatori">
                    <tr>
                        <th>Nome</th>
                        <th>Indirizzo</th>	
                        <th>CAP</th>	
                        <th>Comune</th>	
                        <th>Accessibilità</th>
                        <th colspan="2">Coordinate</th>
                    </tr>
                    <?php	
                        try {
                            /* Genero la query SQL da eseguire sul database e la eseguo. */
                            $sql = "SELECT * FROM ecocompattatori;" ;	
                            $query = $conn->prepare($sql);
                            $query->execute();
                        } catch (PDOException $e) {
                            /* Se qualcosa va storto durante procedura avviso l'utente e termino lo script. */
                            exit("<b>Errore</b>: impossibile eseguire la query!<br>
                                    Controlla 'mappa-ecocompattatori.php'.").$e-> getMessage();
                        }
                        
                        /* Inserisco nella tabella tutte le righe del database. */
                        $result = $query->fetchAll();
                        foreach ($result as $row) {
                    ?>
                    <tr>		
                        <td><?php if($row["nome"] != NULL) echo $row["nome"]; ?></td>
                        <td><?php if($row["indirizzo"] != NULL) echo$row["indirizzo"]; ?></td>		
                        <td><?= $row["cap"] ; ?></td>		
                        <td><?= $row["comune_provincia"] ; ?></td>
                        <td id="accessibilità">
                            <?php switch($row["tipo"]) {
                                case "public": echo "<span style='color:#03bf00'>PUBBLICO</span>"; break;
                                case "open": echo "<span style='color:#2b7cff'>APERTO</span>"; break;
                                case "restricted": echo "<span style='color:#bf0000'>LIMITATO</span>"; break;
                                default: break;
                            }   
                            ?>
                        </td>
                        <td style="text-align:right;"><?= $row["latitudine"].","; ?></td>		
                        <td style="text-align:left;"><?= $row["longitudine"]; ?></td>		    
                    </tr>		
                    <?php	
                        }
                    ?>
                </table>
            </div>
        </div>
    </body>
    
</html>