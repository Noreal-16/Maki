import React, { useEffect } from "react";
import "../js/main.js";
import "../css/perfilesHome.css";
import DashLogin from "../componentes/dashLogin";
import Footer from "../componentes/footer";
import PerfilUsr from "../componentes/perfilUsr";
import PerfilArq from "../componentes/perfilArq.js";
import Seguimiento from "../componentes/seguimiento";
import Cotizacion from "../componentes/cotizacion";
import FechaVisitas from "../componentes/fechaVisitas";
import CotPendientes from "../componentes/cotPendientes";
import Recomendaciones from "../componentes/recomendaciones";
import Carrucel from "../componentes/carrucel";
import Galeria from "../componentes/galeria";
import Arquitecto from "../componentes/arquitecto";
import arrow from "../Iconos/home/arrow.png";
import arrowRellena from "../Iconos/home/row-ret.png";

function PerfilesHome() {
  const [head, setHead] = React.useState(true);
  const [perfilUsr, setperfilUsr] = React.useState(true);
  const [recomendacion, setrecomendacion] = React.useState(true);
  const [seguimiento, setseguimiento] = React.useState(true);
  const [fechaVisitas, setfechaVisitas] = React.useState(true);
  const [footer, setFooter] = React.useState(true);
  const [carrucel, setcarrucel] = React.useState(true);
  const [perfilArq, setperfilArq] = React.useState(false);
  const [cotizacion, setcotizacion] = React.useState(false);
  const [cotPendiente, setcotPendiente] = React.useState(false);
  const [galeria, setgaleria] = React.useState(false);
  const [arquitecto, setarquitecto] = React.useState(false);
  const [imgArrow, setImgArrow] = React.useState(true);

  /**
   * Metodo para llamar las vistas
   * @param {*} id
   */
  const handleVistasPerfiles = (id) => {
    switch (id) {
      case 1:
        setseguimiento(false);
        setcotizacion(true);
        break;

      case 2:
        setperfilUsr(false);
        setrecomendacion(false);
        setcotizacion(false);
        setcarrucel(false);
        setgaleria(true);
        break;

      case 3:
        setperfilUsr(false);
        setrecomendacion(false);
        setcotizacion(false);
        setcarrucel(false);
        setarquitecto(true);
        break;

      case 4:
        setseguimiento(true);
        setcotizacion(false);
        break;

      default:
        break;
    }
  };
  return (
    <div className="PerfilesHome">
      <div className="dashLogim-perfiles">
        {head ? <DashLogin></DashLogin> : null}
      </div>

      <div className="container-perfiles">
        {perfilUsr ? (
          <PerfilUsr onEnviaId={(id) => handleVistasPerfiles(id)}></PerfilUsr>
        ) : null}
        {perfilArq ? (
          <PerfilArq onEnviaId={(id) => handleVistasPerfiles(id)}></PerfilArq>
        ) : null}
        {seguimiento ? <Seguimiento></Seguimiento> : null}
        {cotizacion ? (
          <Cotizacion onEnviaId={(id) => handleVistasPerfiles(id)}></Cotizacion>
        ) : null}
        {cotPendiente ? <CotPendientes></CotPendientes> : null}
        {recomendacion ? (
          <Recomendaciones
            onEnviaId={(id) => handleVistasPerfiles(id)}
          ></Recomendaciones>
        ) : null}
      </div>
      <div className="container-visitas">
      {fechaVisitas ? <FechaVisitas></FechaVisitas> :null }
      </div>
      <div className="container-carrucel-home">
        {carrucel ? <Carrucel></Carrucel> : null}
      </div>
          {galeria ?  
      <div>
        <img
          className="containerArrowGaleria"
          onClick={() => {
            setperfilUsr(true);
            setrecomendacion(true);
            setcotizacion(true);
            setcarrucel(true);
            setgaleria(false);
          }}
          src={arrow}
        />
         <Galeria></Galeria> 
      </div>
      :null}
      {arquitecto ? 
      <div>
      <img
          className="containerArrowArquitecto"
          onClick={() => {
            setperfilUsr(true);
            setrecomendacion(true);
            setcotizacion(true);
            setcarrucel(true);
            setarquitecto(false);
          }}
          src={arrowRellena}
        />
      

      <Arquitecto></Arquitecto> 
      </div>
      : null}
      {footer ? <Footer></Footer> : null}
    </div>
  );
}

export default PerfilesHome;
