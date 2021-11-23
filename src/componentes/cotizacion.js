import React, { useEffect } from "react";
import "../css/cotizacion.css";
import arquit from "../Imagenes/home/arquit.png";
import persona from "../Imagenes/home/person.png";
import strellaOn from "../Iconos/home/starOn.png";
import strellaOff from "../Iconos/home/starOff.png";
import llamame from "../Iconos/home/whatsapp.png";
import casa01 from "../Imagenes/home/casa01.png";
import casa02 from "../Imagenes/home/casa02.png";
import casa03 from "../Imagenes/home/casa03.png";
import casa04 from "../Imagenes/home/casa04.png";


function Cotizacion(props) {
  const [modalLogin, setLoginModal] = React.useState(false);
   /**
     * Metoo para recibi ID
     */
    const enviarDataCot = (id) => (event) => {
      event.preventDefault();
      props.onEnviaId(id);
  }
  return (
    <div className="Cotizacion Seguimiento">
      <div className="container-arq">
        <img className="img-arq" src={arquit} />
      </div>
      <div className="container-perfil-arq">
        <div className="containerImg-arq">
          <img src={persona} />
        </div>
        <div className="information-arq">
          <h2>John Carpio</h2>
        </div>
        <div className="cardStar-arq">
            <nav className="star-arq">
              <img className="img-arq-star" src={strellaOn} />
            </nav>
            <nav className="star-arq">
              <img className="img-arq-star" src={strellaOn} />
            </nav>
            <nav className="star-arq">
              <img className="img-arq-star" src={strellaOn} />
            </nav>
            <nav className="star-arq">
              <img className="img-arq-star" src={strellaOn} />
            </nav>
            <nav className="star-arq">
              <img className="img-arq-star" src={strellaOff} />
            </nav>
          </div>
          <div className="container-publicaciones">
              <a onClick={enviarDataCot(2)}><p className="text-publi">Publicaciones</p></a>
              <linea  className="linea-separador-publi"/>
              <a onClick={enviarDataCot(3)} ><p className="text-publi">Información</p></a>
              <linea  className="linea-separador-publi"/>
              <div className="container-whatsapp">
              <a><p className="text-publi mensaje">Mensaje</p></a>
              <img className="img-whats" src={llamame}/>
              </div>
              <margen className="linea-baja" />
          </div>
          <div className="container-bienes">
            <div className="container-img-text">
                <img onClick={enviarDataCot(2)} className="img-casa" src={casa01}/>
                <p className="txt-casa" >Vivienda unifamiliar</p>
            </div>
            <div className="container-img-text">
                <img className="img-casa" src={casa02}/>
                <p className="txt-casa" >Reforma y remodelación</p>
            </div>
            <div className="container-img-text">
                <img className="img-casa" src={casa03}/>
                <p className="txt-casa" >Ampliaciones</p>
            </div>
            <div className="container-img-text">
                <img className="img-casa" src={casa04}/>
                <p className="txt-casa" >Institucionales</p>
            </div>
          </div>
          <a href="/proyectos">
          <button type="submit" className="btn-cotizacion" >Comenzar cotización</button>
          </a>
      </div>
    </div>
  );
}

export default Cotizacion;
