"use strict";
var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.json({
    	id: 1,
    	nome: 'VOU TROCAR DE NOVO'
    });
});

app.listen(4000, () => {
    console.log('http://localhost:4000');
});