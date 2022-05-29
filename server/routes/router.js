// Importando el enrutador de Home
import homeRouter from './homeRoutes';
// Importando el enrutador de Project
import projectRouter from './projectRouter';

// funcion que agrega todos los enrutadores
// a la aplicacion de express
const addRoutes = (app) => {
  /* Agregando el enrutador a Home */
  app.use('/', homeRouter);
  /* Agregando al enrutador Project */
  app.use('/projects', projectRouter);
};

/* GET home page. */

export default {
  addRoutes,
};
