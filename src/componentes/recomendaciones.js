import React, { useEffect } from "react";
import "../css/recomendaciones.css"
import LoginUsr from "../componentes/loginUser";
import strellaOn from "../Iconos/home/starOn.png";
import strellaOff from "../Iconos/home/starOff.png";
import persona from "../Imagenes/home/person.png";

function Recomendaciones(props) {
    const [modalLoginUsr, setmodalLoginUsr ] = React.useState(false);

    /**
     * Metoo para recibi ID
     */
     const enviarData = (id) => (event) => {
      event.preventDefault();
      props.onEnviaId(id);
  }
  return (
    <div className="Recomendaciones">
        <h1 className="title-recom">Recomendaciones</h1>
        <div className="container-tarjetas">
      <div className="containerCard">
          <div className="containerImg">
            <img src={persona} />
          </div>
          <div className="informationCard">
            <h2>John Carpio</h2>
            <p>Loja</p>
          </div>
          <div className="cardStar">
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOff} />
            </nav>
          </div>
          <div className="infoPlanos">
            <div>
              <p className="valor">140</p>
              <p className="infor">PLANOS</p>
            </div>
            <linea  className="linea-separador"/>
            <div>
              <p className="valor">140</p>
              <p className="infor">POYECTOS</p>
            </div>
            <linea className="linea-separador"/>
            <div>
              <p className="valor">24k</p>
              <p className="infor">SEGUIDORES</p>
            </div>
          </div>
          <div className="containerBotton">
            <button>
              <p >COTIZAR</p>
            </button>
            <button onClick={enviarData(1)}>
              <p>VER PERFIL</p>
            </button>
          </div>
          <nav className="separador"></nav>
        </div>
      <div className="containerCard">
          <div className="containerImg">
            <img src={persona} />
          </div>
          <div className="informationCard">
            <h2>John Carpio</h2>
            <p>Loja</p>
          </div>
          <div className="cardStar">
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOff} />
            </nav>
          </div>
          <div className="infoPlanos">
            <div>
              <p className="valor">140</p>
              <p className="infor">PLANOS</p>
            </div>
            <linea  className="linea-separador"/>
            <div>
              <p className="valor">140</p>
              <p className="infor">POYECTOS</p>
            </div>
            <linea className="linea-separador"/>
            <div>
              <p className="valor">24k</p>
              <p className="infor">SEGUIDORES</p>
            </div>
          </div>
          <div className="containerBotton">
            <button>
              <p >COTIZAR</p>
            </button>
            <button onClick={enviarData(1)}>
              <p>VER PERFIL</p>
            </button>
          </div>
          <nav className="separador"></nav>
        </div>
      <div className="containerCard">
          <div className="containerImg">
            <img src={persona} />
          </div>
          <div className="informationCard">
            <h2>John Carpio</h2>
            <p>Loja</p>
          </div>
          <div className="cardStar">
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOff} />
            </nav>
          </div>
          <div className="infoPlanos">
            <div>
              <p className="valor">140</p>
              <p className="infor">PLANOS</p>
            </div>
            <linea  className="linea-separador"/>
            <div>
              <p className="valor">140</p>
              <p className="infor">POYECTOS</p>
            </div>
            <linea className="linea-separador"/>
            <div>
              <p className="valor">24k</p>
              <p className="infor">SEGUIDORES</p>
            </div>
          </div>
          <div className="containerBotton">
            <button>
              <p >COTIZAR</p>
            </button>
            <button onClick={enviarData(1)}>
              <p>VER PERFIL</p>
            </button>
          </div>
          <nav className="separador"></nav>
        </div>
      <div className="containerCard">
          <div className="containerImg">
            <img src={persona} />
          </div>
          <div className="informationCard">
            <h2>John Carpio</h2>
            <p>Loja</p>
          </div>
          <div className="cardStar">
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOff} />
            </nav>
          </div>
          <div className="infoPlanos">
            <div>
              <p className="valor">140</p>
              <p className="infor">PLANOS</p>
            </div>
            <linea  className="linea-separador"/>
            <div>
              <p className="valor">140</p>
              <p className="infor">POYECTOS</p>
            </div>
            <linea className="linea-separador"/>
            <div>
              <p className="valor">24k</p>
              <p className="infor">SEGUIDORES</p>
            </div>
          </div>
          <div className="containerBotton">
            <button>
              <p >COTIZAR</p>
            </button>
            <button onClick={enviarData(1)}>
              <p>VER PERFIL</p>
            </button>
          </div>
          <nav className="separador"></nav>
        </div>
      <div className="containerCard">
          <div className="containerImg">
            <img src={persona} />
          </div>
          <div className="informationCard">
            <h2>John Carpio</h2>
            <p>Loja</p>
          </div>
          <div className="cardStar">
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOff} />
            </nav>
          </div>
          <div className="infoPlanos">
            <div>
              <p className="valor">140</p>
              <p className="infor">PLANOS</p>
            </div>
            <linea  className="linea-separador"/>
            <div>
              <p className="valor">140</p>
              <p className="infor">POYECTOS</p>
            </div>
            <linea className="linea-separador"/>
            <div>
              <p className="valor">24k</p>
              <p className="infor">SEGUIDORES</p>
            </div>
          </div>
          <div className="containerBotton">
            <button>
              <p >COTIZAR</p>
            </button>
            <button onClick={enviarData(1)}>
              <p>VER PERFIL</p>
            </button>
          </div>
          <nav className="separador"></nav>
        </div>
      <div className="containerCard">
          <div className="containerImg">
            <img src={persona} />
          </div>
          <div className="informationCard">
            <h2>John Carpio</h2>
            <p>Loja</p>
          </div>
          <div className="cardStar">
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOn} />
            </nav>
            <nav className="star">
              <img src={strellaOff} />
            </nav>
          </div>
          <div className="infoPlanos">
            <div>
              <p className="valor">140</p>
              <p className="infor">PLANOS</p>
            </div>
            <linea  className="linea-separador"/>
            <div>
              <p className="valor">140</p>
              <p className="infor">POYECTOS</p>
            </div>
            <linea className="linea-separador"/>
            <div>
              <p className="valor">24k</p>
              <p className="infor">SEGUIDORES</p>
            </div>
          </div>
          <div className="containerBotton">
            <button>
              <p >COTIZAR</p>
            </button>
            <button onClick={enviarData(1)}>
              <p>VER PERFIL</p>
            </button>
          </div>
          <nav className="separador"></nav>
        </div>
      
      
        </div>
    </div>
  );
}

export default Recomendaciones;
