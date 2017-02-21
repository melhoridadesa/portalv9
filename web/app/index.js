var express = require('express');
var router  = express.Router();

// Rota para o inicio do site
router.get('/', require('./home/index'));
//router.get('/cadastro', require('./cadastro/index'));

module.exports = router;