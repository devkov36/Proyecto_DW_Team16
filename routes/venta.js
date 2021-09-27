const router = require('express').Router();

const { crearVenta, 
    obtenerVenta, 
    modificarVenta, 
    eliminarVenta,
<<<<<<< HEAD
    busquedaVentaFolio,
    busquedaClienteNombre
} = require('../controllers/venta');

router.get('/:id', obtenerVenta);
router.get('/sbf/:fol', busquedaVentaFolio);
router.get('/nmb/:nombre', busquedaClienteNombre);
=======
    busquedaVentaFolio
} = require('../controllers/venta');

router.get('/:id', obtenerVenta);
router.get('/sbf/:folio', busquedaVentaFolio);
>>>>>>> 639d262480034a0a659e353cda261695c612b107
router.get('/', obtenerVenta);
router.post('/', crearVenta);
router.put('/:id', modificarVenta);
router.delete('/:id', eliminarVenta);

module.exports = router;