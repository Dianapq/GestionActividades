require('dotenv').config();
const express = require('express');
const app = require('./api/index'); //Importacion directa la app

const port = process.env.PORT || 3000;

//Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
