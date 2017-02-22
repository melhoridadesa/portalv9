var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'dbmelhoridade'
});
var app = express();

connection.connect(function(err){
    if(!err) {
        console.log("Database conectado ... \n\n");
    } else {
        console.log("Erro ao conectar ... \n\n");
    }
});

app.get("/",function(req,res){
    connection.query('select titulo,link,imagem from tb_banner;', function(err, rows, fields) {
        res.json(rows);
    });
});

app.listen(4000);
