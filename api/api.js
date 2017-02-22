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

app.get("/tb_banner",function(req,res){
    connection.query('select titulo,link,imagem from tb_banner;', function(err, rows, fields) {
        connection.end();
        res.json(rows);
    });
});

app.get("/tb_usuario",function(req,res){
    connection.query('select nome,senha, from tb_usuario;', function(err, rows, fields) {
        connection.end();
        res.json(rows);
    });
});
app.get("/tb_cadastro_idoso",function(req,res){
    connection.query('select nome,idade,documento from tb_cadastro_idoso', function(err, rows, fields) {
        connection.end();
        res.json(rows);
    });
});
app.get("/tb_quemsomos",function(req,res){
    connection.query('select titulo,texto from tb_quemsomos', function(err, rows, fields) {
        connection.end();
        res.json(rows);
    });
});

app.get("/tb_quemsomos",function(req,res){
    connection.query('select imagem,titulo, texto from tb_site', function(err, rows, fields) {
        connection.end();
        res.json(rows);
    });
});

app.listen(4000);