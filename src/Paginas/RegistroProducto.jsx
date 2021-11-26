import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'

const RegistroProducto = () => {

    
    return (
        <>
        <NavBar/>
        <div className="container">
            <section className="page-section row overflow-hidden ms-0 me-0">
                <div className="col-12 row bg-faded text-center p-5 m-0">
                    <h3>Registro de productos</h3>
                    <form className="form-horizontal row col-10 ">

                        <div className="form-group required row mb-3">
                            <label htmlFor="categoria" className="control-label col-md-4 requiredField text-start">Categoria<span className="asteriskField">*</span> </label>
                            <div className="controls col-md-8 ">
                                <input className="input-md  textinput textInput form-control" id="categoria" maxLength="20" name="categoria" placeholder="Ingrese la categoria del producto" type="text" />
                            </div>
                        </div>

                        <div className="form-group required row mb-3">
                            <label htmlFor="subId" className="control-label col-md-4 requiredField text-start">Sub ID<span className="asteriskField">*</span></label>
                            <div className="controls col-md-8 ">
                                <input className="input-md textinput textInput form-control" id="subId" maxLength="3" name="subid" placeholder="Ingrese sub id del producto" type="text" />
                            </div>
                        </div>

                        <div className="form-group required row mb-3">
                            <label htmlFor="nombre" className="control-label col-md-4 requiredField text-start">Nombre<span className="asteriskField">*</span> </label>
                            <div className="controls col-md-8 ">
                                <input className="input-md  textinput textInput form-control" id="nombre" maxLength="30" name="nombre" placeholder="Ingrese el nombre del producto" type="text" />
                            </div>
                        </div>

                        <div className="form-group required row mb-3">
                            <label htmlFor="descripcion" className="control-label col-md-4 requiredField text-start">Descripcion del producto<span className="asteriskField">*</span> </label>
                            <div className="controls col-md-8 ">
                                <input className="input-md  textinput textInput form-control" id="descripcion" maxLength="100" name="descripcion" placeholder="Ingrese la descripcion del producto" type="text" />
                            </div>
                        </div>

                        <div className="form-group required row mb-3">
                            <label htmlFor="precio" className="control-label col-md-4 requiredField text-start">Precio del producto<span className="asteriskField">*</span> </label>
                            <div className="controls col-md-8 ">
                                <input className="input-md  textinput textInput form-control" id="precio" maxLength="10" name="precio" placeholder="Ingrese el precio del producto" type="text" />
                            </div>
                        </div>

                        <div className="form-group required row mb-3">
                            <label htmlFor="precio" className="control-label col-md-4 requiredField text-start">Imagen del producto<span className="asteriskField">*</span> </label>
                            <div className="controls col-md-8 ">
                                <input className="input-md  textinput textInput form-control" id="imagen"  name="imagen" type="file" accept=".jpg" />
                            </div>
                        </div>

                        <div className="form-group required row mb-3">
                            <label htmlFor="precio" className="control-label col-md-4 requiredField text-start">Documento del producto<span className="asteriskField">*</span> </label>
                            <div className="controls col-md-8 ">
                                <input className="input-md  textinput textInput form-control" id="producto"  name="producto" type="file" accept=".pdf" />
                            </div>
                        </div>

                        <div className="required row mb-3 col-12 text-center">
                            <button className="btn btn-info col-md-2 col-xs-2" type="submit">GUARDAR</button>
                        </div>

                    </form>

                    <div className="text-center row ">
                            <h4>El estaus del producto se generara automaticamente como inactivo debera modificarlo y confirmar los datos para validar su estatus activo y ser visuble al publico</h4>
                    </div>

                </div>
            </section>
                
        </div>
        <Footer/>    
        </>
    )
}

export default RegistroProducto
