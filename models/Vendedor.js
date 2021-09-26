// vendedor.js
/** Clase que representa a un Vendedor de la plataforma*/
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const VendedorSchema = new mongoose.Schema({
    NumeroVendedor: {
      type: String, 
      required: [true, "Falta colocar el número del vendedor"],
      unique: [true, "Este vendedor ya esta registrado"] },

    Nombre: {
        type: String, 
        required: [true, "Falta colocar el nombre del vendedor"]},

    Apellido: {
        type: String,
        required: [true, "Falta colocar el apellido del vendedor"]},

    Correo: {
        type: String,
        unique: [true, "Este correo ya esta registrado"],
        required: [true, "Falta escribir el correo"],
        match: [/\S+@\S+.\S+/, "El correo es invalido"]},

    Telefono: { type: String },
   
    Sucursal: {
      type: String,
      required: [true, "Es necesario ingresar la sucursal del vendedor"]},

}, {collection: "Vendedores" ,timestamps: true});

VendedorSchema.plugin(uniqueValidator, {message: "Ya existe"});

VendedorSchema.methods.publicData = function() {
    return {
        id: this.id,
        NumeroVendedor: this.NumeroVendedor,
        Nombre: this.Nombre,
        Apellido: this.Apellido,
        Correo: this.Correo,
        Telefono: this.Telefono,
        Sucursal: this.Sucursal,
    }
}

mongoose.model("Vendedores", VendedorSchema)