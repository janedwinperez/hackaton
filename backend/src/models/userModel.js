const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  numeroCelular: { type: String, required: true },
  correoElectronico: { type: String, required: true, unique: true },
  ciudadResidencia: { type: String },
  fechaRegistro: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);