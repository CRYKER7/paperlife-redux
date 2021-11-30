import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import CartItem from '../components/CartItems';
import { Link } from 'react-router-dom';

const Cart = () => {

    const cart = JSON.parse(localStorage.getItem('cart'))
    let cantInCart = 0;
    cart ?
    cantInCart = cart.length
    :
    cantInCart = 0;

    console.log(cantInCart)

    const clearAllCart = () => {
        localStorage.clear();
        window.location.reload()
    };
    
    const delFromCart = (producto) => {
        let newCart = JSON.parse(localStorage.getItem('cart'));
        console.log("eliminar este", producto)
        
        let indice = cart.indexOf(producto);
        console.log(indice)
        newCart.splice(indice, 1)

        localStorage.setItem('cart', JSON.stringify(newCart)) 
        window.location.reload()
    }

    const comprar = () => {
        console.log("comprar")
    }


    return (
        <>
            <NavBar/>
            <div className="container-fluid mt-5 text-center">
            <h3>Carrito</h3> 
                <div className="row justify-content-center">
                   <div className="row justify-content-center mb-5">
                    {(cantInCart >= 1) ? 
                    <>
                        <button onClick={() => clearAllCart()}  className="btn btn-light col-md-2 col-xs-2">Limpiar Carrito</button><hr/> 
                        {cart.map((item, index) => (
                        <CartItem key={index} data={item} delFromCart={delFromCart}/>
                    ))}
                    <button className="btn btn-light col-md-2 col-xs-2" onClick={() => comprar()}>Comprar</button>
                    </>
                    :
                    <>
                        <h3>Sin Productos agregue productos antes</h3>
                        <Link to="/productos" className="btn btn-warning col-5">Regresar al catalogo</Link>
                    </>
                    }
                    
                    </div>
                </div> 
           </div>
           <Footer/>
        </>
    )
}

export default Cart
