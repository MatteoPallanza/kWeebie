# :scroll:Informazioni sul sito

## 1. Descrizione del cliente e obiettivo del sito
*kWeebie* (di seguito "il sito") è stato sviluppato da :link:[Matteo Pallanza](https://github.com/MatteoPallanza) (di seguito "il webmaster") per conto di ***kWeebie ONLUS*** (di seguito "l'organizzazione").

*kWeebie ONLUS* è un'organizzazione non lucrativa di utilità sociale impegnata nella promozione di uno stile di vita ecosostenibile.

> **NOTA**: *kWeebie ONLUS* è un'organizzazione fittizia, ideata a meri scopi didattici.

L'obiettivo del sito è sensibilizzare i visitatori a uno sviluppo sostenibile, attraverso semplici consigli pratici da applicare durante la quotidianità.

## 2. Panoramica del sito
Il sito è composto da 5 pagine (e 2 pagine ausiliarie).

Il sito è composto esclusivamente da pagine dinamiche (*.php).

La pagina **Home** (:link:*[index.php](index.php)*) fornisce una breve introduzione all'ecosostenibilità e allo sviluppo sostenibile, spiegando perché questi temi rivestono notevole importanza ai giorni nostri. Successivamente vengono raccontate la storia e la mission dell'organizzazione.
È presente un bottone per effettuare una donazione tramite *PayPal*.

La pagina **Cosa posso fare?** (:link:*[cosa-posso-fare.php](cosa-posso-fare.php)*) è composta da una galleria fotografica implementata in JavaScript. Attraverso la galleria vengono dispensati consigli da seguire nella quotidianità per minimizzare la propria impronta ecologica.

La pagina **Mappa ecocompattatori** (:link:*[mappa-ecocompattatori.php](mappa-ecocompattatori.php)*) contiene una mappa generata utilizzando la libreria *Leaflet JS* (versione 1.7.1) e una tabella realizzata interrogando il database del sito.
La mappa e la tabella riportano gli indirizzi di tutti gli ecocompattatori *Riciclia* presenti in Italia.
Quando un visitatore raggiunge la pagina gli viene chiesta l'autorizzazione a essere geolocalizzato; se il visitatore acconsente, verrà visualizzata la sua posizione sulla mappa.

Nella pagina **Scrivici** (:link:*[scrivici.php](scrivici.php)*) è presente un modulo di contatto. Il visitatore può compilare i campi per inviare un messaggio all'organizzazione. I campi devono essere compilati in modo adeguato, rispettando le espressioni regolari e i limiti previsti. Il visitatore può decidere di iscriversi alla newsletter trimestrale tramite una checkbox.

La pagina ausiliaria **Messaggio inviato** (:link:*[messaggio-inviato.php](messaggio-inviato.php)*) informa il visitatore dell'avvenuto invio del messaggio e poi lo redireziona alla pagina Home.

La pagina **Area riservata** (:link:*[area-riservata.php](area-riservata.php)*) permette al visitatore di autenticarsi al sito come utente registrato. Se le credenziali inserite sono presenti nel database del sito, l'accesso viene consentito, altrimenti negato. Una volta autenticato, l'utente registrato può visualizzare la pagina ausiliaria **Contenuto protetto** (:link:*[contenuto-protetto.php](contenuto-protetto.php)*) fino al termine della sessione.
Se un visitatore tenta di visualizzare la pagina *Contenuto protetto*, verrà reindirizzato alla pagina *Area riservata* per effettuare l'autenticazione.

## 3. Principali funzionalità del sito
Il sito include le seguenti funzionalità:
* Galleria di immagini con consigli pratici
* Mappa degli ecocompattatori con geolocalizzazione del visitatore
* Form di contatto con possibilità di iscrizione alla newsletter
* Area riservata agli utenti registrati

## 4. Testi, immagini e altre proprietà intellettuali presenti sul sito
I **testi** presenti sul sito sono stati realizzati dal webmaster.

Le **immagini** presenti nella galleria sono state ottenute attraverso il sito :link:*[Unsplash.com](https://unsplash.com)*. Gli autori le hanno rilasciate nel pubblico dominio e possono essere utilizzate gratuitamente anche per fini commerciali. L'immagine con le bottiglie e gli spazzolini è stata creata dal webmaster, unendo le foto promozionali dei prodotti distribuite dalle rispettive aziende.

I **dati cartografici** sono distribuiti con licenza *Open Data Commons Open Database License* dalla *OpenStreetMap Foundation*.

Le **immagini cartografiche** sono distribuite da *Mapbox*, che ne detiene tutti i diritti.

Il __logo *PayPal*__ è di proprietà di *PayPal Holdings, Incorporation*.

Il __logo *kWeebie*__ è un'opera derivata dell'emoji *Seedling* del pacchetto *Streamline Emoji*, distribuito con licenza *Creative Commons Attribuzione 4.0* da *Vincent Le Moign*.

## 5. Configurazione hardware/software del sito
Il sito è sviluppato prevalentemente utilizzando i linguaggi **HTML** e **PHP**.

Per la creazione della galleria fotografica e della mappa è stato utilizzato **JavaScript**.

Il sito risiede su un server condiviso *LiteSpeed* gestito da *Hostinger*, piattaforma controllata da *Hostinger International Ltd.*; il sito è raggiungibile all'indirizzo :link:**[matteopallanza.me/kweebie](https://matteopallanza.me/kweebie)**.

Il sito dispone di un database **MariaDB 10.2** che si occupa di memorizzare le seguenti informazioni:
* nella tabella ***ecocompattatori*** sono presenti le informazioni geografiche e toponomastiche relative agli ecocompattatori presenti in Italia; queste servono per realizzare la tabella presente nella pagina *Mappa ecocompattatori*;
* nella tabella ***scrivici*** sono presenti il nome, l'e-mail, il messaggio e il desiderio di iscrizione alla newsletter dei visitatori che hanno utilizzato il modulo di contatto presente nella pagina *Scrivici*;
* nella tabella ***utenti*** sono memorizzate le credenziali di accesso degli utenti registrati al sito.

## 6. Attività SEO-SEM, Web Marketing del sito
Nelle singole pagine sono presenti indicazioni per i bots dei motori di ricerca, all'interno del meta tag ***robots***. Tutte le pagine del sito, ad eccezione di quelle ausiliarie, verranno indicizzate.

> **NOTA**: nell'implementazione disponibile sul sito :link:[matteopallanza.me/kweebie](https://matteopallanza.me/kweebie) tutte le pagine non verranno indicizzate dai motori di ricerca.

Negli attributi ***keywords*** e ***description*** di ogni pagina sono contenute le informazioni per favorire una migliore indicizzazione.

## 7. Assistenza e formazione post-vendita del sito
Dopo il deployment, il sito è ***pronto all'uso*** e l'organizzazione non necessita di formazione specifica.

L'organizzazione, attraverso un software terzo può gestire i dati degli utenti registrati, controllare le richieste pervenute attraverso il modulo di contatto e inserire, aggiornare o rimuovere gli ecocompattatori all'interno della tabella dedicata. Per aggiornare gli ecocompattatori sulla mappa, l'organizzazione dovrà contattare il webmaster, che dovrà agire manualmente sul file :link:*[ecocomp-mappa.js](scripts/ecocomp-mappa.js)*.

Per qualsiasi problema tecnico riscontrato durante il funzionamento del sito, il cliente potrà contattare il webmaster durante i consueti orari di lavoro.

Per la fase iniziale sono previste attività di monitoraggio dei dati sulle visite al sito attraverso lo strumento di analisi fornito da *Hostinger*. Successivamente potrà essere valutata la possibilità di affidarsi a servizi più completi (e.g. *Google Analytics*), al fine di valutare il comportamento dei visitatori sul sito.

## 8. Ulteriori informazioni sul sito
Le immagini presenti sul sito sono state compresse per velocizzare il caricamento delle pagine.

Il codice HTML è stato validato tramite lo strumento *W3C Markup Validation Service*.

# :hammer_and_wrench:Installazione del sito
Per eseguire una corretta installazione del sito è necessario soddisfare **tutti** i requisiti necessari ed eseguire **tutte** le seguenti operazioni.

## 1. Requisiti
1. Disporre di un server web e di un database SQL.
2. Disporre di un access token *Mapbox*. Per ottenerlo è necessario registrarsi gratuitamente su :link:[Mapbox.com](https://mapbox.com). 
Maggiori informazioni sono disponibili a :link:[questo indirizzo](https://docs.mapbox.com/help/getting-started/access-tokens/).

## 2. Operazioni
1. :link:[Scaricare](https://github.com/MatteoPallanza/kWeebie/archive/main.zip) la repository.
2. Modificare il file *scripts/db-connect.php* inserendo il nome del database e le credenziali di accesso al posto di `your.database`, `your.username` e `your.password`.
3. Modificare il file *scripts/ecocomp-mappa.js* inserendo il proprio access token *Mapbox* al posto di `your.accessToken`.
4. Eseguire la query :link:*[full.sql](sql/full.sql)* sul proprio database.
5. Caricare tutti i file della repository sul proprio server web. È possibile omettere il caricamento della cartella *sql* e del file *README.md*.
