import React,{ useEffect } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import { selectUser } from '../features/userSlice';
import { db } from '../firebase/firebaseConfig'


const User = () => {
    const user = useSelector(selectUser)
    
    let { name, email, uid} = []
    //console.log(user)
    if(user){
        name = user.name;
        email = user.email;
        uid = user.uid;
    }

    //localStorage.clear()
    let misCompras =  []

    useEffect(() => {
        db.collection('productos').orderBy('categoria').orderBy('subId', "asc")
            .onSnapshot((snapshot) => {
                snapshot.docs.map(item => {
                    console.log(item)
                })
            })
    },[]) 

    useEffect(() => {
        db.collection('compras')
            .onSnapshot((snapshot) => {
                snapshot.docs.map(item => {
                    console.log(item)
                })
            }
            )
            //console.log(misCompras)
    },[]) 


    return (
        <>
        <NavBar/>
        <div className="container userData text-center my-3 p-3">
            <div className="row text-center justify-content-center">
                <h4>{name}</h4>
                <h4>{email}</h4>
                <h4>{uid}</h4>
                <hr/>
                <h4>Mis compras</h4>
                {
                
                misCompras !== null ? 
                <>
                {
                
                misCompras.map((compras) => (
                    <>
                    {compras.uid}
                    </>
                ))
                }
                </>
                :
                <>
                </>
            }
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default User
