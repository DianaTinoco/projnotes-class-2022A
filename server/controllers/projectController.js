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

// Exxportando el controlador
export default {
  index,
  add,
};
