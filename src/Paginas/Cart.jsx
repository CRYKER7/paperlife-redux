import React,{ useEffect } from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import CartItem from '../components/CartItems';
import { Link } from 'react-router-dom';
import { db, auth } from '../firebase/firebaseConfig'
import { useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase';
import { sesion, logout, selectUser } from '../features/userSlice';

const Cart = () => {
    const user = useSelector(selectUser)
    const cart = JSON.parse(localStorage.getItem('cart'))
   
    let total = 0;
    let cantInCart = 0;
    const dispatch = useDispatch();

    cart ?
    cantInCart = cart.length
    :
    cantInCart = 0;

    //console.log(cantInCart)

    const clearAllCart = () => {
        localStorage.clear();
        window.location.reload()
    };
    




    const delFromCart = (producto) => {
        let newCart = JSON.parse(localStorage.getItem('cart'));
        //console.log("eliminar este", producto)
        
        let indice = cart.indexOf(producto);
        //console.log(indice)
        newCart.splice(indice, 1)

        localStorage.setItem('cart', JSON.stringify(newCart)) 
        window.location.reload()
        //alert("Se elimino correctamente");
    }


    const comprar = async () => {
        if(user){
            let items =  []
            cart.map(item => {
                items.push(item.idProducto)
            })
            db.collection("compras").add({
                user: user.uid,
                productos: items
            })
            window.location.href = "/perfil"
        }else{
            alert("Por favor inicia Sesion para continuar")
            loginGoogle()
        }
    }   



    const loginGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        await auth.signInWithPopup(provider)
    }

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                dispatch(sesion({
                    email:userAuth.email,
                    name: userAuth.displayName,
                    uid: userAuth.uid
                }))
            }
            else {
                dispatch(logout)
            }
        })
    },[])

    cart?
        cart.map(item => {
            total=total+ parseFloat(item.precio)
        })
        :
        total=0
    

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
                    <div className="row justify-content-center mb-5 card col-10 text-center">
                        <h5>Total a pagar: {total}</h5>
                        <button className="btn btn-light col-11" onClick={() => comprar()}>Comprar</button>
                    </div>
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
