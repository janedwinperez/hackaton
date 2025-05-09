
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const host = '127.0.0.1'
const port = 8081

const app = express()

app.use(cors({
     origin: 'http://localhost:5173'
})) // Todo el mundo

mongoose.connect(process.env.MONGO_URI, { // Asegúrate de tener MONGO_URI en tu .env
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB:', err));



app.listen(port, host, () => { // Note: port comes before host in the listen arguments
    console.log(`Servidor corriendo en: http://${host}:${port}`);
})