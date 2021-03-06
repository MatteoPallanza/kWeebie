/* Generazione della tabella. */
CREATE TABLE utenti (
  usr varchar(30) NOT NULL,
  psw varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/* Popolamento della tabella. */
INSERT INTO utenti (usr, psw) VALUES
("admin", "admin");
