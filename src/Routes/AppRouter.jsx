import React,{ useEffect } from 'react'
import { useDispatch } from 'react-redux'; 
import { db, auth } from '../firebase/firebaseConfig'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { saveTodo } from '../features/slice';

import ProductScreen from '../Paginas/VerMas';
import Catalogo from '../Paginas/Catalogo';
import Inicio from '../Paginas/Inicio';
import RegistroProducto from '../Paginas/RegistroProducto';

const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        //console.log('re render');
        db.collection('productos').orderBy('categoria', "asc")
            .onSnapshot((snapshot) => {
                dispatch(saveTodo(snapshot.docs.map(product => ({
                    idProducto: product.id,
                    subId: product.data().subId,
                    nombre: product.data().nombre,
                    description: product.data().descripcion,
                    precio: product.data().precio,
                    estatus: product.data().estatus,
                    categoria: product.data().categoria,
                }))))
            })
    },[]) 
    
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
