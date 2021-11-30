import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import { selectUser } from '../features/userSlice';


const User = () => {
    const user = useSelector(selectUser)

    
    let { name, email} = []
    //console.log(user)
    if(user){
        name = user.name;
        email = user.email;
    }


    return (
        <>
        <NavBar/>
        <div className="container userData text-center my-3 p-3">
            <div className="row text-center justify-content-center">
                <h4>{name}</h4>
                <h5>{email}</h5>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default User
