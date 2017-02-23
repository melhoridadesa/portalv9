var express = require('express');
var router  = express.Router();

// Rota para o inicio do site
router.get('/', require('./home/index'));
router.get('/quemsomos', require('./quemsomos/index'));
router.get('/inscricoes', require('./inscricoes/index'));
router.get('/noticias', require('./noticias/index'));
module.exports = router;