import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feed = ({ userId }) => {
    const [feedData, setFeedData] = useState([]);

    useEffect(() => {
        const fetchFeed = async () => {
            try {
                // Substitua pela URL do seu endpoint de API backend
                const response = await axios.get(`http://localhost:8000/api/feed/${userId}`);
                setFeedData(response.data); // Assume que a API retorna um array de notícias
            } catch (error) {
                console.error('Erro ao buscar o feed:', error);
            }
        };

        fetchFeed();
    }, [userId]);

    return (
        <div className="mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Feed de Notícias</h2>
            <div className="bg-gray-800 pt-10 pb-0 rounded-t-lg">
                {feedData.length === 0 ? (
                    <p className="text-gray-500">Carregando...</p>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {feedData.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={item.photoUrl} alt={item.title} className="h-48 w-full object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
                                    <p className="text-gray-600 mt-2">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Feed;
