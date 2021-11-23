import React, { useEffect } from "react";
import "../css/frmProyectos.css";
import Reforma from "../componentes/reforma";
function FrmPNuevo(props) {
  const [proyectoNuevo, setproyectoNuevo] = React.useState(true);
  const [head, setHead] = React.useState(true);
  const [footer, setFooter] = React.useState(true);
  const [reforma, setproyecreforma] = React.useState(true);
  const [botonSelec, setBotonSelec] = React.useState(true);
  const [Tproyecto, setTproyecto] = React.useState("Proyecto Nuevo");
  const [opcionesId, setOpcionesId] = React.useState(1);

  var data;
  const opcion = (id,valor,valor2) => (event) => {
    event.preventDefault();
    switch (id) {
      case 1:
        setTproyecto(valor);
        setBotonSelec(false);
        setOpcionesId(valor2);
        
        break;
      case 2:
        props.onEnvio(valor);

       break;
      default:
        break;
    }
   

    
  };
/**
  const enviarId = (id) => (event) => {
    event.preventDefault();
    props.onEnvio(id);
  }
   */
  return (
    <div className="FrmPNuevo">
      <div className="formulario centrado">
          <form>
            <p className="tcx-que">¿Qué proyecto vas a realizar? </p>
            <div className="containerSelect">
              <a onClick={() => botonSelec ? setBotonSelec(false) : setBotonSelec(true) } >
                <input type="text" id="tipo_proyecto" value={Tproyecto} />
                <div className="arrow-select">
                  <nav className="flecha down"></nav>
                </div>
              </a>
              {botonSelec ? (
                <div className="containerP">
                  <p onClick={opcion(1,"Proyecto nuevo",1)}>Proyecto nuevo</p>
                  <p onClick={opcion(1,"Reforma & Remodelación",2)}>
                    Reforma & Remodelación
                  </p>
                </div>
              ) : null}
            </div>
            <div className="containerButton">
              <button onClick={ opcionesId == 1 ? opcion(2,1) : opcion(2,2)}>
                CONTINUAR
              </button>
            </div>
          </form>
      </div>
    </div>
  );
}

export default FrmPNuevo;
