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

