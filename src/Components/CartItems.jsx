import React,{ useState } from 'react'
import { Link } from 'react-router-dom';

import { storage } from '../firebase/firebaseConfig';

const CartItems = ({data, delFromCart}) => {
    let {idProducto, subId, nombre, precio, categoria, img} = data;
    
    const [path, setPath] = useState('')
    const getUrl = async () => {
        setPath(await storage.ref(img).getDownloadURL());
    }
    getUrl();

    return (
        <> 
        <div className="container m-1 col-11 card row d-flex align-items-center my-3">
            <div className="row d-flex align-items-center text-start" >
                <Link className="col-md-3  d-flex align-items-center" to={`/producto/${idProducto}` }>
                    <img src={path} alt={nombre} style={{ width: "40%"}}/>
                </Link>
                <div  className="col-md-9  d-flex align-items-center row">
                    <Link className="text-black" to={`/producto/${idProducto}` }>
                        <h4 className="col-12 text-uppercase ">#{subId} {nombre} - {categoria}</h4>
                        <h5 className="col-12 ">$ {precio}.00 MXN</h5>
                    </Link>
                    
                    <div className="col-xs-10 text-center align-items-center row">
                        <button className="col-md-3 btn btn-light" onClick={() => delFromCart(data)} >Eliminar</button>&nbsp;&nbsp;
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default CartItems
