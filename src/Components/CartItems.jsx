import React from 'react'
import { Link } from 'react-router-dom';


const CartItems = ({data, delFromCart}) => {
    let {idProducto, subId, nombre, precio, categoria, quantity} = data;
    const path = `/img/products/${subId}.jpg`;

    return (
        <> 
        <div className="container m-1 col-11 card row d-flex align-items-center ">
            <div className="row d-flex align-items-center text-start" >
                <Link className="col-md-3  d-flex align-items-center" to={`/producto/${idProducto}` }>
                    <img src={path} alt={nombre} style={{ width: "40%"}}/>
                </Link>
                <div  className="col-md-9  d-flex align-items-center row">
                    <Link className="text-black" to={`/producto/${idProducto}` }>
                        <h4 className="col-12 text-uppercase ">#{subId} {nombre} - {categoria}</h4>
                        <h5 className="col-12 ">$ {precio}.00 x {quantity} = $ {precio * quantity}.00 MXN </h5>
                    </Link>
                    
                    <div className="col-xs-10 text-center align-items-center row">
                        <button className="col-md-3 btn btn-light" onClick={() => delFromCart(idProducto)} >Eliminar</button>&nbsp;&nbsp;
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default CartItems
