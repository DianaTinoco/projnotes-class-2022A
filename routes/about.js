// Importamos Express
var express = require('express');
// Importamos el enrutador de express
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // render manda a renderizar (generar y entregar)
  
  res.render('about', 
  // Este el el View_Model
  {  
    name: 'Diana Tinoco', 
    email: "mnmmbnsmsp@outlook.com",
    url:'www.itgam.com/dianatinoco'
  }); 
});

module.exports = router;
