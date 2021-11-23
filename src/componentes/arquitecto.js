import React, { useEffect } from "react";
import "../css/arquitecto.css";
import arquit from "../Imagenes/home/arquit.png";
import persona from "../Imagenes/home/person.png";
import strellaOn from "../Iconos/home/starOn.png";
import strellaOff from "../Iconos/home/starOff.png";
/**Imagenes */
import lugares from "../Iconos/home/maleta.png";
import educacion from "../Iconos/home/virre.png";
import ubicacion from "../Iconos/home/ubicacion.png";
import contacto from "../Iconos/home/iphone1.png";
import pagina from "../Iconos/home/web.png";
import redes from "../Iconos/home/follow.png";
import facebook from "../Iconos/home/fb.png";
import instagram from "../Iconos/home/insta.png";
import twiter from "../Iconos/home/twiter.png";


function Arquitecto() {
  return (
    <div className="Arquitecto">
      <div className="container-arquitecto">
        <img className="img-arquitecto" src={arquit} />
      </div>
      <div className="container-perfil-arquitecto">
        <div className="containerImg-arquitecto">
          <img src={persona} />
        </div>
        <div className="information-arquitecto">
          <h2>John Carpio</h2>
        </div>
        <div className="cardStar-arquitecto">
          <nav className="star-arquitecto">
            <img className="img-arquitecto-star" src={strellaOn} />
          </nav>
          <nav className="star-arquitecto">
            <img className="img-arquitecto-star" src={strellaOn} />
          </nav>
          <nav className="star-arq">
            <img className="img-arq-star" src={strellaOn} />
          </nav>
          <nav className="star-arquitecto">
            <img className="img-arquitecto-star" src={strellaOn} />
          </nav>
          <nav className="star-arquitecto">
            <img className="img-arquitecto-star" src={strellaOff} />
          </nav>
        </div>
        <div className="container-publicaciones-arquitecto">
          <p className="text-publi-arquitecto">Publicaciones</p>
          <linea className="linea-separador-publi-arquitecto" />
          <p className="text-publi">Información</p>
          <margen className="linea-baja-arquitecto" />
        </div>
      </div>
      <div className="container-info-general">
          <h1 className="infor-general" >Información general</h1>
          <div className="container-iconos">
              <div className="cont-img-txt">
                  <img alt="lugares" src={lugares} />
                  <h2  >Lugares de trabajo</h2>
                  <div className="cont-txt">
                    <p className="txt-des" >Bufet de arquitectos</p>
                    <p className="dato">2arquitectos</p>
                  </div>
              </div>
              <div className="cont-img-txt">
                  <img alt="lugares" src={educacion} />
                  <h2  >Centros de formación</h2>
                  <div className="cont-txt">
                    <p className="txt-des1" >Arquitectura en Universidad técnica Particular de Loja</p>
                    
                  </div>
              </div>
              <div className="cont-img-txt">
                  <img className="tamano01" alt="lugares" src={ubicacion} />
                  <h2 className="tamanoTxt" >Recidencia</h2>
                  <div className="cont-txt">
                    <p className="txt-des2" >Loja</p>
                  </div>
              </div>
              <div className="cont-img-txt">
                  <img className="tamano01" alt="lugares" src={contacto} />
                  <h2 className="tamanoTxt" >Contacto</h2>
                  <div className="cont-txt">
                    <p className="txt-des3" >No hay número de contacto que mostrar</p>
                  </div>
              </div>
              <div className="cont-img-txt">
                  <img alt="lugares" src={pagina} />
                  <h2 className="tamanoTxt" >Pagina web</h2>
                  <div className="cont-txt">
                    <p className="txt-des4" >juanperez.com</p>
                   
                  </div>
              </div>
              <div className="cont-img-txt">
                  <img alt="lugares" src={redes} />
                  <h2  >Redes sociales</h2>
              </div>
              <div className="container-redes">
                <div className="cont-icontxt">
                    <img alt="Facebook" className="facebook" src={facebook} />
                    <p className="txt-face">/juanperez</p>
                </div>
                <div className="cont-icontxt">
                    <img alt="Facebook" className="facebook" src={instagram} />
                    <p className="txt-face">@juanperez23</p>
                </div>
                <div className="cont-icontxt">
                    <img alt="Facebook" className="facebook" src={twiter} />
                    <p className="txt-face">@juanperez_23</p>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Arquitecto;
