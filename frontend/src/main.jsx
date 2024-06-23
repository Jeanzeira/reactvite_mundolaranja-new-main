import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './index.css'
import Login from "./pages/Login"
import Feed from "./pages/Feed"
import Jogadores from "./pages/Jogadores"
import Times from "./pages/Times"
import Noticias from "./pages/Noticias"
import JogPage from './pages/JogPage';
import TimePage from './pages/TimePage';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/feed' element={<Feed/>} />
        <Route path='/jogadores' element={<Jogadores/>} />
        <Route path='/times' element={<Times/>} />
        <Route path='/noticias' element={<Noticias/>} />
        <Route path="/jogadores/:id" element={<JogPage/>} />
        <Route path="/times/:id" element={<TimePage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
