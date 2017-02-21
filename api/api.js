"use strict";
var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.json({
    	id: 1,
    	nome: 'VOU TROCAR DE NOVO'
    });
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});