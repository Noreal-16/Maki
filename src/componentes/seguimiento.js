import React, { useEffect } from "react";
import "../css/seguimiento.css";
import check from "../Iconos/home/check.png";
import cancel from "../Iconos/home/cancel.png";

function Seguimiento() {
  const [modalLogin, setLoginModal] = React.useState(false);

  return (
    <div className="Seguimiento">
      <div className="container-seguimiento">
        <h1 className="title-seguimiento">Seguimiento de tus cotizaciones</h1>
        <div className="conntainer-barras">
          <div className="container-progereso">
            <progreso></progreso>
            <p>Recopilación de información</p>
          </div>
          <div className="container-progereso">
            <progreso></progreso>
            <p>Desarrollo del proyecto</p>
          </div>
          <div className="container-progereso">
            <progreso className="progresoVacio"></progreso>
            <p>Aprobación del proyecto</p>
          </div>
          <div className="container-progereso">
            <progreso className="progresoVacio"></progreso>
            <p>Presupuesto y ejecución de obra</p>
          </div>
          <img className="img-check" src={check} />
          <div className="container-button">
            <button className="btn-cancelar">Cancelar</button>
            <button className="btn-continuar">Continuar</button>
          </div>
        </div>
        <div className="conntainer-barras">
          <div className="container-progereso">
            <progreso></progreso>
            <p>Recopilación de información</p>
          </div>
          <div className="container-progereso">
            <progreso className="progresoVacio"></progreso>
            <p>Desarrollo del proyecto</p>
          </div>
          <div className="container-progereso">
            <progreso className="progresoVacio"></progreso>
            <p>Aprobación del proyecto</p>
          </div>
          <div className="container-progereso">
            <progreso className="progresoVacio"></progreso>
            <p>Presupuesto y ejecución de obra</p>
          </div>
          <img className="img-check1" src={check} />
          <div className="container-button">
            <button className="btn-cancelar">Cancelar</button>
            <button className="btn-continuar">Continuar</button>
          </div>
        </div>
        <div className="conntainer-barras">
          <div className="container-progereso">
            <progreso className="progresoError"></progreso>
            <p>Recopilación de información</p>
          </div>
          <div className="container-progereso">
            <progreso className="progresoErrorVacio"></progreso>
            <p>Desarrollo del proyecto</p>
          </div>
          <div className="container-progereso">
            <progreso className="progresoErrorVacio"></progreso>
            <p>Aprobación del proyecto</p>
          </div>
          <div className="container-progereso">
            <progreso className="progresoErrorVacio"></progreso>
            <p>Presupuesto y ejecución de obra</p>
          </div>
          <img className="img-check" src={cancel} />
         
        </div>
      </div>
    </div>
  );
}

export default Seguimiento;
