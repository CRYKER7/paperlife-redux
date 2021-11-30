import React, { useState } from 'react'
import firebase from 'firebase';
import { auth } from '../firebase/firebaseConfig';
import NavBar from './Navbar';
import Footer from './Footer';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loginn, setLoginn] = useState(true);

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() =>
        //console.log('login'))
        
        setName('')
        setEmail('')
        setPassword('')
    }
    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        if (!name) return alert("Por favor ingrese un nombre!")
        if (!email) return alert("Por favor ingrese un email!")
        if (!password) return alert("Por favor ingrese un password!")

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name
            }).then(() => {
                //console.log('login')
            })
            .catch (error => {
                //console.log(error)
            })
        })
        setName('')
        setEmail('')
        setPassword('')
    }
    const loginGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        await auth.signInWithPopup(provider)
    }

    return (
        <>
        <NavBar/>
        <div className="container login">
            {
                loginn ?
                <>
                <h2>Iniciar sesion</h2>
                <form onSubmit={handleSubmitLogin}>
                    <input type="email" placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit">Ingresar</button>

                    <button className="google" type="button" onClick={loginGoogle}>Ingresar con Google</button>
                </form>
                <p>¿Eres nuevo? <span onClick={() => setLoginn(!loginn)}>Registrarse ahora</span></p>

                </> :
                <>
                <h2>Register</h2>
                <form onSubmit={handleSubmitRegister}>
                    <input type="text" placeholder="Usuario" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit">Ingresar</button>
                </form>
                <p>¿Ya eres usuario? <span onClick={() => setLoginn(!loginn)}>Iniciar sesión</span></p>
                </>
            }
        </div>
        <Footer/>
        </>
    )
}
