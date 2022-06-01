import log from '../Config/winston';

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
  const { errorData: error } = req;
  if (error) {
    log.info('Se retorna objeto de error de validacion');
    // La validacion fallo
    res.status(200).json(error);
  } else {
    // Desestructurando la informacion
    // del formulario
    const { validData: project } = req;
    log.info('Se retorna objeto Projecto valido');
    // Regresar un objeto con los datos
    // obtenidos del formulario
    res.status(200).json(project);
  }
};

// Exxportando el controlador
export default {
  index,
  add,
  addPost,
};
