import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'

const RegistroProducto = () => {
    return (
        <>
        <NavBar/>
        <div className="container">
            <section className="page-section row overflow-hidden ms-0 me-0">
                <div className="col-12 row bg-faded text-center p-5 m-0">
                    <h3>Registro de productos</h3>
                    <form className="form-horizontal">
                        <div class="form-group required row">
                            <label for="subId" class="control-label col-md-4 requiredField">Sub ID<span class="asteriskField">*</span> </label>
                            <div class="controls col-md-8 ">
                                <input class="input-md  textinput textInput form-control" id="id_username" maxlength="30" name="username" placeholder="Choose your username" type="text" />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
                
        </div>
        <Footer/>    
        </>
    )
}

export default RegistroProducto
