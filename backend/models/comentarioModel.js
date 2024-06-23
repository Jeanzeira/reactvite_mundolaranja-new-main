// backend/models/comentarioModel.js

const db = require('../config/db');

// Obter todos os comentários
const obterTodosComentarios = async () => {
  const { rows } = await db.query('SELECT * FROM comentarios');
  return rows;
};

// Obter comentário por ID
const obterComentarioPorId = async (id) => {
  const { rows } = await db.query('SELECT * FROM comentarios WHERE id = $1', [id]);
  return rows[0];
};

// Adicionar outras funções conforme necessário (criar, atualizar, excluir comentários)

module.exports = {
  obterTodosComentarios,
  obterComentarioPorId,
  // Exportar outras funções conforme necessário
};
