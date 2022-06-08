import log from '../Config/winston';
// Importamos el modelo Project
import ProjectModel from '../models/ProjectModel';

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
  // TODO: Agregar codigo para agregar proyectos
};

// Procesa el formulario que Agrega ideas de proyectos
// POST /projects/add
const addPost = async (req, res) => {
  const { errorData } = req;
  let project = {};
  let errorModel = {};
  if (errorData) {
    log.error('💥 Se retorna objeto de error de validacion 💥');
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
    // return res.status(200).json(errorData);
  } else {
    log.info('Se retorna objeto Proyecto valido');
    // Desestructurando la informacion
    // del formulario del objeto valido
    const { validData } = req;
    // Crear un documento con los datos provistos
    // por el formulario y guardar dicho documento
    // en projectModel
    const projectModel = new ProjectModel(validData);
    // Siempre que se ejecuta una operacion
    // que depende de un tercero, es una buena practica
    // envolver esa operacion en un bloque try
    try {
      // Se salva el documento projecto
      log.info('Se salva objeto Projecto');
      project = await projectModel.save();
    } catch (error) {
      log.error(`Ha fallado el intento de salvar un proyecto:${error.message}`);
      return res.status(500).json({ error });
    }
  }
  // Respondemos con los viewModels generados
  // res.render('projects/addProjectView', { project, errorModel });
  // Sanity check TODO: Provisionl
  return res.status(200).json({ project, errorModel });
};

// Exxportando el controlador
export default {
  index,
  add,
  addPost,
};
