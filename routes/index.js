const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Bienvenidos al proyecto del equipo 16');
});

router.use('/clientes', require('./clientes'));
router.use('/venta', require('./venta'));
router.use('/productos', require('./productos'));
// router.use('/factura', require('./Facturaruta')); //lo comente porque me daba un conflicto

router.use('/Vendedor', require('./Vendedor'));

module.exports = router;
