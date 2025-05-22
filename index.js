const activityRoutes = require('./routes/activities');
const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');
require('dotenv').config();

conectarDB();

const app = express();

//Middleware intermediario para modificar, validar o registrar informacion.
app.use(cors());
app.use(express.json({ extended: true }));

//Rutas
app.use('/api/v1/users', require('./routes/users'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('API de users funcionando correctamente');
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
app.use('/activities', activityRoutes);
