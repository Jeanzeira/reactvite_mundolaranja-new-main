const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { Pool } = require('pg');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// Rotas
const jogadorRoutes = require('./routes/jogadorRoutes');
const timeRoutes = require('./routes/timeRoutes');
const noticiaRoutes = require('./routes/noticiaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const comentarioRoutes = require('./routes/comentarioRoutes');

// Configuração do Express
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Configuração do banco de dados PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'nba_app',
    password: 'bd123',
    port: 5440, // Porta padrão do PostgreSQL
});

// Teste de conexão com o banco de dados
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Erro ao conectar ao banco de dados', err.stack);
    }
    console.log('Conexão com o banco de dados estabelecida');
    release();
});

// Configuração do caminho para servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Rota para enviar o arquivo index.html do frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public', 'index1.html'));
});

// Rotas da API
app.use('/jogadores', jogadorRoutes);
app.use('/times', timeRoutes);
app.use('/noticias', noticiaRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/comentarios', comentarioRoutes);

// Configuração do Socket.IO
io.on('connection', socket => {
    console.log(`Socket conectado: ${socket.id}`);

    // Evento para obter mensagens do banco de dados e emitir para o cliente
    socket.on('getMessages', async () => {
        try {
            const result = await pool.query('SELECT * FROM messages ORDER BY id ASC');
            const messages = result.rows;
            io.emit('messages', messages); // Envia as mensagens para todos os clientes conectados
        } catch (error) {
            console.error('Erro ao obter mensagens do banco de dados:', error);
        }
    });

    // Evento para enviar mensagem para o banco de dados
    socket.on('sendMessage', async data => {
        const { author, message } = data;
        try {
            const result = await pool.query('INSERT INTO messages (author, message) VALUES ($1, $2) RETURNING *', [author, message]);
            const insertedMessage = result.rows[0];
            io.emit('messageSent', insertedMessage); // Emite a mensagem enviada para todos os clientes
        } catch (error) {
            console.error('Erro ao enviar mensagem para o banco de dados:', error);
        }
    });

    // Evento para editar mensagem no banco de dados
    socket.on('editMessage', async data => {
        const { id, author, message } = data;
        try {
            const result = await pool.query('SELECT author FROM messages WHERE id = $1', [id]);
            const messageRecord = result.rows[0];

            if (messageRecord && messageRecord.author === author) {
                const updatedResult = await pool.query('UPDATE messages SET message = $1 WHERE id = $2 RETURNING *', [message, id]);
                const updatedMessage = updatedResult.rows[0];
                io.emit('messageEdited', updatedMessage); // Emite a mensagem editada para todos os clientes
                console.log(`Mensagem ${id} editada por ${author}`);
            } else {
                console.log(`Tentativa de edição não autorizada por ${author} para a mensagem ${id}`);
            }
        } catch (error) {
            console.error('Erro ao editar mensagem no banco de dados:', error);
        }
    });

    // Evento para excluir mensagem do banco de dados
    socket.on('deleteMessage', async data => {
        const { id, author } = data;
        try {
            const result = await pool.query('SELECT author FROM messages WHERE id = $1', [id]);
            const message = result.rows[0];

            if (message && message.author === author) {
                await pool.query('DELETE FROM messages WHERE id = $1', [id]);
                io.emit('messageDeleted', id); // Emite o ID da mensagem excluída para todos os clientes
                console.log(`Mensagem ${id} excluída por ${author}`);
            } else {
                console.log(`Tentativa de exclusão não autorizada por ${author} para a mensagem ${id}`);
            }
        } catch (error) {
            console.error('Erro ao excluir mensagem do banco de dados:', error);
        }
    });

    // Desconectar o socket
    socket.on('disconnect', () => {
        console.log(`Socket desconectado: ${socket.id}`);
    });
});

// Iniciar o servidor na porta 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
