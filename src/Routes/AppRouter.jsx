import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductScreen from '../Paginas/VerMas';
import Catalogo from '../Paginas/Catalogo';
import Inicio from '../Paginas/Inicio';
import RegistroProducto from '../Paginas/RegistroProducto';

const AppRouter = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Inicio/>} />    
                <Route exact path="/productos" element={<Catalogo />} />
                <Route path="/producto/:id" element={<ProductScreen/> } />
                <Route exat path="/registroProducto" element={<RegistroProducto/> } />
                {/* Redirect cambio por Navigate to */}
                <Route path="*" element={<Inicio/>} />
            </Routes>
        </Router>
        </>
    )
}

export default AppRouter
