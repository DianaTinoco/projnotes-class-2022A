// URL: Get /
const index = (req, res) => {
  // Calculando emojis
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
  // View-Models
  const viewModel = {
    title: 'Index Controller Working!!!',
    author: 'Diana Laura Paredes Tinoco',
    emojie,
  };
  res.render('home/indexView', viewModel);
};

// URL: Get /about
const about = (req, res) => {
  res.render('home/aboutView', {
    name: 'Diana Laura',
    email: 'dtinoco152@gmail.com',
    url: 'https://github.com/DianaTinoco/primer-pwpcI-2021',
    description:
      'Aplicación que te permite registrar ideas de proyectos. PwpcII - 2022A',
    version: '0.0.alpha',
  });
};

export default {
  // Action Methods
  index,
  about,
};
