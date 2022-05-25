// ODM - Mongoose
import mongoose from 'mongoose';

// Desestructura el modulo
// de Schemas de Mongoose
const { Schema } = mongoose;

// 3 Creamos el Schema
// Schema - Descripcion de los datos que va a contener
// un objeto JSON
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Generar el Modelo a partir de un Schema
// Compilar el modelo

// El modelo, es el objeto que servira como intermediario entre
// la aplicacion y la base de datos, esto a travez de exponer
// un conjunto de métodos y propiedades a la aplicacion
// --- Rivalcoba

export default mongoose.model('project', ProjectSchema);
