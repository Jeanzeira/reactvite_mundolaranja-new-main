import React, { useState } from 'react';
import SearchTime from './SearchTime';
import TimeCard from './TimeCard'; // Importe o componente TimeCard (ou Cards, se for o caso)

// Importando imagens diretamente
import hawksImage from '../../assets/times/hawks.png';
import celticsImage from '../../assets/times/celtics.png';
import netsImage from '../../assets/times/nets.png';
import hornetsImage from '../../assets/times/hornets.png';
import bullsImage from '../../assets/times/bulls.png';
import cavaliersImage from '../../assets/times/cavaliers.png';
import mavericksImage from '../../assets/times/mavericks.png';
import nuggetsImage from '../../assets/times/nuggets.png';
import pistonsImage from '../../assets/times/pistons.png';
import warriorsImage from '../../assets/times/warriors.png';

// Dados dos times com as imagens importadas
const times = [
    {
        id: 1,
        nome: 'Atlanta Hawks',
        imagem: hawksImage
    },
    {
        id: 2,
        nome: 'Boston Celtics',
        imagem: celticsImage
    },
    {
        id: 3,
        nome: 'Brooklyn Nets',
        imagem: netsImage
    },
    {
        id: 4,
        nome: 'Charlotte Hornets',
        imagem: hornetsImage
    },
    {
        id: 5,
        nome: 'Chicago Bulls',
        imagem: bullsImage
    },
    {
        id: 6,
        nome: 'Cleveland Cavaliers',
        imagem: cavaliersImage
    },
    {
        id: 7,
        nome: 'Dallas Mavericks',
        imagem: mavericksImage
    },
    {
        id: 8,
        nome: 'Denver Nuggets',
        imagem: nuggetsImage
    },
    {
        id: 9,
        nome: 'Detroit Pistons',
        imagem: pistonsImage
    },
    {
        id: 10,
        nome: 'Golden State Warriors',
        imagem: warriorsImage
    },
];

const TimeContent = () => {
    const [searchResults, setSearchResults] = useState(times);

    const handleSearch = (searchTerm) => {
        const filteredResults = times.filter(time =>
            time.nome.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    return (
        <div className="md:m-10 max-w-full rounded-xl">
            <SearchTime onSearch={handleSearch} /> {/* Componente de busca de time */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 p-1">
                {searchResults.map(time => (
                    <TimeCard 
                    key={time.id} 
                    team={time.nome}  // Alterado para 'team' para corresponder ao componente TimeCard
                    image={time.imagem}
                    link={`/times/${time.id}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TimeContent;
