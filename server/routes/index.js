const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // render manda a renderizar (generar y entregar)
  // la vista a el cliente (index = plantilla y  {title = Datos } )
  const emojieDataset = [
    '😎',
    '🗼',
    '😏',
    '☕',
    '🙋‍♂️',
    '👏',
    '🤓',
    '🖤',
    '💨',
    '💫',
    '🕳',
  ];
  const emojie =
    emojieDataset[Math.floor(Math.random() * emojieDataset.length)];
  res.render(
    'index',
    // Este el el View_Model
    {
      title: 'Projnotes',
      author: 'Diana Laura Paredes Tinoco',
      emojie,
    }
  );
});

module.exports = router;
