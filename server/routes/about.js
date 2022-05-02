// Importamos Express
const express = require('express');
// Importamos el enrutador de express
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // render manda a renderizar (generars y entregar)

  res.render(
    'about',
    // Este el el View_Model
    {
      name: 'Diana Tinoco',
      email: 'mnmmbnsmsp@outlook.com',
      url: 'www.itgam.com/dianatinoco',
    }
  );
});

module.exports = router;
