import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'

const Categorias = () => {
    var categorias = [
        { categoria: "Anime" },
        { categoria: "Marvel" },
        { categoria: "DC" },
        { categoria: "Dinosaur King" },
        { categoria: "Hora de Aventura" },
        { categoria: "Juegos" },
        { categoria: "Power Rangers" },
        { categoria: "Rick and Morty" },
        { categoria: "Sonic" },
        { categoria: "Star Wars" },
        { categoria: "Tortugas Ninja" },
        ];

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
                
                categorias.map((categoria) => (
                    <>
                    <Link className="text-black col-xs-10 col-md-4" to={`/productos/${categoria.categoria}` }>
                        <div className="card align-items-center text-center">
                        
                        <h3 className="card-title text-uppercase tutulo-personal">{ categoria.categoria } </h3>
                        {/* <img className="card-img-top" src={path} alt={nombre} style={{ width: "80%", height: "80%"}} /> */}
                    
                        </div>
                    </Link>
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
