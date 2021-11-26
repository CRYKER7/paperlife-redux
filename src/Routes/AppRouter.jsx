import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { db, auth } from '../firebase/firebaseConfig'
import { saveTodo } from '../features/slice';
import { sesion, logout, selectUser } from '../features/userSlice';

import ProductScreen from '../Paginas/VerMas';
import Catalogo from '../Paginas/Catalogo';
import Inicio from '../Paginas/Inicio';
import RegistroProducto from '../Paginas/RegistroProducto';

import { Login } from '../components/Login';

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
        db.collection('productos').orderBy('categoria', "asc")
            .onSnapshot((snapshot) => {
                dispatch(saveTodo(snapshot.docs.map(product => ({
                    idProducto: product.id,
                    subId: product.data().subId,
                    nombre: product.data().nombre,
                    description: product.data().description,
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
                <Route exat path="/registroProducto" element=
                {<RegistroProducto/> } />
                {/* <Route exat path="/login" element={<Login/> } /> */}
                {/* Redirect cambio por Navigate to */}
                <Route path="*" element={<Inicio/>} />
            </Routes>
        </Router>
        </>
    )
}

export default AppRouter
