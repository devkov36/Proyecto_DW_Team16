const Objeto = require('')


function ImprimirFactura(req, res){
    var factura = new Objeto(req.body)
    res.status(200).send(factura);
}