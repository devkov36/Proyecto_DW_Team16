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
      process.env.MONGO_URI, // obtiene la url de conexión desde las variables de entorno
     { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true } 
    //'mongodb+srv://Equipo16:equipo16@cluster0.mltwg.mongodb.net/EmbalajesApi'
);
mongoose.set('debug', true);
app.use("/controllers",express.static(path.join(__dirname,"controllers") ) )
//Como manejar las rutas
app.use(express.static(path.join(__dirname, '/')));


//indicamos que pagina saldra al iniciar
/*app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"Pages/index.html"))
})
*/

//Iniciando el servidor

//const PORT = 4001;

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`)
})

