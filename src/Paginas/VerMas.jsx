import React,{ useReducer, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import { db, auth } from '../firebase/firebaseConfig'

import { TYPES } from '../Actions/shoppingActions';
//import { shoppingInitialState, shoppingReducer } from '../Reducers/shoppingReducer'
import { consultaStock, saveTodo } from '../features/slice';

import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


const ProductScreen =({ history }) => {

    const productosLista = useSelector(consultaStock);
    //const dispatch = useDispatch();


    const { id } = useParams();
    console.log(id);

    //console.log(productosLista)
    
    function unProducto(productosLista){
        return productosLista.idProducto == id
    }

    const { idProducto, subId, nombre, description, categoria, precio } = productosLista.find(unProducto);
    
    //const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    //let producto = state.products.find(product => product.idProducto === id);
    
    /* useEffect(() => {
        //console.log('re render');
        db.collection('productos')
            .onSnapshot((snapshot) => {
                producto(snapshot.docs.map(product => ({
                    idProducto: product.id,
                    subId: product.data().subId,
                    nombre: product.data().nombre,
                    description: product.data().descripcion,
                    precio: product.data().precio,
                    estatus: product.data().estatus,
                    categoria: product.data().categoria,
                }))))
            })
    },[])  */

    //let {idProducto, subId, nombre, precio, categoria, description} = producto;
    //console.log(producto);

    const path = `/img/products/${categoria}/${subId}.jpg`;
    
    /* const addToCart = (id) => {
        dispatch({type:TYPES.ADD_TO_CART,payload: id});
    }; */
    
    return (
        <>
        <NavBar/>
        
        <div className="container mt-5 text-center">
            <div className="card text-center align-items-center row" >
                <div className="row col-12">
                    <div className="col-md-3 col-xs-10 d-flex align-items-center" style={{ width: "400px", height: "400px"}}>
                        <img className="card-img" src={path} alt={nombre} style={{ width: "90%", height: "90%"}} />
                    </div>
                    <div className="col-xs-10 col-md-5 align-items-start text-start mt-3 card-text">
                        <h3 className="card-title row"># {subId} - {nombre}</h3>
                        <h3 className="card-text row">{description}</h3>
                        <h3 className="card-text row">Categoria: {categoria}</h3>
                        <h4 className="card-text row">Precio:$ {precio}.00 MXN</h4> 
                        <div className="card-text row text-center align-items-center">
                            {/* <button onClick={() => addToCart(idProducto)} className="btn btn-light col-5">Agregar</button>&nbsp;&nbsp;&nbsp; */}
                            <Link to="/productos" className="btn btn-warning col-5">Regresar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/> 
        <Footer/>
        </>
    );
};

export default ProductScreen;