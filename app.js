<<<<<<< HEAD
// Express
const express = require('express');
const app = express();

//Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





app.use('/v1', require('./routes'));





// Iniciando el servidor
const PORT = 4001;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})
=======
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Bodyparser es como se parsea el cuerpo
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Como manejar las rutas
app.use('/team16', require('./routes'))


//Iniciando el servidor
const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

>>>>>>> f978fc81a10f1be001a2e18aab5ee41e96fdb0f6

