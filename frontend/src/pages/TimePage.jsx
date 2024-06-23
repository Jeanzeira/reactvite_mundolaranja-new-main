import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TimePage = () => {
  const { id } = useParams();
  const [time, setTime] = useState(null);

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch(`http://localhost:3000/times/${id}`);
        if (!response.ok) {
          throw new Error('Falha ao buscar time');
        }
        const data = await response.json();
        setTime(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchTime();
  }, [id]);

  if (!time) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-4xl mx-auto bg-gray-100 rounded-xl overflow-hidden shadow-md">
        <img src={time.image} alt={`${time.nome_time} Logo`} className="w-full h-80 object-cover object-center" />
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800">{time.nome_time}</h2>
          {/* <p className="text-lg text-gray-600 mt-4">
            <span className="font-semibold">Cidade:</span> {time.city}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Conferência:</span> {time.conference}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Divisão:</span> {time.division}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Campeonatos:</span> {time.championships}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Arena:</span> {time.arena}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Treinador Principal:</span> {time.headCoach}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Fundação:</span> {time.founded}
          </p>
          <a href={time.website} target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500 mt-4 block hover:underline">
            Visite o site oficial do {time.nome_time}
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default TimePage;