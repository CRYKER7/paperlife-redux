import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import CartItem from '../components/CartItems';

const Cart = () => {

const kart = localStorage.getItem('cart');
let cart = []
if(kart){
    cart = JSON.parse(kart)
}
const clearCart = () => {
    localStorage.clear()
}

const delFromCart = () => {
    
}

    return (
        <>
            <NavBar/>
            <div className="container-fluid mt-5 text-center">
            <h3>Carrito</h3> 
                <div className="row justify-content-center">
                   <div className="row justify-content-center">
                    <button onClick={clearCart}  className="btn btn-light col-md-2 col-xs-2 ">Limpiar Carrito</button><hr/>
                    {
                    cart.map((item, index) => (
                        <CartItem key={index} data={item} delFromCart={delFromCart} />
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
