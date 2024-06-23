// backend/routes/jogadorRoutes.js

const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Rota para buscar todos os jogadores
router.get('/', async (req, res) => {
  try {
    const query = 'SELECT * FROM jogadores';
    const result = await db.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
