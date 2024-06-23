const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');

const jogadorRoutes = require('./routes/jogadorRoutes');
const timeRoutes = require('./routes/timeRoutes');
const noticiaRoutes = require('./routes/noticiaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const comentarioRoutes = require('./routes/comentarioRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rotas
app.use('/jogadores', jogadorRoutes);
app.use('/times', timeRoutes);
app.use('/noticias', noticiaRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/comentarios', comentarioRoutes);

// Rota de teste para conexão com o banco de dados
app.get('/teste-conexao', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.status(200).json({ message: 'Conexão bem-sucedida', timestamp: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao conectar no banco de dados', error: error.message });
  }
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
