import React from "react";

import { useParams } from 'react-router'
import { useSelector } from 'react-redux'; 

import { consultaStock  } from '../features/slice';

import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductItem from '../components/ProductItemsCat';


const CategoriaScreen =({ history }) => {
    const { categoria } = useParams();
    const productos = useSelector(consultaStock)
    
    //const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

    //console.log(categoria.replace('%20', ' '));
    //console.log(categoria)

    return (
        <>
        <NavBar/>
        
        <div className="container mt-5 mb-5 text-center">
                {
                    <>
                    <div className="row justify-content-">
                    {
                    productos.map((producto) =>  (
                        producto.categoria === categoria ?
                        <ProductItem
                                key={producto.idProducto}
                                data={ producto }
                            />
                        :
                        <></>
                    ))
                }
                    </div>
                    </>
                }
                
        </div>
        
        <Footer/>
        </>
    );
};

export default CategoriaScreen;