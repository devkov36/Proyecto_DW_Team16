const router = require('express').Router();

const { crearCliente, 
    obtenerClientes, 
    modificarCliente, 
    eliminarCliente,
    busquedaClienteNombre
} = require('../controllers/clientes');

router.get('/:id', obtenerClientes);
router.get('/nmb/:nombre', busquedaClienteNombre);
router.get('/', obtenerClientes);
router.post('/', crearCliente);
router.put('/:id', modificarCliente);
router.delete('/:id', eliminarCliente);

module.exports = router;


