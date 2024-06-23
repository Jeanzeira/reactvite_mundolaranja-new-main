// backend/routes/timeRoutes.js

const express = require('express');
const router = express.Router();
const timeController = require('../controllers/timeController');

// Rotas para times
router.get('/', timeController.obterTodosTimes);
router.get('/:id', timeController.obterTimePorId);
// Adicione outras rotas conforme necessário (ex: criar, atualizar, excluir times)

module.exports = router;
