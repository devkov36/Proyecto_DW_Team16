const router = require('express').Router();

const { crearVenta, 
    obtenerVenta, 
    modificarVenta, 
    eliminarVenta,
    busquedaVentaFolio
} = require('../controllers/venta');

router.get('/:id', obtenerVenta);
router.get('/sbf/:folio', busquedaVentaFolio);
router.get('/', obtenerVenta);
router.post('/', crearVenta);
router.put('/:id', modificarVenta);
router.delete('/:id', eliminarVenta);

module.exports = router;


