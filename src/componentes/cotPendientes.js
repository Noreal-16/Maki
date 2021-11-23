import React, { useEffect } from "react";
import "../css/cotPendientes.css";
import user from "../Imagenes/home/rostro.png";
import user1 from "../Imagenes/home/person.png";
import sinImg from "../Imagenes/home/sinImg.png";
import imagen1 from "../Imagenes/home/casa01.png";
import imagen2 from "../Imagenes/home/casa02.png";
import imagen3 from "../Imagenes/home/casa03.png";

function CotPendientes() {
  const [modalLogin, setLoginModal] = React.useState(false);

  return (
    <div className="CotPendientes Seguimiento">
      <div className="container-galeria">
        <div className="container-text-img">
          <img className="img-sinImg" src={sinImg} />
          <p className="text-img">Subir nueva imagen o proyecto</p>
        </div>
        <div className="container-text-img-gal">
          <img className="img-galeria img1" src={imagen1} />
          <img className="img-galeria img2" src={imagen2} />
          <img className="img-galeria img3" src={imagen3} />
          <p className="text-img-gal">Subir nueva imagen o proyecto</p>
        </div>
      </div>
      <margen className="linea-cata" />
      <h1 className="tite-cotizacion">Cotización pendiente</h1>
      <div className="cotizacion-pendiente">
        <div className="container-basrras-all">
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
            <img className="img-person" src={user} />
          </div>


          <div className="conntainer-barras">
            <div className="container-progereso">
              <progreso></progreso>
              <p>Recopilación de información</p>
            </div>
            <div className="container-progereso">
              <progreso ></progreso>
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
            <img className="img-person position" src={user1} />
          </div>
        </div>
        <div className="container-button-gal">
          <button className="btn-revisar">Revisar</button>
        </div>
      </div>
    </div>
  );
}

export default CotPendientes;
