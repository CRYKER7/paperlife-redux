import React,{ useReducer, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import { db, auth } from '../firebase/firebaseConfig'

import CartItem from '../components/CartItems';
import ProductItem from '../components/ProductItems';
import { consultaStock, saveTodo } from '../features/slice';

import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const ShoppingCart = () => {

    const productosLista = useSelector(consultaStock);
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
    
    
    /*
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const {products, cart} = state;
    
    const addToCart = (id) => {
        //console.log(id)
        dispatch({type:TYPES.ADD_TO_CART,payload: id});
    };

    const delFromCart = (id) => {
        dispatch({types:TYPES.REMOVE_FROM_CART, payload:id})
    };
    
    const clearCart = () => {
        dispatch({type:TYPES.CLEAR_CART});
    };
*/
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
