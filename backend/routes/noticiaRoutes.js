// backend/routes/noticiaRoutes.js

const express = require('express');
const router = express.Router();
const noticiaController = require('../controllers/noticiaController');

// Rotas para notícias
router.get('/', noticiaController.obterTodasNoticias);
router.get('/:id', noticiaController.obterNoticiaPorId);
// Adicione outras rotas conforme necessário (ex: criar, atualizar, excluir notícias)

module.exports = router;
