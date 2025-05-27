
require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const host = '127.0.0.1'
const port = process.env.PORT || 5000

const app = express()

// Importar las rutas de usuario
const productorRoutes = require('./routes/productorRoutes')

app.use(cors({
     origin: 'http://localhost:5173'
})) // Todo el mundo
app.use(bodyParser.json());
app.use(express.json()); // Para parsear JSON en el cuerpo de las solicitudes


//Conexion a Mongo
mongoose.connect(process.env.MONGO_URI, { // Asegúrate de tener MONGO_URI en tu .env
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB:', err));


// Rutas
// Usar las rutas de usuario bajo el prefijo '/api'
app.use('/api', productorRoutes)


const mainRouter = require('./routes/main_router')  //Nos dirigimos al archivo main_router en la carpeta routes
app.use(mainRouter) //Usamos el objeto creado anteriormente

app.listen(port, host, () => { // Note: port comes before host in the listen arguments
    console.log(`Servidor corriendo en: http://${host}:${port}`);
})