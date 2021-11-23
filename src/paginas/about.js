import React, { useEffect } from "react";
import "../js/main.js";
import DashboardHead from "../componentes/dashboarHead";
import Dashboard  from "../componentes/dashboard";
import Footer from "../componentes/footer";
import Idea from "../componentes/idea";
import Perfiles from "../componentes/perfiles";
import arrow from "../Iconos/home/arrow.png";

function About() {
  const [head, setHead] = React.useState(true);
  const [dashboard, setDashboard] = React.useState(true);
  const [idea, setIdea] = React.useState(true);
  const [perfiles, setperfiles] = React.useState(false);
  const [footer, setFooter] = React.useState(true);
  const [login, setLogin] = React.useState(false);
  const [proyecto, setproyecto] = React.useState(true);
///2 apis, 1-about, 1-perfil
/// 2 -- about, envias la datav --> perfil // demora en cargar about, desde el inicio tienes el control de la data
/// 1-about, 1-perfil, agil, no tienes el control de la data
  const handleNumero = (id) => {
    switch (id) {
      case 1:
        setDashboard(false);
        setIdea(false);
        setperfiles(true);
        break;
      default:
        break;
    }
}
  return (
    <div className="About">
      <div className="dashLogin-about">
      {head ? <DashboardHead ></DashboardHead> : null}
      </div>
     
        <div>
          <div className="contentIdeaDash">
            {dashboard ? <Dashboard onEnvio={(id)=>handleNumero(id)}></Dashboard> : null}
            {idea ? <Idea></Idea> : null}
          </div>

          {perfiles ? (
            <div className="ContainerPerfiles">
              <img
                className="containerArrow"
                onClick={() => {
                  setDashboard(true);
                  setIdea(true);
                  setperfiles(false);
                }}
                src={arrow}
              />

              <Perfiles></Perfiles>
            </div>
          ) : null}
        </div>

      {footer ? <Footer></Footer> : null}
    </div>
  );
}

export default About;
