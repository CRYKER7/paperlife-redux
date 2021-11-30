import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { storage } from '../firebase/firebaseConfig';

export const ProductItem = ({ data }) => {
    const { idProducto, subId, categoria, nombre, precio, img } = data;
   
    const [path, setPath] = useState('')
    const getUrl = async () => {
        setPath(await storage.ref(img).getDownloadURL());
    }
    getUrl();


    const addToCart = () => {
        let data = JSON.parse(localStorage.getItem('cart'));
        let nuevo = {
            'idProducto': idProducto,
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
        
        if(!existe.includes(idProducto)){
            data.push(nuevo);
            localStorage.setItem('cart', JSON.stringify(data)) 
            alert("Agregado al carrito");
        }else{
            alert("Ya existe en el carrito");
        }
    };  


    return (
        <div className="col-xs-10 col-md-4" >
            <div className="card align-items-center text-center">
                <div className="col-12 d-flex text-center row mb-md-4 mb-xs-1" >
                    <Link className="card-link text-black" to={`/producto/${idProducto}` }>
                        <h3 className="card-title text-uppercase tutulo-personal">#{subId} {nombre} </h3>
                        <img className="card-img-top" src={path} alt={nombre} style={{ width: "80%", height: "80%"}} />
                    </Link>
                </div>
                <div className="col-10 text-center">
                    <h4 className="card-text col-8 text-center">$ {precio}.00 MXN</h4> 
                    <Link className="card-text btn col-8 " to={`/producto/${idProducto}` }>Ver Más ...</Link>
                    <button className="btn btn-light col-8" onClick={() => addToCart(idProducto)} >Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
