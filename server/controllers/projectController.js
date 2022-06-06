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
  const { errorData } = req;
  let project = {};
  let errorModel = {};
  if (errorData) {
    log.info('Se retorna objeto de error de validacion');
    // Rescatando el objeto validacion
    project = errorData.value;
    // Usamos reduce para generar un objeto
    // de errores a partir de inner
    errorModel = errorData.inner.reduce((prev, curr) => {
      // Creamos una variable temporal para evitar
      // el error "no-param-reassign" el cual me
      // exorta a evitar reasignar los valores de
      // los argumentos una funcion
      const newVal = prev;
      newVal[`${curr.path}Error`] = curr.message;
      return newVal;
    }, {});
    // La validacion fallo
    // res.status(200).json(errorData);
  } else {
    // Desestructurando la informacion
    // del formulario del objeto valido
    const { validData } = req;
    log.info('Se retorna objeto Projecto valido');
    // Regresar un objeto con los datos
    // obtenidos del formulario
    // res.status(200).json(validData);
    project = validData;
  }
  // Respondemos con los viewModels generados
  res.render('projects/addProjectView', { project, errorModel });
  // res.status(200).json({ project, errorModel });
};

// Exxportando el controlador
export default {
  index,
  add,
  addPost,
};
