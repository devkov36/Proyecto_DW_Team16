const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const ClienteSchema = new mongoose.Schema({
    nombre_cliente: {
        type: String, 
        required: [true, "Es necesario un nombre de cliente"],
        unique: [true, "Este cliente ya esta registrado"]
    },
    rfc: {
        type: String,
        required: [true, "Falta RFC"],
        unique: [true, "Este RFC ya esta registrado"]
    },
    cfdi: {
        type: String,
        required: [true, "Falta el uso de CFDI"],
    },
    metodo_pago: {
        type: String,
        required: [true, "Es necesario poner un metodo de pago"]
    },
    credito: { type: String },
    correo: {
        type: String,
        unique: [true, "Este correo ya esta registrado"],
        required: [true, "falta email"],
        match: [/\S+@\S+.\S+/, "Email invalido"]
    }

}, {collection: "Clientes" ,timestamps: true});

ClienteSchema.plugin(uniqueValidator, {message: "Ya existe"});

ClienteSchema.methods.publicData = function() {
    return {
        id: this.id,
        nombre_cliente: this.nombre_cliente,
        rfc: this.rfc,
        cfdi: this.cfdi,
        metodo_pago: this.metodo_pago,
        credito: this.credito,
        correo: this.correo
    }
}

mongoose.model("Clientes", ClienteSchema)
