import React, {useEffect} from "react";
import "../css/carrucel.css";

import imgArquitecto from "../Imagenes/home/carrucel1.png";
import imgAbogado from "../Imagenes/home/carrucel2.png";
import imgDisenadores from "../Imagenes/home/carrucel3.png";
function Carrucel() {
  const [modalLogin, setLoginModal ] = React.useState(false);

  return (
    <div className="Carrucel">
      
      <div className="containerCarr">
        <p className="titleCarrucel">Encuentra Profesionales</p>
        <div className="container-carrucel">
          <button
            class="boton-flecha slick-prev"
            id="button-prev"
            data-button="button-prev"
            onclick=" "
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-left"
              class="svg-inline--fa fa-chevron-left fa-w-10"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
              ></path>
            </svg>
          </button>
          <div className="container-carrucel">
            <a href="/about">
              <img src={imgArquitecto} alt="Image"></img>
              <p className="textImgFunciones">Arquitectos</p>
            </a>
          </div>
          <div className="container-carrucel">
            <a href="/">
              <img src={imgAbogado} alt="Image"></img>
              <p className="textImgFunciones">Abogados</p>
            </a>
          </div>
          <div className="container-carrucel">
            <a href="/">
              <img src={imgDisenadores} alt="Image"></img>
              <p className="textImgFunciones">Diseñadores</p>
            </a>
          </div>
          <button class="boton-flecha1 slick-next" id="button-next" data-button="button-next" onclick="app.processingButton(event)">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
            </button>
        </div>
      </div>
     
    </div>
  );
}

export default Carrucel;
