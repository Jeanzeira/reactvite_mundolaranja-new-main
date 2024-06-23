// frontend/src/components/Jogadores.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Jogadores = () => {
  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    const fetchJogadores = async () => {
      try {
        const response = await axios.get('http://localhost:3000/jogadores');
        setJogadores(response.data);
      } catch (error) {
        console.error('Erro ao buscar jogadores:', error);
      }
    };

    fetchJogadores();
  }, []);

  return (
    <div>
      <h2>Jogadores da NBA</h2>
      <ul>
        {jogadores.map((jogador) => (
          <li key={jogador.id}>
            <img src={jogador.image} alt={jogador.first_name} />
            <p>Nome: {jogador.nome}</p>
            <p>Posição: {jogador.position}</p>
            <p>Altura: {jogador.height}</p>
            {/* Adicione mais informações conforme necessário */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jogadores;
