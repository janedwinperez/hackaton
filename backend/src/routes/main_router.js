//Importamos el archivo main_controler que se encuentra en la carpeta controllers.
//index es la funcion que ejecuta el codigo para la ruta raiz ('/'). Se encuentra en la variable creada
const controlador = require('../controllers/main_controller') 
const express = require('express')
const router = express.Router()


router.get('/',controlador.index)

module.exports = router