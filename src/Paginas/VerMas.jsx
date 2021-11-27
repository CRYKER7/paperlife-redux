import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

//import { TYPES } from '../Actions/shoppingActions';
//import { shoppingInitialState, shoppingReducer } from '../Reducers/shoppingReducer'
import { consultaStock  } from '../features/slice';

import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


const ProductScreen =({ history }) => {

    const productosLista = useSelector(consultaStock);
    //const dispatch = useDispatch();
    

    const { id } = useParams();
    console.log(id);

    //console.log(productosLista)
    function unProducto(productosLista){
        return productosLista.idProducto === id
    }
    const producto = productosLista.find(unProducto);
    
    
    /* const {subId, nombre, categoria, description, precio } = producto; */
    //const path = `/img/products/${categoria}/${subId}.jpg`;
            //if(producto && existe == false ){ !existe }


    let { subId, nombre, precio, description, categoria } = []
    let path;
    console.log(producto)
    if(producto){
        subId = producto.subId;
        nombre = producto.nombre;
        precio = producto.precio;
        description = producto.description;
        categoria = producto.categoria;
        path = `/img/products/${categoria}/${subId}.jpg`;
        console.log(subId)
    }
    /* const addToCart = (id) => {
        dispatch({type:TYPES.ADD_TO_CART,payload: id});
    }; */
    
    
    return (
        <>
        <NavBar/>
        
        <div className="container mt-5 mb-5 text-center">
            <div className="card text-center align-items-center row" >
                <div className="row col-12">
                    <div className="col-md-3 col-xs-12 text-center">
                        <img className="card-img" src={path} alt={nombre} />
                    </div>
                    <div className="col-xs-10 col-md-9 align-items-start text-start mt-3 card-text">
                        <h3 className="card-title row text-uppercase"># {subId} - {nombre}</h3>
                        <h3 className="card-text row ">{description}</h3>
                        <h3 className="card-text row ">Categoria: {categoria}</h3>
                        <h4 className="card-text row ">Precio:$ {precio}.00 MXN</h4> 
                        <div className="card-text row text-center align-items-center">
                            {/* <button onClick={() => addToCart(idProducto)} className="btn btn-light col-5">Agregar</button>&nbsp;&nbsp;&nbsp; */}
                            <Link to="/productos" className="btn btn-warning col-5">Regresar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
        </>
    );
};

export default ProductScreen;