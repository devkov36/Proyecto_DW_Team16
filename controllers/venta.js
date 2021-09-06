const Venta = require('../models/Venta')

function crearVenta(req, res){
    //Simulacion de crear Venta
    let Venta = new Venta(req.body);
    res.status(200).send(Venta)
}

function obtenerVenta(req, res){
    let Venta1 = new Venta(1, '20210904 15:30:05', 433.21 , 3 , 1 , 'Transferencia', 450, 42.87);    
    let Venta1 = new Venta(2, '20210903 11:20:10', 480.00 , 3 , 1 , 'Transferencia', 500, 20);

    res.send([Venta1, Venta2]);
}

function modificarVenta(req , res){
    let Venta = new Venta(req.params.id, '20210903 11:20:10', 440 , 3 , 1 , 'Efectivo', 450, 10);
    let modificaciones = req.body;
    Venta = {...Venta, ...modificaciones}

    res.send(Venta);
}

function eliminarVenta(req, res){
    res.status(200).send(`La Venta ${req.params.id} se ha eliminado correctamente`);
}

module.exports = {
    crearVenta,
    obtenerVenta,
    modificarVenta,
    eliminarVenta
}

