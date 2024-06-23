// frontend/src/Login.jsx

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [isRecover, setIsRecover] = useState(false);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const showLogin = () => {
        setMessage('');
        setIsRegister(false);
        setIsRecover(false);
    };

    const showRegister = () => {
        setMessage('');
        setIsRegister(true);
        setIsRecover(false);
    };

    const showRecover = () => {
        setMessage('');
        setIsRecover(true);
        setIsRegister(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (isRecover) {
                // Implementação de recuperação de senha
                setMessage('Email de recuperação enviado!');
            } else if (isRegister) {
                // Criar novo usuário
                response = await axios.post('http://localhost:3000/usuarios', formData);
                setMessage('Conta criada com sucesso!');
            } else {
                // Realizar login
                response = await axios.post('http://localhost:3000/usuarios/login', formData); // Alteração aqui
                setMessage('Login realizado com sucesso!');
                // Lógica para armazenar o token de autenticação, por exemplo localStorage
            }
            console.log(response.data); // Exemplo de como tratar a resposta
        } catch (error) {
            console.error('Erro:', error);
            setMessage('Usuário ou senha incorretos!');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96 overflow-hidden">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">
                    {isRegister ? 'Registrar' : isRecover ? 'Recuperar Senha' : 'Entrar'}
                </h2>
                {message && (
                    <div className={`mb-4 p-2 text-center rounded-lg ${message.includes('incorreto') ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                        {message}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    {isRecover ? (
                        <div className="mb-4 transition-opacity duration-300">
                            <label className="block text-gray-300">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-600 rounded-lg text-gray-300 bg-gray-700 focus:outline-none focus:border-blue-500" required />
                        </div>
                    ) : (
                        <>
                            {isRegister && (
                                <div className="mb-4 transition-opacity duration-300">
                                    <label className="block text-gray-300">Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-600 rounded-lg text-gray-300 bg-gray-700 focus:outline-none focus:border-blue-500" required />
                                </div>
                            )}
                            <div className="mb-4 transition-opacity duration-300">
                                <label className="block text-gray-300">Usuário</label>
                                <input type="text" name="username" value={formData.username} onChange={handleChange} className="w-full p-2 border border-gray-600 rounded-lg text-gray-300 bg-gray-700 focus:outline-none focus:border-blue-500" required />
                            </div>
                            <div className="mb-4 transition-opacity duration-300">
                                <label className="block text-gray-300">Senha</label>
                                <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border border-gray-600 rounded-lg text-gray-300 bg-gray-700 focus:outline-none focus:border-blue-500" required />
                            </div>
                        </>
                    )}
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors duration-300">
                        {isRecover ? 'Recuperar Senha' : isRegister ? 'Registrar' : 'Entrar'}
                    </button>
                </form>
                <div className="text-center mt-4">
                    {!isRecover && (
                        <button onClick={showRecover} className="text-blue-500 hover:underline transition-colors duration-300">
                            Recuperar Senha
                        </button>
                    )}
                    <button onClick={isRegister || isRecover ? showLogin : showRegister} className="text-blue-500 hover:underline ml-4 transition-colors duration-300">
                        {isRegister || isRecover ? 'Entrar' : 'Registrar'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
