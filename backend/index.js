//cd C:\Users\kaeli\Documents\Dev\React\collect-site\backend
//node index.js

const express = require('express');
const app = express();
const db = require('./db')


app.get('/items', (req, res) => {
    db.getItems()
    .then(response => {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).send(response);
    })  
    .catch(error => {
        res.status(500).send(error);
    })
})

app.get('/itemsSortMedia', (req, res) => {
    db.getItemsSortMedia()
    .then(response => {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).send(response);
    })  
    .catch(error => {
        res.status(500).send(error);
    })
})

app.get('/itemsSortRetailer', (req, res) => {
    db.getItemsSortRetailer()
    .then(response => {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).send(response);
    })  
    .catch(error => {
        res.status(500).send(error);
    })
})

app.get('/itemsSortRelease', (req, res) => {
    db.getItemsSortRelease()
    .then(response => {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).send(response);
    })  
    .catch(error => {
        res.status(500).send(error);
    })
})

app.get('/itemsSortSeries', (req, res) => {
    db.getItemsSortSeries()
    .then(response => {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).send(response);
    })  
    .catch(error => {
        res.status(500).send(error);
    })
})

app.get('/label', (res) => {
    db.getItemLabel()
    .then(response => {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).send(response);
    })  
    .catch(error => {
        res.status(500).send(error);
    })
})

app.listen(3001, () => {
    console.log('listening on port 3001')
})

