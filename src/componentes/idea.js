import React, {useEffect} from "react";
import "../css/idea.css";
import casa from "../Imagenes/home/casa1.png";
import user from "../Imagenes/home/person.png";
import LoginUsr from "../componentes/loginUser";
import ImgCompleto from "../componentes/imgCompleto";

function Idea() {
  
  const [modalLoginUsr, setmodalLoginUsr ] = React.useState(false);
  const [modalImg, setmodalImg ] = React.useState(false);
  const modalImgF = (id) => {
    setmodalImg(id);
}

  return (
    <div className="Idea">
      <h1 className="titleIdeas">¿Necesitas ideas?</h1>
      <div className="containerTarjetas">
        <div className="tarjetaVivienda">
          <div className="imagenCard">
          <a  onClick={ ()=>modalImg ? setmodalImg(false): setmodalImg(true)}><img src={casa} className="casa" /></a>
          </div>
          <a onClick={ ()=>modalLoginUsr ? setmodalLoginUsr(false): setmodalLoginUsr(true)}>
          <div className="informacionCard">
            <p className="titleImg">Vivienda</p>
            <p className="nameProf">Arq. John Carpio</p>
            <p className="fechaImg">31 de enero de 2018</p>
          </div>
          </a>
          <div className="imagenUser">
            <img src={user} className="persona" />
          </div>
        </div>
        {modalLoginUsr ? 
        <div className="componentLoginUsr">
        <LoginUsr></LoginUsr>
        </div>
        :null}
        <div className="tarjetaVivienda">
          <div className="imagenCard">
            <a  onClick={ ()=>modalImg ? setmodalImg(false): setmodalImg(true)}><img src={casa} className="casa" /></a>
          </div>
          <div className="informacionCard">
            <p className="titleImg">Vivienda</p>
            <p className="nameProf">Arq. John Carpio</p>
            <p className="fechaImg">31 de enero de 2018</p>
          </div>
          <div className="imagenUser">
            <img src={user} className="persona" />
          </div>
        </div>
        {modalImg ?
        <div className="img-com">
          <ImgCompleto onEnvio={(id)=>modalImgF(id)} ></ImgCompleto>
        </div>
        :null}
        <div className="tarjetaVivienda">
          <div className="imagenCard">
            <img src={casa} className="casa" />
          </div>
          <div className="informacionCard">
            <p className="titleImg">Vivienda</p>
            <p className="nameProf">Arq. John Carpio</p>
            <p className="fechaImg">31 de enero de 2018</p>
          </div>
          <div className="imagenUser">
            <img src={user} className="persona" />
          </div>
        </div>
        <div className="tarjetaVivienda">
          <div className="imagenCard">
            <img src={casa} className="casa" />
          </div>
          <div className="informacionCard">
            <p className="titleImg">Vivienda</p>
            <p className="nameProf">Arq. John Carpio</p>
            <p className="fechaImg">31 de enero de 2018</p>
          </div>
          <div className="imagenUser">
            <img src={user} className="persona" />
          </div>
        </div>
        <div className="tarjetaVivienda">
          <div className="imagenCard">
            <img src={casa} className="casa" />
          </div>
          <div className="informacionCard">
            <p className="titleImg">Vivienda</p>
            <p className="nameProf">Arq. John Carpio</p>
            <p className="fechaImg">31 de enero de 2018</p>
          </div>
          <div className="imagenUser">
            <img src={user} className="persona" />
          </div>
        </div>
        <div className="tarjetaVivienda">
          <div className="imagenCard">
            <img src={casa} className="casa" />
          </div>
          <div className="informacionCard">
            <p className="titleImg">Vivienda</p>
            <p className="nameProf">Arq. John Carpio</p>
            <p className="fechaImg">31 de enero de 2018</p>
          </div>
          <div className="imagenUser">
            <img src={user} className="persona" />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Idea;
