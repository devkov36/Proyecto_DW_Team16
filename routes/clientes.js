const router = require('express').Router();

const { crearCliente, 
    obtenerClientes, 
    modificarCliente, 
    eliminarCliente
} = require('../controllers/clientes');

router.get('/', obtenerClientes);
router.post('/', crearCliente);
router.put('/:id', modificarCliente);
router.delete('/:id', eliminarCliente);

module.exports = router;


