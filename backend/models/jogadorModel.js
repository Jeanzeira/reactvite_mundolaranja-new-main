// backend/models/jogadorModel.js

const db = require('../config/db');

// Obter todos os jogadores
const obterTodosJogadores = async () => {
  const { rows } = await db.query('SELECT * FROM jogadores');
  return rows;
};

// Obter jogador por ID
const obterJogadorPorId = async (id) => {
  const { rows } = await db.query('SELECT * FROM jogadores WHERE id = $1', [id]);
  return rows[0];
};

// Adicionar outras funções conforme necessário (criar, atualizar, excluir jogadores)

module.exports = {
  obterTodosJogadores,
  obterJogadorPorId,
  // Exportar outras funções conforme necessário
};
