// 1 importando el ODM
import mongoose from 'mongoose';
// 2 importando el logger
import winston from './winston';

class MongooseODM {
  // Metodo especial constructor
  constructor(url) {
    // Crear la propiedad
    this.url = url;
  }

  // Methods
  // momgoose permite pasarle la biblioteca de la cual se hara uso
  async connect() {
    try {
      // Agregar el sistema de promesas de ES6
      // insertando el sistema de promesas que java ocupara
      mongoose.Promise = global.Promise;
      // Registramos el intento de conexion a la base de datos
      winston.info(`Conectando a la base de datos ${this.url}`);
      // Intento de conexion
      const connection = await mongoose.connect(this.url);
      return connection;
    } catch (error) {
      // La conexion falla
      winston.error(
        `No se pudo realizar la conexion debido a: ${error.message}`
      );
      return false;
    }
  }
}
export default MongooseODM;
