var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // render manda a renderizar (generar y entregar)
  // la vista a el cliente (index = plantilla y  {title = Datos } )
  let emojieDataset = ['😎','🗼','😏','☕','🙋‍♂️','👏','🤓','🖤'];
  let emojie = emojieDataset[Math.floor(Math.random()* emojieDataset.length)];
  res.render('index', 
  // Este el el View_Model
  { 
    title: 'Express', 
    author: 'Diana Laura Paredes Tinoco', 
    emojie 
  }); 
});

module.exports = router;
