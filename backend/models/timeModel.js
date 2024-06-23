// backend/models/timeModel.js

const db = require('../config/db');

// Obter todos os times
const obterTodosTimes = async () => {
  const { rows } = await db.query('SELECT * FROM times');
  return rows;
};

// Obter time por ID
const obterTimePorId = async (id) => {
  const { rows } = await db.query('SELECT * FROM times WHERE id = $1', [id]);
  return rows[0];
};

// Adicionar outras funções conforme necessário (criar, atualizar, excluir times)

module.exports = {
  obterTodosTimes,
  obterTimePorId,
  // Exportar outras funções conforme necessário
};
