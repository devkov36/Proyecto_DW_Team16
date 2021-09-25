const mongoose = require('mongoose')
const Producto = mongoose.model("Producto")

// CRUD

function crearProducto(req, res, next){
	var producto = new Producto(req.body);
	producto.save().then(mas =>{
		res.status(200).send(mas)
	}).catch(next)
}

function obtenerProducto(req, res, next){
	if (req.params.id){
		Producto.findById(req.params.id)
		.then(mas => {res.send(mas)})
		.catch(next)
	} else {
		Producto.find()
		.then(productos => {res.send(productos)})
		.catch(next)
	}
}

function modificarProducto(req, res, next){
	Producto.findById(req.params.id)
	.then(producto => {
		if(!producto){ return res.sendStatus(404); }
		let nuevaInfo = req.body
		if (typeof nuevaInfo.nombre !== "undefined")
			producto.nombre = nuevaInfo.nombre
		if(typeof nuevaInfo.categoria !== "undefined")
			producto.categoria = nuevaInfo.categoria
		if (typeof nuevaInfo.fotos !== 'undefined')
        	producto.fotos = nuevaInfo.fotos
      	if (typeof nuevaInfo.descripcion !== 'undefined')
        	producto.descripcion = nuevaInfo.descripcion
      	if (typeof nuevaInfo.anunciante !== 'undefined')
        	producto.anunciante = nuevaInfo.anunciante
      	if (typeof nuevaInfo.ubicacion !== 'undefined')
        	producto.ubicacion = nuevaInfo.ubicacion
        producto.save()
        .then(updated => {                                   
        res.status(201).json(updated.publicData())})
        .catch(next)
	})
	.catch(next)
}

function eliminarProducto(req, res,next){
	Producto.findOneAndDelete({_id:req.params.id})
	.then(r => {res.status(200).send("El producto se elimino.")})
	.catch(next)
}

function count(req, res, next) {
	var categoria = req.params.cat
	Producto.aggregate([
		{'$match' : {'categoria' : categoria}},
		{'$count' : 'total'}
	]).then(r => {
		res.status(200).send(r)
	})
	.catch(next)
}

module.exports = {
	crearProducto,
	obtenerProducto,
	modificarProducto,
	eliminarProducto,
	count
}
















