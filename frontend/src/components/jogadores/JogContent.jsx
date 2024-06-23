import React, { useState } from 'react';
import SearchJog from './SearchJog';
import Cards from './Cards';

// Importar todas as imagens dos jogadores
import lebron from '../../assets/jogadores/lebron.png';
import curry from '../../assets/jogadores/curry.png';
import durant from '../../assets/jogadores/durant.png';
import giannis from '../../assets/jogadores/giannis.png';
import harden from '../../assets/jogadores/harden.png';
import kawhi from '../../assets/jogadores/kawhi.png';
import davis from '../../assets/jogadores/davis.png';
import doncic from '../../assets/jogadores/doncic.png';
import lillard from '../../assets/jogadores/lillard.png';
import embiid from '../../assets/jogadores/embiid.png';

// Dados dos jogadores com as imagens importadas
const jogadores = [
    {
        id: 1,
        first_name: 'LeBron',
        last_name: 'James',
        image: lebron
    },
    {
        id: 2,
        first_name: 'Stephen',
        last_name: 'Curry',
        image: curry
    },
    {
        id: 3,
        first_name: 'Kevin',
        last_name: 'Durant',
        image: durant
    },
    {
        id: 4,
        first_name: 'Giannis',
        last_name: 'Antetokounmpo',
        image: giannis
    },
    {
        id: 5,
        first_name: 'James',
        last_name: 'Harden',
        image: harden
    },
    {
        id: 6,
        first_name: 'Kawhi',
        last_name: 'Leonard',
        image: kawhi
    },
    {
        id: 7,
        first_name: 'Anthony',
        last_name: 'Davis',
        image: davis
    },
    {
        id: 8,
        first_name: 'Luka',
        last_name: 'Doncic',
        image: doncic
    },
    {
        id: 9,
        first_name: 'Damian',
        last_name: 'Lillard',
        image: lillard
    },
    {
        id: 10,
        first_name: 'Joel',
        last_name: 'Embiid',
        image: embiid
    }
];

const JogContent = () => {
    const [searchResults, setSearchResults] = useState(jogadores);

    const handleSearch = (searchTerm) => {
        const filteredResults = jogadores.filter(jogador =>
            `${jogador.first_name} ${jogador.last_name}`.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    return (
        <div className="md:m-10 max-w-full rounded-xl">
            <SearchJog onSearch={handleSearch} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 p-1">
                {searchResults.map(player => (
                    <Cards 
                        key={player.id} 
                        playerName={`${player.first_name} ${player.last_name}`} 
                        image={player.image}
                        link={`/jogadores/${player.id}`} // Adiciona um link para a página do jogador
                    />
                ))}
            </div>
        </div>
    );
};

export default JogContent;
