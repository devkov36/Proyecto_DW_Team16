const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Bodyparser es como se parsea el cuerpo
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
mongoose.connect(
    'mongodb+srv://Equipo16:equipo16@cluster0.mltwg.mongodb.net/EmbalajesApi');
mongoose.set('debug', true);
require('./models/vendedor');

//Como manejar las rutas
app.use('/team16', require('./routes'))