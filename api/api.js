var express    = require("express");
var mysql      = require('mysql');
var bodyParser  = require('body-parser');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'dbmelhoridade'
});
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));


connection.connect(function(err){
    if(!err) {
        console.log("Database conectado ... \n\n");
    } else {
        console.log("Erro ao conectar ... \n\n");
    }
});


app.post('/login', function (req, res) {
    var data = req.body;
    
   

    connection.query('select count(1) contador from tb_usuario where nome = \''+data.nome+'\' and senha = \''+data.senha+'\';' , 
        function(err, rows, fields) {
        
        console.log(rows);
        res.json(rows);

    });

    //var nome = {nome: req.nome};
    //res.json(nome); 
});

app.post('/ins_quemsomos', function (req, res) {
    var data = req.body;
    
    console.log(data);

    connection.query('INSERT INTO dbmelhoridade.tb_quem_somos (id, titulo, texto) VALUES(1, \''+data.titulo+'\', \''+data.texto+'\') ON DUPLICATE KEY UPDATE titulo=\''+data.titulo+'\', texto=\''+data.texto+'\';' , 
        function(err, rows, fields) {
        

        res.json(rows);

    });

    //var nome = {nome: req.nome};
    //res.json(nome); 
});





app.get("/tb_banner",function(req,res){
    connection.query('select titulo,link,imagem from tb_banner;', function(err, rows, fields) {
        res.json(rows);
    });
});

app.get("/tb_usuario",function(req,res){
    connection.query('select nome,senha from tb_usuario;', function(err, rows, fields) {
        res.json(rows);
    });
});
app.get("/tb_cadastro_idoso",function(req,res){
    connection.query('select nome,idade,documento from tb_cadastro_idoso', function(err, rows, fields) {
        res.json(rows);
    });
});
app.get("/tb_quem_somos",function(req,res){
    connection.query('select titulo,texto from tb_quem_somos', function(err, rows, fields) {
        res.json(rows);
    });
});

app.get("/tb_site",function(req,res){
    connection.query('select imagem,titulo, texto from tb_site', function(err, rows, fields) {
        res.json(rows);
    });
});

app.listen(4000);
