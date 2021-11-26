import React,{ useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { NavLink } from 'react-router-dom';
//import { consultaCart } from '../features/slice';
import { auth } from '../firebase/firebaseConfig'
import firebase from 'firebase';

import { sesion, logout, selectUser } from '../features/userSlice';



const NavBar = () => {

    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    const cart = localStorage.getItem('cart');
    let cant = [];

    useEffect(() => {
        cant = JSON.parse(cart)
        console.log(cant.length)
    },[])

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

    const salir = () => {
        dispatch(logout())
        auth.signOut()
    }

    const loginGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        await auth.signInWithPopup(provider)
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container-fluid">
                <NavLink className="nav-brand text-uppercase text-white" to="/">
                    <img src="/logo192.png" alt="" className="logo" />PaperLife
                </NavLink>
                
                <NavLink className="active containerZ text-uppercase text-white sirender mb-4" to="/carrito">
                    <img className="iconsss" src="/img/carrito.png" alt="carrito icon"/>
                    <div className="inCart">{cant.length}</div>
                 </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbaNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> 
            
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 row text-center">
                        
                        <li className="nav-item px-lg-4 mt-sm-5 mt-md-0 col-md-3 col-xs-12 m-3 m-md-0">
                            <NavLink className="active text-uppercase text-white" to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item px-lg-4 mt-sm-5 mt-md-0 col-md-3 col-xs-12 m-3 m-md-0">
                            <NavLink className="active text-uppercase text-white" to="/productos">Catálago</NavLink>
                        </li>
                        
                        { user ? 
                            user.email === "contactopaperlife@gmail.com" ? 
                                <>
                                    <li className="nav-item px-lg-4 mt-sm-5 mt-md-0 col-md-3 col-xs-12 m-3 m-md-0">
                                        <NavLink className="active text-uppercase text-white" to="/registroProducto">Registro</NavLink>
                                    </li>
                                    <li className="nav-item px-lg-4 mt-sm-5 mt-md-0 col-md-3 col-xs-12 m-3 m-md-0">
                                    <NavLink className="active text-uppercase text-white" to="/perfil">{user.name}</NavLink>
                                    </li>
                                </>
                            :
                                <li className="nav-item px-lg-4 mt-sm-5 mt-md-0 col-md-5 col-xs-12 m-3 m-md-0">
                                    <NavLink className="active text-uppercase text-white" to="/perfil">{user.name}</NavLink>
                                </li>
                            :
                                <>  </>
                        }
                    </ul>
                    <div className="nav-item mr-3 norender row">
                        <NavLink className="active containerZ text-uppercase text-white" to="/carrito">
                            <img className="iconsss" src="/img/carrito.png" alt="carrito icon"/>
                            <div className="inCart">{cant.length}</div>
                        </NavLink>
                    </div>
                    <div className="nav-item px-lg-4 d-flex mt-sm-5 mt-md-0 ml-5">
                        {
                            user ? 
                            <>  
                                <button className="salir btn" onClick={salir}>Salir</button>
                            </> :
                                <button className="google btn" type="button" onClick={loginGoogle}>Ingresar</button>

                                /*
                            <NavLink className="active text-uppercase text-white" to="/login">
                                <img className="logo" src="/img/usuario.png" alt="user icon"/>&nbsp;&nbsp;Login 
                            </NavLink>
                            */
                        }
                        
                        <br/><br/>
                    </div>
                    
                </div>
            </div>
        </nav>

        </>
    )
}

export default NavBar;
