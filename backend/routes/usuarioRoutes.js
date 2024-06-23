const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rotas para CRUD de usuários
router.get('/', usuarioController.obterTodosUsuarios);
router.get('/:id', usuarioController.obterUsuarioPorId);
router.post('/', usuarioController.criarUsuario);
router.put('/:id', usuarioController.atualizarUsuario);
router.delete('/:id', usuarioController.excluirUsuario);

// Rota de login
router.post('/login', usuarioController.loginUsuario);

module.exports = router;
