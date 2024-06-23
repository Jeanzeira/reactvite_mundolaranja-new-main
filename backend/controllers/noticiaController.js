// backend/controllers/noticiaController.js

const noticiaModel = require('../models/noticiaModel');

// Obter todas as notícias
const obterTodasNoticias = async (req, res) => {
  try {
    const noticias = await noticiaModel.obterTodasNoticias();
    res.status(200).json(noticias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter notícia por ID
const obterNoticiaPorId = async (req, res) => {
  try {
    const noticia = await noticiaModel.obterNoticiaPorId(req.params.id);
    if (noticia) {
      res.status(200).json(noticia);
    } else {
      res.status(404).json({ message: 'Notícia não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Adicionar outras funções conforme necessário (criar, atualizar, excluir notícias)

module.exports = {
  obterTodasNoticias,
  obterNoticiaPorId,
  // Exportar outras funções conforme necessário
};
