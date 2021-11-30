import React from 'react'
import { useSelector } from 'react-redux'; 
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

import ProductItem from '../components/ProductItems';
import { consultaStock } from '../features/slice';

const Catalogo = () => {
    const productosLista = useSelector(consultaStock);

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

export default Catalogo
