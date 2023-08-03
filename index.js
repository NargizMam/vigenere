const express = require('express');
const { encrypt, decrypt } = require('vigenere-cipher');
const app = express();
const port = 8000;
const password = 'password';

app.get('/:index', (req, res) => {
    res.send(`<h1>${req.params.index.toUpperCase()}</h1>`);
});

app.get('/encode/:id', (req, res) =>{
    const cipherText = encrypt(req.params.id, password);
    res.send(`${cipherText.toUpperCase()}`);
});

app.get('/decode/:id', (req, res) => {
    const plainText = decrypt(req.params.id, password);
    res.send(`${plainText.toUpperCase()}`);
});

app.listen(port, () => {
    console.log(`Server running at ${port} port!`)
});