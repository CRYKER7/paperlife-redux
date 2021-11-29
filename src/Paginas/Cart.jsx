import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
//import { TYPES } from '../Actions/shoppingActions';
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import CartItem from '../components/CartItems';
import { consultaCart, clearCart } from '../features/sliceCart';

const Cart = () => {

    const cart = useSelector(consultaCart)
    const dispatch = useDispatch()
   
    const clearAllCart = () => {
        dispatch(clearCart());
    };
    


    return (
        <>
            <NavBar/>
            <div className="container-fluid mt-5 text-center">
            <h3>Carrito</h3> 
                <div className="row justify-content-center">
                   <div className="row justify-content-center">
                    <button onClick={clearAllCart}  className="btn btn-light col-md-2 col-xs-2 ">Limpiar Carrito</button><hr/>
                    {
                    cart.map((item, index) => (
                        <CartItem key={index} data={item}  />
                    ))
                    }
                    </div>
                </div> 
           </div>
           <Footer/>
        </>
    )
}

export default Cart
