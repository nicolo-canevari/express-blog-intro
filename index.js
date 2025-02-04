// importo il pacchetto express
const express = require('express');
// creo l'applicazione Express per configurare il server e le rotte
const app = express();
// porta su cui il server ascolterà le richieste HTTP
const port =3000;

// funzione che "ascolta" la porta 3000
app.listen(port, () => {

    console.log('Server in ascolto sulla porta ${port}')
    
});


// definisco la rotta principale
app.get('/', (req, res) => {

    res.send('Server del mio blog')

});


// creazione dell'array di oggetti
const posts = [
    {
        titolo: 'Ciambellone',
        contenuto: 'Contenuto del primo post',
        immagine: '/images/ciambellone.jpeg',
        tags: ['nodejs', 'express'],
    },
    {
        titolo: 'Cracker Barbabietola',
        contenuto: 'Contenuto del secondo post',
        immagine: '/images/cracker_barbabietola.jpeg',
        tags: ['nodejs', 'express'],
    },
    {
        titolo: 'Pane fritto dolce',
        contenuto: 'Contenuto del terzo post',
        immagine: '/images/pane_fritto_dolce.jpeg',
        tags: ['nodejs', 'express'],
    },
    {
        titolo: 'Pasta barbabietola',
        contenuto: 'Contenuto del quarto post',
        immagine: '/images/pasta_barbabietola.jpeg',
        tags: ['nodejs', 'express'],
    },
    {
        titolo: 'Torta paesana',
        contenuto: 'Contenuto del quinto post',
        immagine: 'torta_paesana.jpeg',
        tags: ['nodejs', 'express'],
    }
];