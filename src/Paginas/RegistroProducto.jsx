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
                    <form className="form-horizontal row">

                        <div class="form-group required row mb-3">
                            <label for="categoria" class="control-label col-md-4 requiredField text-start">Categoria<span class="asteriskField">*</span> </label>
                            <div class="controls col-md-8 ">
                                <input class="input-md  textinput textInput form-control" id="categoria" maxlength="20" name="categoria" placeholder="Ingrese la categoria del producto" type="text" />
                            </div>
                        </div>

                        <div class="form-group required row mb-3">
                            <label for="subId" class="control-label col-md-4 requiredField text-start">Sub ID<span class="asteriskField">*</span></label>
                            <div class="controls col-md-8 ">
                                <input class="input-md textinput textInput form-control" id="subId" maxlength="3" name="subid" placeholder="Ingrese sub id del producto" type="text" />
                            </div>
                        </div>

                        <div class="form-group required row mb-3">
                            <label for="nombre" class="control-label col-md-4 requiredField text-start">Nombre<span class="asteriskField">*</span> </label>
                            <div class="controls col-md-8 ">
                                <input class="input-md  textinput textInput form-control" id="nombre" maxlength="30" name="nombre" placeholder="Ingrese el nombre del producto" type="text" />
                            </div>
                        </div>

                        <div class="form-group required row mb-3">
                            <label for="descripcion" class="control-label col-md-4 requiredField text-start">Descripcion del producto<span class="asteriskField">*</span> </label>
                            <div class="controls col-md-8 ">
                                <input class="input-md  textinput textInput form-control" id="descripcion" maxlength="100" name="descripcion" placeholder="Ingrese la descripcion del producto" type="text" />
                            </div>
                        </div>

                        <div class="form-group required row mb-3">
                            <label for="precio" class="control-label col-md-4 requiredField text-start">Precio del producto<span class="asteriskField">*</span> </label>
                            <div class="controls col-md-8 ">
                                <input class="input-md  textinput textInput form-control" id="precio" maxlength="10" name="precio" placeholder="Ingrese el precio del producto" type="text" />
                            </div>
                        </div>

                        <div class="form-group required row mb-3">
                            <label for="precio" class="control-label col-md-4 requiredField text-start">Imagen del producto<span class="asteriskField">*</span> </label>
                            <div class="controls col-md-8 ">
                                <input class="input-md  textinput textInput form-control" id="imagen"  name="imagen" type="file" accept=".jpg" />
                            </div>
                        </div>

                        <div class="form-group required row mb-3">
                            <label for="precio" class="control-label col-md-4 requiredField text-start">Documento del producto<span class="asteriskField">*</span> </label>
                            <div class="controls col-md-8 ">
                                <input class="input-md  textinput textInput form-control" id="producto"  name="producto" type="file" accept=".pdf" />
                            </div>
                        </div>

                        <div class="form-group required row mb-3 col-2">
                            <button class="btn btn-info" type="submit">GUARDAR</button>
                        </div>

                    </form>

                    <div class="text-center col-8">
                            <h6>El estaus del producto se generara automaticamente como inactivo debera modificarlo y confirmar los datos para validar su estatus activo y ser visuble al publico</h6>
                    </div>

                </div>
            </section>
                
        </div>
        <Footer/>    
        </>
    )
}

export default RegistroProducto
