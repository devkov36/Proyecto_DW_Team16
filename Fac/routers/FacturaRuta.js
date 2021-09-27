const router = require('express').Router()

const { imprimirFactura } = require('../controllers/FacturaControlador')
const {
    ImprimirFactura
} = require('../controllers/FacturaControlador')

router.post('/', ImprimirFactura)


module.exports = router