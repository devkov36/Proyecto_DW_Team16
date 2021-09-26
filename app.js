const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Bodyparser es como se parsea el cuerpo
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Como manejar las rutas
app.use('/team16', require('./routes'))
const mongoose = require('mongoose');

//Iniciando el servidor

mongoose.connect(
    process.env.MONGO_URI, // obtiene la url de conexión desde las variables de entorno
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  );
mongoose.set("debug", true)
app.use('/v1', require('./routes'));  
const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


