import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

//import { TYPES } from '../Actions/shoppingActions';
//import { shoppingInitialState, shoppingReducer } from '../Reducers/shoppingReducer'
import { consultaStock,  } from '../features/slice';

import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


const ProductScreen =({ history }) => {

    const productosLista = useSelector(consultaStock);
    //const dispatch = useDispatch();

    const { id } = useParams();
    console.log(id);

    //console.log(productosLista)

    function unProducto(productosLista){
        return productosLista.idProducto === id
    }
    const producto = productosLista.find(unProducto);
    
    const existe = false;

    useEffect(() => {
        return () => {
            const {idProducto, subId, nombre, categoria, descripcion, precio } = producto;
            const path = `/img/products/${categoria}/${subId}.jpg`;
            //if(producto && existe == false ){ !existe }
        }
    }, [])
    


    console.log(producto)
    /* const addToCart = (id) => {
        dispatch({type:TYPES.ADD_TO_CART,payload: id});
    }; */
    

    
    //const path = `/img/products/${categoria}/${subId}.jpg`;
    
   
    
    return (
        <>
        <NavBar/>
        {
            //existe ?  : ;
        }
        

        <Footer/>
        </>
    );
};

export default ProductScreen;