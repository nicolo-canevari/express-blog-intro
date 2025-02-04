# express-blog-intro
Esercizio: express-blog-intro

Consegna:
1. Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.

2. Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto “Server del mio blog”

3. Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)

4. Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.

5. Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.

6. Testare su postman

-------------------------------------------------------------------------

Logica:
1. Creo una nuova cartella per il progetto, inizializzo il progetto e installo express e nodemon ( npm run watch ).

2. Aggiungo il file index.js e la cartella con le immagini.

3. Importo il pacchetto Express all'interno di index.js, creo l'app e definisco la porta.

4. Su index.js definisco la rotta e creo la funzione di ascolto per port.   

5. Creo l'array di oggetti.

6. Rotta per /bacheca, restituzione dell'array come risposta in formato json.

7. Configuro gli asset statici per la visualizzazione delle immagini all'interno della cartella del progetto. 