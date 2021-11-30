import React,{ useEffect } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import { selectUser } from '../features/userSlice';
import { db, auth } from '../firebase/firebaseConfig'


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
    let misCompras = [];

    useEffect(() => {
        db.collection('compras')
            .onSnapshot(snapshot => {
                snapshot.docs.map(product => ({
                    
                }))
            })
    },[]) 


    return (
        <>
        <NavBar/>
        <div className="container userData text-center my-3 p-3">
            <div className="row text-center justify-content-center">
                <h4>{name}</h4>
                <h5>{email}</h5>
                <hr/>
                <h4>Mis compras</h4>
                {
                
                misCompras ? 
                <>
                {
                
                misCompras.map((compras) => (
                    <>
                    {compras}
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
