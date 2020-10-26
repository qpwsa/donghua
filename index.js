const express = require('express')
const app = express()
const path = require('path')

// configuracion de puerto
const port = process.env.port || 3000;

// obtiene la ruta del directorio publico
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})
app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/contacto.html'))
})
app.get('/politicas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/politicas.html'))
})





// puerto
app.listen(port)
