import React, { useEffect } from "react";
import "../css/frmProyectos.css";
import persona from "../Imagenes/home/rostro.png";
import FrmProyectosNuevo from "../componentes/frmProyectoNuevo";
import DashLogin from "../componentes/dashLogin";
import Footer from "../componentes/footer";
import Reforma from "../componentes/reforma";
import FrmPNuevo from "../componentes/frmPnuevo";
function FrmProyectos() {
  const [proyectoNuevo, setproyectoNuevo] = React.useState(false);
  const [head, setHead] = React.useState(true);
  const [footer, setFooter] = React.useState(true);
  const [reforma, setproyecreforma] = React.useState(false);
  const [frmProyecto, setfrmProyecto] = React.useState(true);
  const [titleForm, setTitleForm] = React.useState("Formulario de proyecto");

  const handleNumero = (id) => {
    switch (id) {
      case 1:
        setfrmProyecto(false);
        setproyectoNuevo(true);
        setTitleForm("Formulario para proyecto nuevo");
        break;
      case 2:
        setfrmProyecto(false);
        setproyecreforma(true);
        setTitleForm("Formulario para reforma y remodelación");
        break;
      default:
        break;
    }
  }
  
  return (
    <div className="FrmProyectos">
      <div className="dashHear-proyectos">
        {head ? <DashLogin></DashLogin> : null}
      </div>
      <div className="containerFrmProyect">
        <h1 className="titleIdeas titlePro">{titleForm}</h1>

        <p className="text-p">
          Recuerde que la información será clasificada únicamente para el
          arquitecto de su preferencia{" "}
        </p>
        <div className="containerFormulario">
          <div className="containerImagen">
            <img src={persona}></img>
            <p>María Perez</p>
          </div>
          <div className="formulario">
            <div className="containerFrmProNew">
              {frmProyecto ? <FrmPNuevo onEnvio={(id)=>handleNumero(id)}></FrmPNuevo> : null}
            </div>
            <div className="containerFrmProNew">
              {proyectoNuevo ? <FrmProyectosNuevo></FrmProyectosNuevo> : null}
            </div>
            <div className="containerFrmProNew">
              {reforma ? <Reforma></Reforma> : null}
            </div>
          </div>
        </div>
      </div>
      <div>{footer ? <Footer></Footer> : null}</div>
    </div>
  );
}

export default FrmProyectos;
