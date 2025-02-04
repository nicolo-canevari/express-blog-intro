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

