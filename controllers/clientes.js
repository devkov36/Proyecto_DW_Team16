const mongoose = require('mongoose');
const Cliente = mongoose.model("Clientes");

function crearCliente(req, res, next) {
    //Simulacion de crear cliente
    let cliente = new Cliente(req.body);
    cliente.save()
        .then(cl => {
            res.status(200).send(cl)
        }).catch(next)
}

function obtenerClientes(req, res, next) {
    if (req.params.id) {
        Cliente.findById(req.params.id)
            .then(cl => {
                res.send(cl)
            })
            .catch(next)
    } else {
        Cliente.find()
            .then(clientes => {
                res.send(clientes)
            })
            .catch(next)
    }
}

function modificarCliente(req, res, next) {
    Cliente.findByIdAndUpdate(req.params.id)
        .then(clientes => {
            if (!clientes) {
                return res.sendStatus(401);
            }
            const { nombre_cliente, rfc, cfdi, metodo_pago, credito, correo } = req.body

            if (typeof nombre_cliente !== "undefined") {
                clientes.nombre_cliente = nombre_cliente
            }
            if (typeof rfc !== "undefined") {
                clientes.rfc = rfc
            }
            if (typeof cfdi !== "undefined") {
                clientes.cfdi = cfdi
            }
            if (typeof metodo_pago !== "undefined") {
                clientes.metodo_pago = metodo_pago
            }
            if (typeof credito !== "undefined") {
                clientes.credito = credito
            }
            if (typeof correo !== "undefined") {
                clientes.correo = correo
            }
            clientes.save()
                .then(updated => {
                    res.status(200).json(updated.publicData())
                })
                .catch(next)
        })
        .catch(next)
}

function eliminarCliente(req, res, next) {
    Cliente.findByIdAndDelete(req.params.id)
        .then(respuesta => {
            res.status(200).send("Mascota eliminada correctamente");
        }).catch(next)
}

function busquedaClienteNombre(req, res, next) {
    var nombreCliente = req.params.nombre;
    console.log(`nombre desde consola ${nombreCliente}`);
    Cliente.aggregate([
        { '$match': { 'nombre_cliente': nombreCliente } }
    ])
        .then(cliente => {
            res.status(200).send(cliente);
        })
        .catch(next);
}

module.exports = {
    crearCliente,
    obtenerClientes,
    modificarCliente,
    eliminarCliente,
    busquedaClienteNombre
}

