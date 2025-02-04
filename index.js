// importo il pacchetto express
const express = require('express');
// creo l'applicazione Express per configurare il server e le rotte
const app = express();
// porta su cui il server ascolterà le richieste HTTP
const port =3000;

// funzione che "ascolta" la porta 3000
app.listen(port, () => {

    // stampo sul terminale
    console.log('Server in ascolto sulla porta ${port}')
    
});


// definisco la rotta principale
app.get('/', (req, res) => {

    // http://localhost:3000
    res.send('Server del mio blog')

});


// creazione dell'array di oggetti
const posts = [

    {
        // http://localhost:3000/images/ciambellone.jpeg
        titolo: 'Ciambellone',
        contenuto: 'Contenuto del primo post',
        immagine: '/images/ciambellone.jpeg',
        tags: ['nodejs', 'express'],
    },
    {
        // http://localhost:3000/images/cracker_barbabietola.jpeg
        titolo: 'Cracker Barbabietola',
        contenuto: 'Contenuto del secondo post',
        immagine: '/images/cracker_barbabietola.jpeg',
        tags: ['nodejs', 'express'],
    },
    {
        // http://localhost:3000/images/pane_fritto_dolce.jpeg
        titolo: 'Pane fritto dolce',
        contenuto: 'Contenuto del terzo post',
        immagine: '/images/pane_fritto_dolce.jpeg',
        tags: ['nodejs', 'express'],
    },
    {
        // http://localhost:3000/images/pasta_barbabietola.jpeg
        titolo: 'Pasta barbabietola',
        contenuto: 'Contenuto del quarto post',
        immagine: '/images/pasta_barbabietola.jpeg',
        tags: ['nodejs', 'express'],
    },
    {
        // http://localhost:3000/images/torta_paesana.jpeg
        titolo: 'Torta paesana',
        contenuto: 'Contenuto del quinto post',
        immagine: '/images/torta_paesana.jpeg',
        tags: ['nodejs', 'express'],
    }
    
];

// rotta per /bacheca che restituirà l'arrey dei post
app.get('/bacheca', (req, res) => {

    // http://localhost:3000/bacheca
    // risposta in formato json
    res.json(posts);

});

// gestine dei file statici della cartella images
app.use('/images', express.static('images'));