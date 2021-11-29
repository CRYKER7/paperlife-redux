import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

import ProductItem from '../components/ProductItems';
import { consultaStock } from '../features/slice';
import { addTo } from '../features/sliceCart';

const ShoppingCart = () => {
    const productosLista = useSelector(consultaStock);
    const dispatch = useDispatch()
    
    
    const addToCart = (data) => {
        dispatch(addTo({ 
            data
        } ))
    }


    return (
        <>
        <NavBar/>
        <div className="container-fluid mt-5 text-center">
           <h3>Productos</h3> 
           <div className="row justify-content-center mb-3">
               {
                   productosLista ? <>
                   { 
                        productosLista.map(producto => (
                            <ProductItem
                                key={producto.idProducto}
                                data={ producto }
                                addToCart={addToCart}
                            />
                        ))
                    }
                    </> : 
                    <h1>Sin productos</h1>
                }            
           </div> 
          
           </div>
           <Footer/>
            
        </>
    )
}

export default ShoppingCart
