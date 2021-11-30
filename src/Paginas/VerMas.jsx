import React,{ useState } from "react";

import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

//import { TYPES } from '../Actions/shoppingActions';
//import { shoppingInitialState, shoppingReducer } from '../Reducers/shoppingReducer'
import { consultaStock  } from '../features/slice';
import { storage } from '../firebase/firebaseConfig';

import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


const ProductScreen =({ history }) => {
    const productosLista = useSelector(consultaStock);
    const { id } = useParams();
    
    function unProducto(productosLista){
        return productosLista.idProducto === id
    }
    const producto = productosLista.find(unProducto);
    
    let { subId, nombre, precio, description, categoria, img } = []
  
    if(producto){
        subId = producto.subId;
        nombre = producto.nombre;
        precio = producto.precio;
        description = producto.description;
        categoria = producto.categoria;
        img = producto.img;
    }

    const [path, setPath] = useState('')
    const getUrl = async () => {
        setPath(await storage.ref(img).getDownloadURL());
    }
    getUrl();


    const addToCart = () => {
        let data = JSON.parse(localStorage.getItem('cart'));
        let nuevo = {
            'idProducto': id,
            'subId': subId,
            'categoria': categoria,
            'nombre': nombre,
            'precio': precio,
            'img': img
        }
        let existe = localStorage.getItem('cart');
        
        if(existe == null){
            existe = "";
        }
        if(data == null){
            data = [];
        }
        
        if(!existe.includes(id)){
            data.push(nuevo);
            localStorage.setItem('cart', JSON.stringify(data)) 
            alert("Agregado al carrito");
        }else{
            alert("Ya existe en el carrito");
        }
    };  

    return (
        <>
        <NavBar/>
        
        <div className="container mt-5 mb-5 text-center">
            <div className="card text-center align-items-center row" >
                <div className="row col-12">
                    <div className="col-md-3 col-xs-12 text-center p-md-1 p-0 my-md-5 my-2">
                        <img className="vermasImg" src={path} alt={nombre} />
                    </div>
                    <div className="col-xs-10 col-md-9 align-items-start text-start mt-3 card-text">
                        <h3 className="card-title row text-uppercase"># {subId} - {nombre}</h3>
                        <h4 className="card-text row ">{description}</h4>
                        <h3 className="card-text row ">Categoria: {categoria}</h3>
                        <h4 className="card-text row ">Precio:$ {precio}.00 MXN</h4> 
                        <div className="card-text row text-center align-items-center">
                            <button className="btn btn-light col-5" onClick={() => addToCart(id)} >Agregar</button>
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