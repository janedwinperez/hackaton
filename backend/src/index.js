
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const host = '127.0.0.1'
const port = 5000

const app = express()


app.use(cors({
     origin: 'http://localhost:5173'
})) // Todo el mundo
app.use(bodyParser.json());


//Conexion a Mongo
mongoose.connect(process.env.MONGO_URI, { // Asegúrate de tener MONGO_URI en tu .env
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB:', err));



const mainRouter = require('./routes/main_router')  //Nos dirigimos al archivo main_router en la carpeta routes
app.use(mainRouter) //Usamos el objeto creado anteriormente

app.listen(port, host, () => { // Note: port comes before host in the listen arguments
    console.log(`Servidor corriendo en: http://${host}:${port}`);
})