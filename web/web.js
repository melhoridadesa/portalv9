"use strict";
let express = require('express');
let http = require('http');
let app = express();
let mustacheExpress = require('mustache-express');


// middlewares
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/resources/views');
app.use(express.static(__dirname + '/resources/views'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/modules', express.static(__dirname + '/node_modules'));

// Application Routes
var routes = require('./routes')
routes.set(app);

//INICIA O SERVER
const PORT = '3000';

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});