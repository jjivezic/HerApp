var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main'); //ovo je  controler iz main.js 

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// }); i ruta i kontroler zajedno

// var homepageController = function(req, res, next) {
//   res.render('index', { title: 'Express controller for HomePage ' });
// };  rota i kontroler razdvojeni
// router.get('/', homepageController);

//samo ruta a controler je dodat u main.js  kao modul.exports.index

router.get('/', ctrlMain.index); // index jer u main.js je module.export.index

module.exports = router;
