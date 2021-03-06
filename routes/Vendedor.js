var router = require('express').Router();

var {
	crearVendedor,
	obtenerVendedor,
	modificarVendedor,
	eliminarVendedor
} = require('../controllers/Vendedor');

router.get('/', obtenerVendedor);
router.post('/', crearVendedor);
router.put('/:id', modificarVendedor);
router.delete('/:id', eliminarVendedor);

module.exports = router;