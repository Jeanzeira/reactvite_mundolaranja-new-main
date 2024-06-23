const db = require('../config/db');

// Obter todos os usuários
const obterTodosUsuarios = async () => {
  const query = 'SELECT * FROM usuarios';
  const { rows } = await db.query(query);
  return rows;
};

// Obter usuário por ID
const obterUsuarioPorId = async (id) => {
  const query = 'SELECT * FROM usuarios WHERE id = $1';
  const { rows } = await db.query(query, [id]);
  return rows[0];
};

// Criar um novo usuário
const criarUsuario = async (nome, email, senha) => {
  const query = 'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *';
  const { rows } = await db.query(query, [nome, email, senha]);
  return rows[0];
};

// Atualizar um usuário
const atualizarUsuario = async (id, nome, email, senha) => {
  const query = 'UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id = $4 RETURNING *';
  const { rows } = await db.query(query, [nome, email, senha, id]);
  return rows[0];
};

// Excluir um usuário
const excluirUsuario = async (id) => {
  const query = 'DELETE FROM usuarios WHERE id = $1';
  await db.query(query, [id]);
};

// Login de usuário
const loginUsuario = async (username, password) => {
  const query = 'SELECT * FROM usuarios WHERE nome = $1 AND senha = $2';
  const { rows } = await db.query(query, [username, password]);
  return rows[0];
};

module.exports = {
  obterTodosUsuarios,
  obterUsuarioPorId,
  criarUsuario,
  atualizarUsuario,
  excluirUsuario,
  loginUsuario
};
