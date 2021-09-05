<<<<<<< HEAD
var router = require('express').Router();

router.get('/', (req, res) => {
	res.send('welcome to my api');
})

router.use('/usuarios', require('./usuarios'));
router.use('/mascotas', require('./mascotas'));
router.use('/solicitudes', require('./solicitudes'));
=======
const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Bienvenidos al proyecto del equipo 16');
});

router.use('/clientes', require('./clientes'));
>>>>>>> f978fc81a10f1be001a2e18aab5ee41e96fdb0f6

module.exports = router;