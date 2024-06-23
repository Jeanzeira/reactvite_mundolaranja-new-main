// backend/models/noticiaModel.js

const db = require('../config/db');

// Obter todas as notícias
const obterTodasNoticias = async () => {
  const { rows } = await db.query('SELECT * FROM noticias');
  return rows;
};

// Obter notícia por ID
const obterNoticiaPorId = async (id) => {
  const { rows } = await db.query('SELECT * FROM noticias WHERE id = $1', [id]);
  return rows[0];
};

// Adicionar outras funções conforme necessário (criar, atualizar, excluir notícias)

module.exports = {
  obterTodasNoticias,
  obterNoticiaPorId,
  // Exportar outras funções conforme necessário
};
