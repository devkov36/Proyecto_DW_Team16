const router = require('express').Router();

const { crearVenta, 
    obtenerVenta, 
    modificarVenta, 
    eliminarVenta
} = require('../controllers/Venta');

router.get('/', obtenerVenta);
router.post('/', crearVenta);
router.put('/:id', modificarVenta);
router.delete('/:id', eliminarVenta);

module.exports = router;


