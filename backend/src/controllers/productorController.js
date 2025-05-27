// controllers/userController.js
const Productor = require('../models/Productor'); // Importa el modelo de usuario

exports.registerUser = async (req, res) => {
    const { nombre, email, ubicacion, cultivo, extension } = req.body;

    try {
        // Simple validación (en un proyecto real, usarías una librería como Joi o Express-validator)
        if (!nombre || !email || !ubicacion || !cultivo || !extension) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        // Verificar si el usuario ya existe
        const existingProductor = await Productor.findOne({ email });
        if (existingProductor) {
            return res.status(409).json({ message: 'El email ya está registrado' });
        }

        // Crear nuevo usuario (NOTA: En un proyecto real, DEBES hashear la contraseña antes de guardarla)
        const newProductor = new Productor({ nombre, email, ubicacion, cultivo, extension });
        await newProductor.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente!' });

    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ message: 'Error en el servidor al registrar usuario', error: error.message });
    }
};

// Puedes añadir más funciones aquí, como loginUser, getUserById, etc.