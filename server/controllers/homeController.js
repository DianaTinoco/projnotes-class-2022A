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
  res.render('index', viewModel);
};

// URL: Get /about
const about = (req, res) => {
  res.render('home/aboutView', {
    name: 'Diana Laura',
    email: 'dtinoco152@gmail.com',
    url: 'https:',
  });
};

export default {
  // Action Methods
  index,
  about,
};
