import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import { consultaStock } from '../features/slice'

const Categorias = () => {
    const categorias = useSelector(consultaStock);

    return (
        <>
        <NavBar/>
        <div className="container-fluid mt-5 text-center">
           <h3>Categorias</h3> 
           <div className="row justify-content-center mb-3">
            {
                categorias ? 
                <>
                {
                categorias.map(categoria => (
                    <>
                    <div className="col-xs-10 col-md-4" >
                        <div className="card align-items-center text-center">
                        <Link className="card-link text-black" to={`/productos/${categoria.categoria}` }>
                        <h3 className="card-title text-uppercase tutulo-personal">{ categoria.categoria } </h3>
                        {/* <img className="card-img-top" src={path} alt={nombre} style={{ width: "80%", height: "80%"}} /> */}
                    </Link>
                        </div>
                    </div>
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

export default Categorias
