// 1. Importar la biblioteca de validación
import * as Yup from 'yup';

// 2. Creando el esquema de validación
const projectSchema = Yup.object().shape({
  name: Yup.string().required('Se requiere un nombre para el proyecto'),
  description: Yup.string()
    .max(500, 'La descripción esta limitada a 500 caracteres')
    .required('Se requiere una descriptción para el proyecto'),
});

// 3. Creamos el middleware de validacion
const getProject = (req) => {
  // Extraemos la informacion del formulario
  const { name, description } = req.body;
  // Armar un objeto con los datos del proyecto
  return {
    name,
    description,
  };
};

export default { projectSchema, getProject };
