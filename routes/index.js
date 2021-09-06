const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Bienvenidos al proyecto del equipo 16');
});

router.use('/clientes', require('./clientes'));
router.use('/Vendedor', require('./Vendedor'));

module.exports = router;
