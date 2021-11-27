import React /*,{ useRef }*/ from "react";

import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

//import { TYPES } from '../Actions/shoppingActions';
//import { shoppingInitialState, shoppingReducer } from '../Reducers/shoppingReducer'
import { consultaStock  } from '../features/slice';

import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


const ProductScreen =({ history }) => {
    //const {child, parent, contenido, buttonOK} = useRef();
    //console.log(child.current);

    const productosLista = useSelector(consultaStock);
    //const dispatch = useDispatch();
    

    const { id } = useParams();
    //console.log(id);

    //console.log(productosLista)
    function unProducto(productosLista){
        return productosLista.idProducto === id
    }
    const producto = productosLista.find(unProducto);
    
    let { subId, nombre, precio, description, categoria } = []
    let path;
    //console.log(producto)
    if(producto){
        subId = producto.subId;
        nombre = producto.nombre;
        precio = producto.precio;
        description = producto.description;
        categoria = producto.categoria;
        path = `/img/products/${categoria}/${subId}.jpg`;
        //console.log(subId)
    }
   
    const addToCart = (idProducto) => {
        let data = JSON.parse(localStorage.getItem('cart'));
        let nuevo = {
            'idProducto': idProducto,
            'subId': subId,
            'categoria': categoria,
            'nombre': nombre,
            'precio': precio,
        }
        let existe = localStorage.getItem('cart');
        if(data == null){
            data = [];
        }
        if(existe == null){
            existe = "";
        }
        
        if(!existe.includes(idProducto)){
            data.push(nuevo);
            localStorage.setItem('cart', JSON.stringify(data)) 
            //jAlert("Producto Añadido al carrito", "<b>Okay!</b>");
        }
        //console.log(existe)
    };  
   /*
    function jAlert(text, customokay){
        //console.log(contenido.current)
        const butoton = buttonOK.current
        const contenidodo = contenido.current

        contenidodo.innerHTML = text;
        butoton.innerHTML = customokay;
        
        document.body.style.backgroundColor = "gray";
        document.body.style.cursor="wait";
    }
    
    function jAlertagree(){
        //console.log(child.current)
        const parent = parent.current
        const child = child.current
        //this.child.removeChild()
        parent.removeChild(child);
        //child.classList.toggle("ocultar")
        document.body.style.backgroundColor="white";
        document.body.style.cursor="default";
    }
*/
    

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
                            <button className="btn btn-light col-8" onClick={() => addToCart(id)} >Agregar</button>
                            <Link to="/productos" className="btn btn-warning col-5">Regresar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* <div id="jAlRem" ref={parent}>
            <div id="jAlert" className="ocultar" ref={child} >
                <table id="jAlert_table" >
                    <tr id="jAlert_tr">
                        <td id="jAlert_td">  <p id="jAlert_content" ref={contenido}></p>  </td>
                        <td id="jAlert_td">  
                            <button id='jAlert_ok' ref={buttonOK} onClick={() => jAlertagree()}></button>
                        </td>
                    </tr>
                </table>
            </div>
        </div> */}

        <Footer/>
        </>
    );
};

export default ProductScreen;