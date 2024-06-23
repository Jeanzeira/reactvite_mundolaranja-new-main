// backend/controllers/timeController.js

const timeModel = require('../models/timeModel');

// Obter todos os times
const obterTodosTimes = async (req, res) => {
  try {
    const times = await timeModel.obterTodosTimes();
    res.status(200).json(times);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter time por ID
const obterTimePorId = async (req, res) => {
  try {
    const time = await timeModel.obterTimePorId(req.params.id);
    if (time) {
      res.status(200).json(time);
    } else {
      res.status(404).json({ message: 'Time não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Adicionar outras funções conforme necessário (criar, atualizar, excluir times)

module.exports = {
  obterTodosTimes,
  obterTimePorId,
  // Exportar outras funções conforme necessário
};
