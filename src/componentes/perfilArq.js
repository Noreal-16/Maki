import React, { useEffect } from "react";
import "../css/perfilArq.css";
import strellaOn from "../Iconos/home/starOn.png";
import strellaOff from "../Iconos/home/starOff.png";
import persona from "../Imagenes/home/person.png";
import home from "../Iconos/home/home.png";
import arquittec from "../Iconos/home/arquitecto.png";
import save from "../Iconos/home/add.png";
import follow from "../Iconos/home/follow.png";
import siguiendo from "../Iconos/home/addUser.png";
import edit from "../Iconos/home/edit.png";
function PerfilArq(props) {
  
  return (
    <div className="PerfilArq">
      
      <div className="container-perfil">
        <div className="container-img">
          <img src={persona}></img>
          <p>Juan Perez</p>
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
            <img src={arquittec} />
            <p>Arquitecto</p>
          </nav>
          <nav className="info">
            <img src={save} />
            <p>Guardado</p>
          </nav>
          <nav className="info">
            <img src={follow} />
            <p>Seguidores</p>
          </nav>
          <nav className="info">
            <img src={siguiendo} />
            <p>Siguiendo</p>
          </nav>
          <nav className="info">
            <img src={edit} />
            <p>Editar perfil</p>
          </nav>
        </div>
      </div>
      
    </div>
  );
}

export default PerfilArq;
