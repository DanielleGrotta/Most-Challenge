import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Empresas from './Empresas/Empresas';
import Clientes from './Clientes/Clientes';
import Contato from './Contato/Contato';
import Sobre from './Sobre/Sobre';
import Login from './Login/Login';
import Error from './Error-page/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
    <App />
    <Router>
      <Routes>
        <Route path="/Empresas" element={<Empresas />} />
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Sobre" element={<Sobre />} />
        {/* <Route path="*"element={<Error />} /> */}
      </Routes>
    </Router>
  </>
);


