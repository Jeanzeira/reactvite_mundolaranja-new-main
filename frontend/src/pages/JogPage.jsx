import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const JogPage = () => {
    const { id } = useParams();
    const [jogador, setJogador] = useState(null);

    useEffect(() => {
        const fetchJogador = async () => {
            try {
                const response = await fetch(`http://localhost:3000/jogadores/${id}`);
                if (!response.ok) {
                    throw new Error('Falha ao buscar jogador');
                }
                const data = await response.json();
                setJogador(data);
            } catch (error) {
                console.error('Erro:', error);
            }
        };

        fetchJogador();
    }, [id]);

    if (!jogador) {
        return <p>Carregando jogador...</p>;
    }

    return (
        <div className="bg-gray-500 m-20 md:m-10 max-w-full rounded-xl p-4">
            {/* <h2 className="text-white text-3xl font-bold mb-4">{jogador.first_name} {jogador.last_name}</h2> */}
            {/* <div className="flex justify-center items-center">
                <img src={jogador.image} alt={`${jogador.first_name} ${jogador.last_name}`} className="w-72 h-72 object-cover rounded-full shadow-lg" />
            </div> */}
            <div className="mt-4 text-white">
                <p><strong>Posição:</strong> {jogador.nome}</p>
                {/* <p><strong>Altura:</strong> {jogador.height} ft</p>
                <p><strong>Peso:</strong> {jogador.weight} lbs</p>
                <p><strong>Número:</strong> {jogador.jersey_number}</p>
                <p><strong>Universidade:</strong> {jogador.college}</p>
                <p><strong>País:</strong> {jogador.country}</p>
                <p><strong>Ano do Draft:</strong> {jogador.draft_year}</p>
                <p><strong>Round do Draft:</strong> {jogador.draft_round}</p>
                <p><strong>Pick do Draft:</strong> {jogador.draft_number}</p>
                <p><strong>Time:</strong> {jogador.team.name}</p> */}
            </div>
        </div>
    );
};

export default JogPage;