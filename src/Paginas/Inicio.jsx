import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import NavBar from '../Components/Navbar'

const Inicio = () => {
    return (
        <div >
            <NavBar/>
            <Header/>

            <h1 className="site-heading text-center text-white d-none d-md-block mt-5"> 
                <span className="site-heading-upper text-primary mb-3">Qué es Paperlife?</span>
            </h1>

            <section className="page-section row overflow-hidden ms-0 me-0">
                <div className="col-12 col-lg-6 bg-faded right-0 text-center p-5 m-0">
                    <p>En Paperlife, somos una tienda digital de arte de papercraft donde podrás encontrar múltiples modelos de diferentes franquicias y categorías, diseñados con la mejor calidad y facilidad de uso.</p>
                    <p>Cada modelo esta diseñado para ser impreso en una hoja de 8.5 X 11 pulgadas (tamaño carta). Solo debes imprimir, cortar y  armar tu modelo. La diversión esta garantizada.</p>
                    <p>No importa si quieres divertirte un rato, hacer una actividad con tu familia y amigos, o crear ese regalo para esa persona tan especial para ti, Paperlife es tu mejor opción para conseguir los mejores modelos de papercraft.</p>
                </div>
                <div className="div-img col-12 col-lg-6 m-0 p-0">
                    <img className="imagen" src="./img/unicornioSlider.png" alt="" />
                </div>
            </section>

            <Footer/>

        </div>
    )
}

export default Inicio
