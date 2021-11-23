import React, { useEffect } from "react";
import "../css/reforma.css";
import persona from "../Imagenes/home/rostro.png";
import add from "../Iconos/home/agregar.png";
import up from "../Iconos/home/up.png";
import ecuador from "../Iconos/home/ecuador.png";
import terreno from "../Imagenes/home/terreno.png";
import SimpleMap from "../componentes/maps";
function Reforma() {
  const [frmMapa, setfrmMapa] = React.useState(true);
  return (
    <div className="Reforma">
      <div className="">
        <div className="formulario1">
          <form>
            <div className="">
              <div className="containerFrmImg">
                <div className="containerFrm">
                  <label className="labelInfo">Cédula o pasaporte</label>
                  <input type="text" className="inputInfo" name="" id="" placeholder="Ejem. 1100999999"></input>
                </div>
                <div className="containerFrm">
                  <label className="labelInfo">Correo electrónico</label>
                  <input className="inputInfo" type="email" name="" id="" placeholder="Ejem. demo@demo.com" ></input>
                </div>
                <div className="containerFrm">
                  <label className="labelInfo">Ubicación de la vivienda</label>
                  <input type="text" className="inputInfo" name="" id="" placeholder="Ejem. Barrio las palmeras, call. Rio y Cascarilla " ></input>
                </div>
              </div>
              <div className="containerImgTerreno">
                <label className="labelInfo">Subir fotos de terreno</label>
                <div className="containerTerrenos">
                  <div className="imgGroup">
                    <button>
                      <img src={add} />
                    </button>
                    <img className="imgTerreno" src={terreno} />
                    <img className="imgTerreno" src={terreno} />
                    <img className="imgTerreno" src={terreno} />
                  </div>
                  <div className="containerInputs">
                    <div className="containerFrm1">
                      <label className="labelInfo">Teléfono</label>
                      <input className=" long" name="" id=""></input>
                      <div className="extencion">
                          <img alt="Ecuador" className="icn-ecuador" src={ecuador} />
                          <p className="cod-ecuador">+593</p>
                          <nav className="triangulo down-triangle"></nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="containerMapa">
                <p className="pMapa">Seleccione ubicación del terreno </p>
                <div className="mapa">
                  <SimpleMap></SimpleMap>
                </div>
              </div>
              <div className="containerChec">
                
                <div className="containerRadio">
                  <label>¿Tipo de proyecto?</label>
                  <div class="form-check distance">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <label
                      class="form-check-label stileText"
                      for="exampleRadios1"
                    >
                      Diseño de interior
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value="option2"
                    />
                    <label
                      class="form-check-label stileText"
                      for="exampleRadios2"
                    >
                      Obra menor
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios3"
                      value="option3"
                    />
                    <label
                      class="form-check-label stileText"
                      for="exampleRadios3"
                    >
                      Reparaciones
                    </label>
                  </div>
                </div>
                
              </div>
              <div className="frnFoster">
                <label className="texlabel">
                  {" "}
                  Seleccionar horario para asesoría gratuita{" "}
                </label>
                <input
                  className="inputInfo contorno"
                  type="text"
                  id=""
                  name=""
                  placeholder="Escoja horario"
                />
                <nav className="triangulo down-triangle ubicacionProNuevo"></nav>
              </div>
              <div className="frnFoster1">
                <label className="texlabel">
                  {" "}
                  Comentarios acerca de su proyecto{" "}
                </label>
                <textarea
                  className="inputInfo contorno1"
                  type="text"
                  id=""
                  name=""
                  placeholder="Hola necesito ayuda para remodelar mi cocina / habitación / baño. Realmente me gusta el estilo de la imagen. Espero tener el proyecto listo al final del proximo mes"
                ></textarea>
              </div>
              <div className="container-botones">
                <button>REGRESAR Y GUARDAR </button>
                <button>COMENZAR COTIZACIÓN </button>
              </div>
              <div className="container-label ">
                <input className="" type="checkbox" name="politica" />
                <label for="politica">
                  Acepto los Términos y Condiciones
                </label>
              </div>
              <br></br>
              <br></br>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reforma;
