import React, { useEffect } from "react";
import "../css/dashboard.css";
function Dashboard(props) {
  const [botonDash, setbotonDash] = React.useState(false);
  const [botonVivienda, setbotonVivienda] = React.useState(true);
  const [botonReforma, setbotonReforma] = React.useState(true);
  
  const enviar = (id) => (event) => {
    event.preventDefault();
    props.onEnvio(id);
}
  return (
    <div className="Dashboard">
      <div className="containerMenuDash">
        <h1 className="titleDash">Área de trabajo</h1>
        <div className="menuDash">
          <h2>
            <a
              onClick={() =>
                botonDash ? setbotonDash(false) : setbotonDash(true)
              }
            >
              Proyecto nuevo
              <div className="contorno">
                <nav className="flecha down"></nav>
              </div>
            </a>
          </h2>
          {botonDash ? (
            <div>
              <h3 className="titleVivienda">
                <a
                  onClick={() =>
                    botonVivienda
                      ? setbotonVivienda(false)
                      : setbotonVivienda(true)
                  }
                >
                  {" "}
                  Vivienda
                  <div className="contornoArrow">
                    <nav className="flecha down"></nav>
                  </div>
                </a>
              </h3>
              {botonVivienda ? (
                <div className="menuLista">
                  <input
                    className="menuLista"
                    name="unifamiliar"
                    type="checkbox"
                  />
                  Unifamiliar
                  <br />
                  <input
                    className="menuLista"
                    name="multifamiliar"
                    type="checkbox"
                  />
                  Multifamiliar
                  <br />
                  <input
                    className="menuLista"
                    name="casacampo"
                    type="checkbox"
                  />
                  Casa de campo
                </div>
              ) : null}
              <div className="menuLista1">
                <p>Comercial</p>
                <p>Institucional</p>
                <p>Ampliaciones</p>
                <p>Propiedad horizontal</p>
              </div>
            </div>
          ) : null}
          <div className="menuReforma">
            <h2>
              <a
                onClick={() =>
                  botonReforma ? setbotonReforma(false) : setbotonReforma(true)
                }
              >
                Reforma & remodelación
                <div className="conto">
                    <nav className="flecha down"></nav>
                  </div>
              </a>{" "}
            </h2>
            {botonReforma ? (
              <div className="submenuReforma">
                <p>Proyecto de diseño interior</p>
                <p>Obra menor</p>
                <p>Reparaciones</p>
              </div>
            ) : null}
          </div>
          <a onClick={enviar(1)}> <h2>Buscar profesionales</h2></a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
