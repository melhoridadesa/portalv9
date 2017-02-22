var express = require('express');
var router  = express.Router();

// Rota para o inicio do site
router.get('/', require('./home/index'));
//router.get('/inscricoes', require('./inscricoes/index'));
//router.get('/quemsomos', require('./quemsomos/index'));
//router.get('/contato', require('./contato/index'));
module.exports = router;