import React,{ useReducer, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import { db } from '../firebase/firebaseConfig'

import { TYPES } from '../Actions/shoppingActions';
/* import { shoppingInitialState, shoppingReducer } from '../Reducers/shoppingReducer' */
import CartItem from '../Components/CartItems';
import ProductItem from '../Components/ProductItems';
import NavBar from '../Components/Navbar';

import { stock, consultaStock } from '../features/slice';
import Footer from '../Components/Footer';

const ShoppingCart = () => {
    const products = useSelector(consultaStock);
    const dispatch = useDispatch();

    useEffect(() => {
        db.collection('productos')
        .onSnapshot((snapshot) => {
            dispatch(stock(snapshot.docs.map(doc => ({
            idProducto: doc.id,
            subId: doc.data().subId,
            nombre: doc.data().nombre,
            description: doc.data().descripcion,
            precio: doc.data().precio,
            estatus: doc.data().estatus,
            categoria: doc.data().categoria,
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
           { products.map(product => (
                <ProductItem
                key={product.id} 
                categoria={product.categoria}
                description={product.descripcion}
                estatus={product.estatus}
                nombre={product.nombre}
                precio={product.precio}
                subId= {product.subId}
                />
            ))}
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
