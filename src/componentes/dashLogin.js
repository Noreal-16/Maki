import React, { useEffect } from "react";
import "../css/dashLogin.css";
import iconNav from "../Iconos/home/iconMaki.png";
import iconLupa from "../Iconos/home/lupa.png";
import campana from "../Iconos/home/campana.png";
import persona from "../Imagenes/home/rostro.png";
function DashLogin() {
  const [botoOpciones, setbotoOpciones] = React.useState(false);
  return (
    <div className="DashLogin">
      <nav>
        <div className="contenIcon">
          <img src={iconNav} />
        </div>
        <div className="centrado">
          <div className="container-buscador">
          <div className="conjuntoSearch-user">
            <img src={iconLupa} className="lupa" />
            <p className="arquit">Arquit</p>
          </div>
          <input type="text" />
          </div>
          <linea className="linea-separador-campana" />
            <div className="campana-cntainer">
              <img className="campana-img" src={campana} />
            </div>
            <linea className="linea-separador-campana-bajo" />
          <div className="container-user">
            <img className="img-user" src={persona} />
            <a onClick={() =>
                    botoOpciones
                      ? setbotoOpciones(false)
                      : setbotoOpciones(true)
                  }>
            <p className="text-user">María Perez <nav className="triangulo down-triangle"></nav> </p>
            </a>
          </div>
          <div className="triangle">
            
            </div>
        </div>
      </nav>
      {botoOpciones ?
      <div className="opciones-user">
        <a>  <p className="referencia">Convertir en una cuenta para empresas</p>     </a>
        <a>  <p className="referencia">Ajustes</p></a>
        <a>  <p className="referencia">Obtener ayuda</p></a>
        <a>  <p className="referencia">Ver términos y condiciones  </p></a>
        <a>  <p className="referencia">Salir</p></a>
      </div>
      :null}
    </div>
  );
}

export default DashLogin;
