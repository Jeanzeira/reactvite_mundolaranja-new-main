// backend/controllers/comentarioController.js

const comentarioModel = require('../models/comentarioModel');

// Obter todos os comentários
const obterTodosComentarios = async (req, res) => {
  try {
    const comentarios = await comentarioModel.obterTodosComentarios();
    res.status(200).json(comentarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter comentário por ID
const obterComentarioPorId = async (req, res) => {
  try {
    const comentario = await comentarioModel.obterComentarioPorId(req.params.id);
    if (comentario) {
      res.status(200).json(comentario);
    } else {
      res.status(404).json({ message: 'Comentário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Adicionar outras funções conforme necessário (criar, atualizar, excluir comentários)

module.exports = {
  obterTodosComentarios,
  obterComentarioPorId,
  // Exportar outras funções conforme necessário
};
