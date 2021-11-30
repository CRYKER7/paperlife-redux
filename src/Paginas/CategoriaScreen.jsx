import React,{ useState } from "react";

import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

//import { TYPES } from '../Actions/shoppingActions';
//import { shoppingInitialState, shoppingReducer } from '../Reducers/shoppingReducer'
import { consultaStock  } from '../features/slice';
import { storage } from '../firebase/firebaseConfig';

import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


const CategoriaScreen =({ history }) => {
    const { categoria } = useParams();
    const productos = useSelector(consultaStock)
    
    /*
    productos = [productos].filter("categoria", categoria)

    */
    function categoriaCompleta(cate){
        return productos.categoria === cate;
    }

    /* const todaCategoria = categoriaCompleta(categoria)

    console.log(todaCategoria) */

    return (
        <>
        <NavBar/>
        
        <div className="container mt-5 mb-5 text-center">
            <div className="card text-center align-items-center row" >
                {
                    <>
                    <div className="col-xs-12 xol-md-4">

                    </div>
                    </>
                }
                
            </div>
        </div>
        
        <Footer/>
        </>
    );
};

export default CategoriaScreen;