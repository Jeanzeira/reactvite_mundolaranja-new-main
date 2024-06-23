// backend/routes/comentarioRoutes.js

const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/comentarioController');

// Rotas para comentários
router.get('/', comentarioController.obterTodosComentarios);
router.get('/:id', comentarioController.obterComentarioPorId);
// Adicione outras rotas conforme necessário (ex: criar, atualizar, excluir comentários)

module.exports = router;
