import React,{ useReducer, useEffect } from 'react'
/* import { TYPES } from '../Actions/shoppingActions'; */
/* import { shoppingInitialState, shoppingReducer } from '../Reducers/shoppingReducer' */
import CartItem from '../Components/CartItems';
import ProductItem from '../Components/ProductItems';
import NavBar from '../Components/Navbar';
import { useSelector, useDispatch } from 'react-redux'; 
import { db } from '../firebase/firebaseConfig'
/* import { stock, consultaStock } from '../Funciones/slice'; */

const ShoppingCart = () => {

    const dispatch = useDispatch();
    /* useEffect(() => {
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

    const products = useSelector(consultaStock);
    */
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
           {/* <div className="row justify-content-center">
               {products.map((product) => (
                <ProductItem 
                key={product.id} 
                subId= {product.subId}
                nombre={product.nombre}
                description={product.descripcion}
                precio={product.precio}
                estatus={product.estatus}
                categoria={product.categoria}
                /* addToCart={addToCart} />
                ))}
                
           </div> */}
           <h3>Carrito</h3>
           {/* <div className="row justify-content-center">
               <button onClick={clearCart}  className="btn btn-light col-md-2 col-xs-2 ">Limpiar Carrito</button><hr/>
               {cart.map((item, index) => (
                <CartItem key={index} data={item} delFromCart={delFromCart} />
                ))}
           </div> */}
           <br/>
           </div>
            
        </>
    )
}

export default ShoppingCart
