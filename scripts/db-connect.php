<?php

	/* Imposto le credenziali per l'accesso al database. */
	$dsn = "mysql:dbname=your.database;host=localhost";
	$username = "your.username";	
	$password = "your.password";
	
	try{
		/* Mi connetto al database utilizzando le credenziali impostate in precedenza. */
		$conn = new PDO($dsn,$username,$password);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}
	catch(PDOException $e){
		/* Se non riesco a connettermi avviso l'utente e termino lo script. */
		exit("<b>Errore</b>: connessione al database fallita!<br>
			  Controlla 'scripts/db-connect.php'.").$e-> getMessage();
	}	

?>
