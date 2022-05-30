/* Action Methods */

// Lista de proyectos
// GET /projects | GET /projects/index
const index = (req, res) => {
  res.send('Listando proyectos 🚧');
  // TODO: Agregando codigo de listado de proyectos
};

// Agregando ideas de proyectos
// GET /projects/add
const add = (req, res) => {
  res.render('projects/addProjectView', {});
  // TODO: Agregando codigo de ideas de proyectos
};

// Procesa el formulario que Agrega ideas de proyectos
// POST /projects/add
const addPost = (req, res) => {
  // Desestructurando la informacion
  // del formulario
  const { name, description } = req.body;
  // Regresar un objeto con los datos
  // obtenidos del formulario
  res.status(200).json({ name, description });
};

// Exxportando el controlador
export default {
  index,
  add,
  addPost,
};
