// class Producto{

// 	constructor(id,nombre,categoria,fotos,descripcion,cantidad,cliente,pago){
// 		this.id = id
// 		this.nombre = nombre
// 		this.categoria = categoria; // Comedor | Sala | otro
// 	    this.fotos = fotos; // links a las fotografías
// 	    this.descripcion = descripcion; // descripción del anuncio
// 	    this.cantidad = cantidad; // número de piezas o cantidad de producto 
// 	    this.cliente = cliente; // muy importante
//      this.pago = pago; // muy importante
//   	}

// }

// module.exports = Producto;

const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
	nombre:{type: String, required: true},
	categoria:{type:String, enum: ['Comedor', 'Sala', 'Otro']},
	fotos:String,
	descripcion:{type: String, required: true},
	cantidad:{type: Number},
	cliente:String,
    pago:String
},{timestamps: true, collection:'Productos'})


ProductoSchema.methods.publicData = function (){
	return {
	    id: this.id,
	    nombre: this.nombre,
	    categoria: this.categoria,
	    fotos: this.fotos,
	    descripcion: this.descripcion,
	    cantidad: this.cantidad,
	    cliente: this.cliente,
        pago: this.pago
	}
};

mongoose.model("Producto", ProductoSchema);


















