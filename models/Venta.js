const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const VentaSchema = new mongoose.Schema({
    folio: {
        type: Number    , 
        required: [true, "Es necesario ingrese el foio de la venta"],
        unique: [true, "Este foio ya esta registrado"]
    },
    fecha: {
        type: String,
        required: [true, "Falta la fecha"]
    },
    monto_total: {
        type: Number,
        required: [true, "Falta el total de la venta"],
    },
    total_productos: {
        type: String,
        required: [true, "Falta el total de productos"]
    },
    cliente: {
        type: String,
        required: [true, "Es necesario ingresar el numbre de cliente"]
    },    
    
    metodo_pago: {
        type: Number,
        required: [true, "Es necesario ingresar el método de pago"]
    },    
    monto_pagado: {
        type: Number,
        required: [true, "Falta el monto pagado"],
    },
    cambio: {
        type: Number,
        required: [true, "Falta el cambio"],
    }
}, {collection: "Ventas" ,timestamps: true});
VentaSchema.plugin(uniqueValidator, {message: "Ya existe"});

VentaSchema.methods.publicData = function() {
    return{        
        id:this.id,
        folio:this.folio,
        fecha:this.fecha ,
        monto_total:this.monto_total,
        total_productos: this.total_productos,
        cliente: this.cliente,
        metodo_pago: this.metodo_pago,
        monto_pagado: this.monto_pagado,
        cambio: this.cambio
        
    }
}

mongoose.model("Ventas", VentaSchema);