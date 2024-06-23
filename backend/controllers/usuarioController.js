const usuarioModel = require('../models/usuarioModel');

// Obter todos os usuários
const obterTodosUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioModel.obterTodosUsuarios();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter usuário por ID
const obterUsuarioPorId = async (req, res) => {
  try {
    const usuario = await usuarioModel.obterUsuarioPorId(req.params.id);
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Criar um novo usuário
const criarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const novoUsuario = await usuarioModel.criarUsuario(nome, email, senha);
    res.status(201).json({ message: 'Usuário criado com sucesso', usuario: novoUsuario });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar um usuário
const atualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  try {
    const usuarioAtualizado = await usuarioModel.atualizarUsuario(id, nome, email, senha);
    res.status(200).json({ message: 'Usuário atualizado com sucesso', usuario: usuarioAtualizado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Excluir um usuário
const excluirUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    await usuarioModel.excluirUsuario(id);
    res.status(200).json({ message: 'Usuário excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login de usuário
const loginUsuario = async (req, res) => {
  try {
    const { username, password } = req.body;
    const usuario = await usuarioModel.loginUsuario(username, password);

    if (usuario) {
      res.status(200).json({ message: 'Login realizado com sucesso!' });
    } else {
      res.status(401).json({ message: 'Usuário ou senha incorretos!' });
    }
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
};

module.exports = {
  obterTodosUsuarios,
  obterUsuarioPorId,
  criarUsuario,
  atualizarUsuario,
  excluirUsuario,
  loginUsuario
};
