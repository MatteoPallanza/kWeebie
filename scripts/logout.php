<?php
    session_start();

    /* Cancello la sessione e redireziono l'utente alla pagina di accesso. */
    session_destroy();
    header("location: ../area-riservata.php");
    exit;
?>