import React,{ useState } from 'react'
import { Link } from 'react-router-dom';

import { storage } from '../firebase/firebaseConfig';

const UserItem = ({data}) => {
    let {idProducto, subId, nombre, precio, categoria, img, pdf} = data;
    
    const [imgPath, setImgPath] = useState('')
    const [pdfPath, setPdfPath] = useState('')
    const getImgUrl = async () => {
        setImgPath(await storage.ref(img).getDownloadURL());
    }
    const getPdfUrl = async () => {
        setPdfPath(await storage.ref('pdf/' + categoria + '/' + subId + '.pdf').getDownloadURL());
    }
    getImgUrl();
    getPdfUrl();

    const descargarArchivo = () => {
        window.open(pdfPath, '_blank');
    }

    return (
        <> 
        <div className="container m-1 col-11 card row d-flex align-items-center my-3">
            <div className="row d-flex align-items-center text-start" >
                <img className="user-producto" src={imgPath} alt={nombre}/>
                <div  className="col-md-9  d-flex align-items-center row">
                    <h4 className="col-12 text-uppercase ">#{subId} {categoria} - {nombre}</h4>
                    <button className="btn btn-warning" onClick={descargarArchivo}>Ver Archivo</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserItem
