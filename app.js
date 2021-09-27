const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var path = require("path")
require('./models/Cliente');
require('./models/Venta');
require('./models/vendedor');
require('./models/Producto');


app.use('/team16', require('./routes'))
//Bodyparser es como se parsea el cuerpo
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
mongoose.connect(
    'mongodb+srv://Equipo16:equipo16@cluster0.mltwg.mongodb.net/EmbalajesApi'
);
mongoose.set('debug', true);
app.use("/controllers",express.static(path.join(__dirname,"controllers") ) )
//Como manejar las rutas
app.use(express.static(path.join(__dirname, '/')));


//indicamos que pagina saldra al iniciar
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"Pages/index.html"))
})


//Iniciando el servidor


mongoose.set('debug', true);
app.use('/v1', require('./routes'));  
const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});