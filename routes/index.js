const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Bienvenidos al proyecto del equipo 16');
});

router.use('/clientes', require('./clientes'));
<<<<<<< HEAD
router.use('/venta', require('./venta'));
router.use('/productos', require('./productos'));
router.use('/factura', require('./Facturaruta'));
module.exports = router;
=======
router.use('/Vendedor', require('./Vendedor'));

module.exports = router;
>>>>>>> 2edf2eb4d8a250353191e117ad8f2d553e8b2c51
