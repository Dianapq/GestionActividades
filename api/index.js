const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require('../routes/user');
const activityRoutes = require('../routes/activities');

const app = express();

app.use(express.json());

// Rutas
app.use('/users', userRoutes);
app.use('/activities', activityRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API Gestión de Actividades está funcionando.');
});

// Conexion con MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error conectando a MongoDB:', err));

module.exports = app; 


