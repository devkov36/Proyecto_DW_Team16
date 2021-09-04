const Cliente = require('../models/Cliente')

function crearCliente(req, res){
    //Simulacion de crear cliente
    let cliente = new Cliente(req.body);
    res.status(200).send(cliente)
}

function obtenerClientes(req, res){
    let cliente1 = new Cliente(1, 'Jim', 'KAJSAKSJASKA', 'G03', 'Transferencia', '15 dias');
    let cliente2 = new Cliente(2, 'Frutas SA DE CV', 'FPRTAJS98A', 'G01', 'Por definir', '30 dias');

    res.send([cliente1, cliente2]);
}

function modificarCliente(req , res){
    let cliente = new Cliente(req.params.id, 'Jim', 'JAMALS9202', 'G03', 'Transferencia', '15 dias');
    let modificaciones = req.body;
    cliente = {...cliente, ...modificaciones}

    res.send(cliente);
}

function eliminarCliente(req, res){
    res.status(200).send(`El cliente ${req.params.id} se ha eliminado correctamente`);
}

module.exports = {
    crearCliente,
    obtenerClientes,
    modificarCliente,
    eliminarCliente
}

