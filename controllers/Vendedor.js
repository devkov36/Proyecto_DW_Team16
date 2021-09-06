const Vendedor = require('../models/Vendedor')

function crearVendedor (req, res){
	var Vendedor = new Vendedor(...req.body);
	res.status(200).send(Vendedor);
}

function obtenerVendedor(req, res){
	var Vendedor1 = new Vendedor(1,'IvanVargas', 'Iván', 'Varga', 'ivargas@hotmail.com', 'qwerty123', 'normal')
  	var Vendedor2 = new Vendedor(2, 'MichelleHernandez', 'Michelle', 'Hernández', 'mhernandez@hotmail.com', 'qwerty123', 'anunciante')
  	res.send([Vendedor1,Vendedor2])
}

function modificarVendedor(req, res){
	var Vendedor = new Vendedor(req.params.id,'IvanVargas', 'Iván', 'Vargas', 'ivargas@hotmail.com', 'qwerty123', 'normal')
	var modificaciones = req.body
	Vendedor = {...Vendedor,...modificaciones }
	res.send(Vendedor)
}

function eliminarVendedor(req, res){
	res.status(200).send(`El Vendedor ${req.params.id} se elimino`)
}

module.exports = {
	crearVendedor,
	obtenerVendedor,
	modificarVendedor,
	eliminarVendedor
}
















