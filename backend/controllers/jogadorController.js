// backend/controllers/jogadorController.js

const jogadorModel = require('../models/jogadorModel');

// Obter todos os jogadores
const obterTodosJogadores = async (req, res) => {
  try {
    const jogadores = await jogadorModel.obterTodosJogadores();
    res.status(200).json(jogadores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter jogador por ID
const obterJogadorPorId = async (req, res) => {
  try {
    const jogador = await jogadorModel.obterJogadorPorId(req.params.id);
    if (jogador) {
      res.status(200).json(jogador);
    } else {
      res.status(404).json({ message: 'Jogador não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Adicionar outras funções conforme necessário (criar, atualizar, excluir jogadores)

module.exports = {
  obterTodosJogadores,
  obterJogadorPorId,
  // Exportar outras funções conforme necessário
};
