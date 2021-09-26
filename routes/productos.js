var router = require('express').Router()

var {
	crearProducto,
	obtenerProducto,
	modificarProducto,
	eliminarProducto,
	count
} = require('../controllers/productos');


router.get('/:id', obtenerProducto);
router.get('/', obtenerProducto);
router.post('/', crearProducto);
router.put('/:id', modificarProducto);
router.delete('/:id', eliminarProducto);

module.exports = router;
