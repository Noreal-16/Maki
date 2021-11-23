import React, { useEffect } from "react";
import "../css/frmProyectoNuevo.css";
import persona from "../Imagenes/home/rostro.png";
import add from "../Iconos/home/agregar.png";
import up from "../Iconos/home/up.png";
import terreno from "../Imagenes/home/terreno.png";
import SimpleMap from "../componentes/maps";
import ecuador from "../Iconos/home/ecuador.png";
function FrmProyectosNuevo() {
  const [frmMapa, setfrmMapa] = React.useState(true);

  return (
    <div className="FrmProyectosNuevo">
      <div className="">
        <div className="formulario1">
          <form>
            <div className="">
              <div className="containerFrmImg">
                <div className="containerFrm">
                  <label className="labelInfo">Cédula o pasaporte</label>
                  <input
                    type="text"
                    className="inputInfo"
                    name=""
                    id=""
                    placeholder="Ejem. 1100999999"
                  ></input>
                </div>
                <div className="containerFrm">
                  <label className="labelInfo">Correo electrónico</label>
                  <input
                    className="inputInfo"
                    type="email"
                    name=""
                    id=""
                    placeholder="Ejem. demo@demo.com"
                  ></input>
                </div>
                <div className="containerFrm">
                  <label className="labelInfo">Dimensiones del terreno </label>
                  <input
                    type="text"
                    className="inputInfo"
                    name=""
                    id=""
                    placeholder="Ejm. 1000 2000 m^2 "
                  ></input>
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
                      <label className="labelInfo">Dirección del terreno</label>
                      <input className=" long-direccion" type="text" name="" id="" placeholder="Ejem. Barrio las palmeras, call. Rio y Cascarilla" ></input>
                    </div>
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
                  <label>¿Escrituras vigentes?</label>
                  <div class="form-check distance">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="escrituras"
                      id="escriturasSi1"
                      value="option1"
                      checked
                    />
                    <label
                      class="form-check-label stileText"
                      for="exampleRadios10"
                    >
                      Si
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="escrituras"
                      id="escriturasNo2"
                      value="option2"
                    />
                    <label
                      class="form-check-label stileText"
                      for="exampleRadios20"
                    >
                      No
                    </label>
                  </div>
                </div>

                <div className="containerRadio">
                  <label>¿Predio urbano vigente?</label>
                  <div class="form-check distance">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="predios"
                      id="prediosSi"
                      value="option1"
                      checked
                    />
                    <label class="form-check-label stileText" for="prediosSi">
                      Si
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="predios"
                      id="prediosNo"
                      value="option2"
                    />
                    <label class="form-check-label stileText" for="prediosNo">
                      No
                    </label>
                  </div>
                </div>

                <div className="containerRadio">
                  <label>¿Posee el certificado para linea de fabrica?</label>
                  <div class="form-check distance">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="certificado"
                      id="certificadoSi"
                      value="option1"
                      checked
                    />
                    <label
                      class="form-check-label stileText"
                      for="certificadoSi"
                    >
                      Si
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="certificado"
                      id="certificadoNo"
                      value="option2"
                    />
                    <label
                      class="form-check-label stileText"
                      for="certificadoNo"
                    >
                      No
                    </label>
                  </div>
                </div>
                <div className="containerRadio">
                  <label>¿Tiempo de proyecto?</label>
                  <p className="texiPlanos">
                    Suba los planos arquitectonicos en PDF o fotografía{" "}
                  </p>
                  <div class="form-check ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="TiemposP"
                      id="tiemposP1"
                      value="option1"
                      checked
                    />
                    <label
                      class="form-check-label stileText"
                      for="tiemposP1"
                    >
                      Ampliación
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="TiemposP"
                      id="tiemposPH2"
                      value="option2"
                    />
                    <label
                      class="form-check-label stileText"
                      for="tiemposPH2"
                    >
                      Propieda horizontal
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="TiemposP"
                      id="TiemposPN3"
                      value="option3"
                    />
                    <label
                      class="form-check-label stileText"
                      for="TiemposPN3"
                    >
                      Ninguna de las anteriores
                    </label>
                  </div>
                  <div className="iconUpload">
                    <img src={up} />
                  </div>
                </div>
               
              </div>
              <div className="containerChec">
              <div className="containerRadio">
                  <label>¿Cuenta con una carta de servicio basico?</label>
                  <div class="form-check ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="carta"
                      id="cartaSi"
                      value="option1"
                      checked
                    />
                    <label class="form-check-label stileText" for="cartaSi">
                      Si
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="carta"
                      id="cartaNo"
                      value="option2"
                    />
                    <label class="form-check-label stileText" for="cartaNo">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="frnFoster">
                <label className="texlabel">Seleccionar horario para asesoría gratuita</label>
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
                  placeholder="Hola necesito ayuda para remodelar mi cocina / habitación / baño. Realmente me gusta el estilo de la imagen. Espero tener el proyecto listo al final del próximo mes"
                ></textarea>
              </div>
              <div className="container-botones">
                <button>REGRESAR Y GUARDAR </button>
                <button>COMENZAR COTIZACIÓN </button>
              </div>
              <div className="container-label ">
                <input className="input-lavel" type="checkbox" name="politica" />
                <label className="check-Label" for="politica">Acepto los Términos y Condiciones</label>
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

export default FrmProyectosNuevo;
