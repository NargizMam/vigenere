const express = require('express');
const app = express();
const port = 8000;

app.get('/:index', (req, res) => {
    res.send(`<h1>${req.params.index.toUpperCase()}</h1>`);
});

app.listen(port, () => {
    console.log(`Server running at ${port} port!`)
});