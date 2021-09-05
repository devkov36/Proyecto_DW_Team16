const Producto = require('../models/Producto')

function crearProducto(req, res){
    //Simulacion de crear producto
    let producto = new Producto(req.body);
    res.status(200).send(producto)
}

function obtenerProductos(req, res){
    let producto1 = new Producto(1, 'Comedor', 'muebles del hogar', 'comedor.jpg', 'elaborado en madera con espacio para 6 personas', '1 pieza', 'Juan', 'Transferencia');
    let producto2 = new Producto(2, 'Sala', 'muebles del hogar', 'sala.jpg', 'elaborado en tela con espacio para 4 personas', '1 pieza', 'José', 'Transferencia');

    res.send([producto1, producto2]);
}

function modificarProducto(req , res){
    let producto = new Producto(req.params.id, 'Licuadora', 'electrodomésticos', 'licuadora.jpg', 'motor de alta potencia con 4 velocidades', '1 pieza', 'María', 'Transferencia');
    let modificaciones = req.body;
    producto = {...producto, ...modificaciones}

    res.send(producto);
}

function eliminarProducto(req, res){
    res.status(200).send(`El producto ${req.params.id} se ha eliminado correctamente`);
}

module.exports = {
    crearProducto,
    obtenerProductos,
    modificarProducto,
    eliminarProducto
}