import React,{ useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { db, auth } from '../firebase/firebaseConfig'
import { saveTodo } from '../features/slice';
import { sesion, logout, selectUser } from '../features/userSlice';

import ProductScreen from '../Paginas/VerMas';
import Catalogo from '../Paginas/Catalogo';
import Inicio from '../Paginas/Inicio';
import RegistroProducto from '../Paginas/RegistroProducto';
import Cart from '../Paginas/Cart';
import User from '../Paginas/User';
import Categorias from '../Paginas/Categorias';
import CategoriaScreen from '../Paginas/CategoriaScreen';

const AppRouter = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectUser)

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                dispatch(sesion({
                    email:userAuth.email,
                    name: userAuth.displayName,
                    uid: userAuth.uid
                }))
            }
            else {
                dispatch(logout)
            }
        })
    },[])

    useEffect(() => {
        db.collection('productos').orderBy('categoria').orderBy('subId', "asc")
            .onSnapshot((snapshot) => {
                dispatch(saveTodo(snapshot.docs.map(product => ({
                    idProducto: product.id,
                    subId: product.data().subId,
                    nombre: product.data().nombre,
                    description: product.data().description,
                    precio: product.data().precio,
                    estatus: product.data().estatus,
                    categoria: product.data().categoria,
                    img: product.data().img
                }))))
            })
    },[]) 

    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Inicio/>} />    
                <Route path="/productos" element={<Catalogo />} />
                <Route path="/producto/:id" element={<ProductScreen/> } />
                <Route path="/categorias/" element={<Categorias/> } />
                <Route path="/productos/:categoria" element={<CategoriaScreen /> } />
                { user ? 
                    user.email === "contactopaperlife@gmail.com" ? 
                        <Route exact path="/registroProducto" element={<RegistroProducto/> } />    
                        :
                        <Route exact path="/registroProducto" element={<Inicio/> } />
                    :  
                    <></>
                }

                <Route path="/carrito" element={<Cart/> } /> 
                { user ?
                    <Route exat path="/perfil" element={<User /> } /> 
                    :
                    <Route exat path="/perfil" element={<Inicio/> } /> 
                }
                <Route exat path="/perfil" element={<User /> } /> 
               
               {/* Redirect cambio por Navigate to */}
                <Route path="*" element={<Inicio/>} />
            </Routes>
        </Router>
        </>
    )
}

export default AppRouter
