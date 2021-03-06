const mongoose = require('mongoose');
const Venta = mongoose.model("Ventas");
//const Venta = require('../models/Venta')

function crearVenta(req, res, next){
    //Simulacion de crear Venta
    console.log(req.body);
    let venta = new Venta(req.body);
    venta.save()
    .then(cl => {
        res.status(200).send(cl)
    }).catch(next)
    
}

function obtenerVenta(req, res, next) {
    if (req.params.id) {
        Venta.findById(req.params.id)
            .then(cl => {
                res.send(cl)
            })
            .catch(next)
    } else {
        Venta.find()
            .then(ventas => {
                res.send(ventas)
            })
            .catch(next)
    }
}

function modificarVenta(req, res, next) {
    Venta.findByIdAndUpdate(req.params.id)
        .then(ventas => {
            if (!ventas) {
                return res.sendStatus(401);
            }
            const { _id, folio, fecha, monto_total, total_productos, cliente, metodo_pago, monto_pagado, cambio } = req.body
            if (typeof _id !== "undefined") {
                ventas._id = _id
            }
            if (typeof folio !== "undefined") {
                ventas.folio = folio
            }
            if (typeof fecha !== "undefined") {
                ventas.fecha = fecha
            }
            if (typeof monto_total !== "undefined") {
                ventas.monto_total = monto_total
            }
            if (typeof metodo_pago !== "undefined") {
                ventas.metodo_pago = metodo_pago
            }
            if (typeof total_productos !== "undefined") {
                ventas.total_productos = total_productos
            }
            if (typeof cliente !== "undefined") {
                ventas.cliente = cliente
            }
            if (typeof monto_pagado !== "undefined") {
                ventas.monto_pagado = monto_pagado
            }
            if (typeof cambio !== "undefined") {
                ventas.cambio = cambio
            }
            ventas.save()
                .then(updated => {
                    res.status(200).json(updated.publicData())
                })
                .catch(next)
        })
        .catch(next)
}
function eliminarVenta(req, res, next) {
    Cliente.findByIdAndDelete(req.params.id)
        .then(respuesta => {
            res.status(200).send("Venta eliminada correctamente");
        }).catch(next)
}

function busquedaVentaFolio(req, res, next) {
    var folio_ = req.params.fol;
    console.log(`nombre desde consola ${folio_}`);
    Venta.aggregate([
        { '$match': { "folio" : parseInt(folio_) } }
	]).then(venta => {
		res.status(200).send(venta)
	})
	.catch(next)
}

function busquedaClienteNombre(req, res, next) {
    var nombreCliente = req.params.nombre;
    console.log(`nombre desde consola ${nombreCliente}`);
    Venta.aggregate([
        { '$match': { 'cliente': nombreCliente } }
    ])
        .then(v => {
            res.status(200).send(v);
        })
        .catch(next);
}
module.exports = {
    crearVenta,
    obtenerVenta,
    modificarVenta,
    eliminarVenta,
    busquedaVentaFolio,
    busquedaClienteNombre
}

