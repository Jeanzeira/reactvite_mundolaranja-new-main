import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ playerName, image, link }) => {
    return (
        <Link to={link} className="block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-4">
                <div className="w-48 h-48 mx-auto overflow-hidden">
                    <img src={image} alt={playerName} className="object-cover w-full h-full" />
                </div>
                <h3 className="mt-2 text-white text-lg font-semibold text-center">{playerName}</h3>
            </div>
        </Link>
    );
};

export default Cards;
