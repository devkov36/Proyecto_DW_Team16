const mongoose = require('mongoose');
const Vendedor = mongoose.model("Vendedores");

function crearVendedor (req, res, next){
	var Vendedor = new Vendedor(...req.body);
	Vendedor.save().then(vl => {
        res.status(200).send(vl)
    }).catch(next)
}

function obtenerVendedor(req, res, next){
	if (req.params.id){
		Vendedor.findById(req.params.id)
		.then(v1 => {res.send(v1)})
		.catch(next)
	} else {
		Vendedor.find()
		.then(Vendedores => {res.send(Vendedores)})
		.catch(next)
	}
}

function modificarVendedor(req, res, next){
	Vendedor.findByIdAndUpdate(req.params.id)
    .then(Vendedores => {
        if(!Vendedores){
            return res.sendStatus(401);
        }
        const {NumeroVendedor, Nombre, Apellido, Correo, Telefono, Sucursal} = req.body
        
		if(typeof NumeroVendedor !== "undefined"){
            Vendedores.NumeroVendedor = NumeroVendedor}

        if(typeof Nombre !== "undefined"){
            Vendedores.Nombre = Nombre}

        if(typeof Apellido !== "undefined"){
            Vendedores.Apellido = Apellido}

        if(typeof Correo !== "undefined"){
            Vendedores.Correo = Correo}

        if(typeof Telefono !== "undefined"){
            Vendedores.Telefono = Telefono}

        if(typeof Sucursal !== "undefined"){
            Vendedores.Sucursal = Sucursal}
       
		Vendedores.save()
		.then(updated => {                                   
		res.status(201).json(updated.publicData())})
		.catch(next)
		})
		.catch(next)
	}

function eliminarVendedor(req, res, next){
	Vendedor.findOneAndDelete({_id:req.params.id})
	.then(r => {res.status(200).send("El vendedor se eliminó.")})
	.catch(next)
}

module.exports = {
	crearVendedor,
	obtenerVendedor,
	modificarVendedor,
	eliminarVendedor
}
















