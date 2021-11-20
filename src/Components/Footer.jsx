import React from 'react'

const Footer = () => {
    return (
        <footer className="footer text-faded text-center py-5 text-white">
            <div className="container">
                <div className="row d-flex justify-content-center"> 
                    <div className="col-3">
                        <p className="mb-0">Correo Electronico<br/> 
                            <img src="/img/email.png" alt="email icon"/>
                            contactto@paperlife.com
                        </p>    
                    </div>
                    <div className="col-3">
                        <p className="m-0 small">Derechos reservados &copy; RexGame 2021</p>      
                    </div>  
                    <div className="col-3">  
                        <p>
                            Facebook
                            <a className="nav-link text-white" href="https://www.facebook.com/paperlifecraft" target="_blank" rel="noreferrer">
                                <img src="/img/facebook.png" alt="" /><br/>
                                 @paperlifecraft  
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
