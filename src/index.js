import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import MovieDetail from './components/MovieDetail/MovieDetail';
import { BrowserRouter, Routes, Route } from "react-router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/detalles-pelicula/:idPelicula" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
