import React from 'react'
import { useSelector } from 'react-redux'; 

//import CartItem from '../components/CartItems';
import ProductItem from '../components/ProductItems';
import { consultaStock } from '../features/slice';

import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const ShoppingCart = () => {

    const productosLista = useSelector(consultaStock);
   
    return (
        <>
        <NavBar/>
        <div className="container-fluid mt-5 text-center">
           <h3>Productos</h3> 
           <div className="row justify-content-center">
               {
                   productosLista ? <>
                   { 
                        productosLista.map(producto => (
                            <ProductItem
                                key={producto.idProducto}
                                idProducto={producto.idProducto}
                                categoria={producto.categoria}
                                description={producto.descripcion}
                                estatus={producto.estatus}
                                nombre={producto.nombre}
                                precio={producto.precio}
                                subId= {producto.subId}
                            />
                        ))
                    }
                    </> : 
                    <h1>Sin productos</h1>
                }
               {/*{products.map((product) => (
                <ProductItem 
                key={1} 
                categoria={product.categoria}
                description={product.descripcion}
                estatus={product.estatus}
                nombre={product.nombre}
                precio={product.precio}
                subId= {product.subId}
                />
               ))}*/}
                
           </div> 
           {/*<h3>Carrito</h3>
           <div className="row justify-content-center">
               <button onClick={clearCart}  className="btn btn-light col-md-2 col-xs-2 ">Limpiar Carrito</button><hr/>
               {cart.map((item, index) => (
                <CartItem key={index} data={item} delFromCart={delFromCart} />
                ))}
           </div> */}
           <br/>
           </div>
           <Footer/>
            
        </>
    )
}

export default ShoppingCart
