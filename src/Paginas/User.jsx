import React,{ useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import { selectUser } from '../features/userSlice';
import { db } from '../firebase/firebaseConfig'
import { consultaStock } from '../features/slice';
import UserItem from '../components/UserItem';


const User = () => {
    const user = useSelector(selectUser)
    const productosLista = useSelector(consultaStock);
    
    let { name, email, uid} = []
    //console.log(user)
    if(user){
        name = user.name;
        email = user.email;
        uid = user.uid;
    }

    //localStorage.clear()
    const [misCompras, setMisCompras] =  useState([])
    let productos = []

    useEffect(() => {
        db.collection('productos').orderBy('categoria').orderBy('subId', "asc")
            .onSnapshot((snapshot) => {
                snapshot.docs.map(item => {
                    //console.log(item)
                })
            })
    },[]) 

    useEffect(async () => {
        if (user) {
            let autorizar = false
            await db.collection('compras').where("user", "==", uid)
                .onSnapshot((snapshot) => {
                    snapshot.docs.map(item => {
                        item.data().productos.map(element => {
                            if (!productos.includes(element))
                                productos.push(element)
                        })
                    })
                    setMisCompras(productos)
                }
            )
        }
    },[user]) 


    return (
        <>
        <NavBar/>
        <div className="container userData text-center my-3 p-3">
            <div className="row text-center justify-content-center">
                <h4>{name}</h4>
                <h5>{email}</h5>
                {/* <h5>{uid}</h5> */}
                <h4>Mis compras</h4>
                {misCompras.map(producto => {
                    return(
                        productosLista.map(data => {
                            if (data.idProducto == producto) return(
                                <>
                                    <UserItem
                                        key={data.idProducto}
                                        data={data}
                                    />
                                </>
                            )
                        })
                    )
                })}
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default User
