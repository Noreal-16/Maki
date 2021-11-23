import React, { useEffect } from "react";
import "../css/perfilUsr.css";
import strellaOn from "../Iconos/home/starOn.png";
import strellaOff from "../Iconos/home/starOff.png";
import persona from "../Imagenes/home/rostro.png";
import home from "../Iconos/home/home.png";
import save from "../Iconos/home/add.png";
import follow from "../Iconos/home/follow.png";
import edit from "../Iconos/home/edit.png";
function PerfilUsr(props) {
  /**
     * Metoo para recibi ID
     */
   const enviarDataUsr = (id) => (event) => {
    event.preventDefault();
    props.onEnviaId(id);
}
  return (
    <div className="PerfilUsr">
      
      <div className="container-perfil">
      <a onClick={enviarDataUsr(4)}>
        <div className="container-img">
          <img src={persona}></img>
          <p>María Perez</p>
        </div>
        <div className="container-star">
          <nav className="star-perfil">
            <img src={strellaOn} />
          </nav>
          <nav className="star-perfil">
            <img src={strellaOn} />
          </nav>
          <nav className="star-perfil">
            <img src={strellaOn} />
          </nav>
          <nav className="star-perfil">
            <img src={strellaOn} />
          </nav>
          <nav className="star-perfil">
            <img src={strellaOff} />
          </nav>
          <p className="calificacion">Calificación como cliente</p>
        </div>
        <div className="container-informacion">
          <nav className="info">
            <img src={home} />
            <p>Vive en Loja</p>
          </nav>
          <nav className="info">
            <img src={save} />
            <p>Guardado</p>
          </nav>
          <nav className="info">
            <img src={follow} />
            <p>Siguiendo</p>
          </nav>
          <nav className="info">
            <img src={edit} />
            <p>Editar perfil</p>
          </nav>
        </div>
        </a>
      </div>
      
    </div>
  );
}

export default PerfilUsr;
