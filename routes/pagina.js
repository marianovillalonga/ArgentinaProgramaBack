const express = require('express');
const router = express.Router();
const paginaController = require('../controllers/paginaController');

router.post('/', paginaController.crearPagina);
router.get('/', paginaController.obtenerPaginas);
router.put('/:id', paginaController.actualizarPagina);
router.get('/:id', paginaController.obtenerPagina);
router.delete('/:id', paginaController.eliminarPagina);

module.exports = router;