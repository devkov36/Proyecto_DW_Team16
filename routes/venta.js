const router = require('express').Router();

const { crearVenta, 
    obtenerVenta, 
    modificarVenta, 
    eliminarVenta,
    busquedaVentaFolio
} = require('../controllers/Venta');

router.get('/:id', obtenerVenta);
router.get('/sbf/:folio', busquedaVentaFolio);
router.post('/', crearVenta);
router.put('/:id', modificarVenta);
router.delete('/:id', eliminarVenta);

module.exports = router;


