const router = require('express').Router();

const { crearVenta, 
    obtenerVenta, 
    modificarVenta, 
    eliminarVenta,
    busquedaVentaFolio,
    busquedaClienteNombre
} = require('../controllers/venta');

router.get('/:id', obtenerVenta);
router.get('/sbf/:fol', busquedaVentaFolio);
router.get('/nmb/:nombre', busquedaClienteNombre);
router.get('/', obtenerVenta);
router.post('/', crearVenta);
router.put('/:id', modificarVenta);
router.delete('/:id', eliminarVenta);

module.exports = router;