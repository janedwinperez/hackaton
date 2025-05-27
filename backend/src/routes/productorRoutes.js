// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const productorController = require('../controllers/productorController'); // Importa el controlador

// Ruta POST para registrar un nuevo usuario
router.post('/register', productorController.registerUser);

module.exports = router;