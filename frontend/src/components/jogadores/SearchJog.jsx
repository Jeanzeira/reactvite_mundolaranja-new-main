import React, { useState } from 'react';

const SearchJog = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className="py-10">
            <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
                <input
                    type="text"
                    className="w-full h-10 px-4 text-white bg-transparent focus:outline-none"
                    placeholder="Digite o nome do jogador..."
                    value={searchTerm}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default SearchJog;
