"use strict";
var express = require('express');
var app = express();

app.get('/', function(req, res) {

    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'mdba2007',
        database : 'dbmelhoridade'
    });

    connection.connect();

    connection.query('select titulo,link,imagem from tb_banner;',
        function (error, results, fields) {
        if (error){
            console.log(error);
        }else {
            res.json(results);
        }

    });

    connection.end();
});



app.listen(4000, function() {
    console.log('http://localhost:4000');
});