// models/Productor.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    ubicacion: { type: String, required: true },
    cultivo: { type: String, required: true},
    extension: { type: String, required: true},
});

const Productor = mongoose.model('Productor', userSchema);

module.exports = Productor;