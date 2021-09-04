const Mascota = require('../models/Mascota')

// CRUD

function crearMascota(req, res){
	var mascota = new Mascota(req.body);
	res.status(200).send(mascota);
}

function obtenerMascota(req, res){
	var mascota1 = new Mascota(1,'Firulais','Perro','link','Muy jugueton',1,'CDMX')
  	var mascota2 = new Mascota(2, 'Botas','Gato','link','Dormilon',1,'CDMX')
  	res.send([mascota1,mascota2])
}

function modificarMascota(req, res){
	var mascota = new Mascota(req.params.id,'Firulais','Perro','link','Muy jugueton',1,'CDMX')
	var modificaciones = req.body
	mascota = {...mascota,...modificaciones }
	res.send(mascota)
}

function eliminarMascota(req, res){
	res.status(200).send(`La mascota ${req.params.id} se elimino`)
}

module.exports = {
	crearMascota,
	obtenerMascota,
	modificarMascota,
	eliminarMascota
}
















