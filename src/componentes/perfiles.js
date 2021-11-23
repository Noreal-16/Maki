import React, {useEffect} from "react";
import "../css/perfiles.css";
import strellaOn from "../Iconos/home/starOn.png";
import strellaOff from "../Iconos/home/starOff.png";
import persona from "../Imagenes/home/rostro.png";
import LoginUsr from "../componentes/loginUser";
function Perfiles() {
  const [modalLoginUsr, setmodalLoginUsr ] = React.useState(false);
  return (
    <div className="Perfiles">
      <hi1 className="titleIdeas estiloTitle">Perfiles Profesionales</hi1>
     
      <div className="containerCards">
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
            <linea />
            <div>
              <p className="valor">140</p>
              <p className="infor">POYECTOS</p>
            </div>
            <linea />
            <div>
              <p className="valor">24k</p>
              <p className="infor">SEGUIDORES</p>
            </div>
          </div>
          <div className="containerBotton">
            <button>
              <p onClick={ ()=>modalLoginUsr ? setmodalLoginUsr(false): setmodalLoginUsr(true)}>COTIZAR</p>
            </button>
            <button onClick={ ()=>modalLoginUsr ? setmodalLoginUsr(false): setmodalLoginUsr(true)}>
              <p>VER PERFIL</p>
            </button>
          </div>
        </div>
        {modalLoginUsr ?
        <div className="componentLoginUsr">
        <LoginUsr></LoginUsr>
        </div>
        :null}
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
            <linea />
            <div>
              <p className="valor">140</p>
              <p className="infor">POYECTOS</p>
            </div>
            <linea />
            <div>
              <p className="valor">24k</p>
              <p className="infor">SEGUIDORES</p>
            </div>
          </div>
          <div className="containerBotton">
            <button>
              <p>COTIZAR</p>
            </button>
            <button>
              <p>VER PERFIL</p>
            </button>
          </div>
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
            <linea />
            <div>
              <p className="valor">140</p>
              <p className="infor">POYECTOS</p>
            </div>
            <linea />
            <div>
              <p className="valor">24k</p>
              <p className="infor">SEGUIDORES</p>
            </div>
          </div>
          <div className="containerBotton">
            <button>
              <p>COTIZAR</p>
            </button>
            <button>
              <p>VER PERFIL</p>
            </button>
          </div>
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
            <linea />
            <div>
              <p className="valor">140</p>
              <p className="infor">POYECTOS</p>
            </div>
            <linea />
            <div>
              <p className="valor">24k</p>
              <p className="infor">SEGUIDORES</p>
            </div>
          </div>
          <div className="containerBotton">
            <button>
              <p>COTIZAR</p>
            </button>
            <button>
              <p>VER PERFIL</p>
            </button>
          </div>
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
            <linea />
            <div>
              <p className="valor">140</p>
              <p className="infor">POYECTOS</p>
            </div>
            <linea />
            <div>
              <p className="valor">24k</p>
              <p className="infor">SEGUIDORES</p>
            </div>
          </div>
          <div className="containerBotton">
            <button>
              <p>COTIZAR</p>
            </button>
            <button>
              <p>VER PERFIL</p>
            </button>
          </div>
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
            <linea />
            <div>
              <p className="valor">140</p>
              <p className="infor">POYECTOS</p>
            </div>
            <linea />
            <div>
              <p className="valor">24k</p>
              <p className="infor">SEGUIDORES</p>
            </div>
          </div>
          <div className="containerBotton">
            <button>
              <p>COTIZAR</p>
            </button>
            <button>
              <p>VER PERFIL</p>
            </button>
          </div>
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
            <linea />
            <div>
              <p className="valor">140</p>
              <p className="infor">POYECTOS</p>
            </div>
            <linea />
            <div>
              <p className="valor">24k</p>
              <p className="infor">SEGUIDORES</p>
            </div>
          </div>
          <div className="containerBotton">
            <button>
              <p>COTIZAR</p>
            </button>
            <button>
              <p>VER PERFIL</p>
            </button>
          </div>
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
            <linea />
            <div>
              <p className="valor">140</p>
              <p className="infor">POYECTOS</p>
            </div>
            <linea />
            <div>
              <p className="valor">24k</p>
              <p className="infor">SEGUIDORES</p>
            </div>
          </div>
          <div className="containerBotton">
            <button>
              <p>COTIZAR</p>
            </button>
            <button>
              <p>VER PERFIL</p>
            </button>
          </div>
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
            <linea />
            <div>
              <p className="valor">140</p>
              <p className="infor">POYECTOS</p>
            </div>
            <linea />
            <div>
              <p className="valor">24k</p>
              <p className="infor">SEGUIDORES</p>
            </div>
          </div>
          <div className="containerBotton">
            <button>
              <p>COTIZAR</p>
            </button>
            <button>
              <p>VER PERFIL</p>
            </button>
          </div>
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
            <linea />
            <div>
              <p className="valor">140</p>
              <p className="infor">POYECTOS</p>
            </div>
            <linea />
            <div>
              <p className="valor">24k</p>
              <p className="infor">SEGUIDORES</p>
            </div>
          </div>
          <div className="containerBotton">
            <button>
              <p>COTIZAR</p>
            </button>
            <button>
              <p>VER PERFIL</p>
            </button>
          </div>
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
            <linea />
            <div>
              <p className="valor">140</p>
              <p className="infor">POYECTOS</p>
            </div>
            <linea />
            <div>
              <p className="valor">24k</p>
              <p className="infor">SEGUIDORES</p>
            </div>
          </div>
          <div className="containerBotton">
            <button>
              <p>COTIZAR</p>
            </button>
            <button>
              <p>VER PERFIL</p>
            </button>
          </div>
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
            <linea />
            <div>
              <p className="valor">140</p>
              <p className="infor">POYECTOS</p>
            </div>
            <linea />
            <div>
              <p className="valor">24k</p>
              <p className="infor">SEGUIDORES</p>
            </div>
          </div>
          <div className="containerBotton">
            <button>
              <p>COTIZAR</p>
            </button>
            <button>
              <p>VER PERFIL</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfiles;
