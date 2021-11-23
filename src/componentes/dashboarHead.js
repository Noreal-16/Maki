
import "../css/dash.css";
import iconNav from "../Iconos/home/iconMaki.png";
import iconLupa from "../Iconos/home/lupa.png";
function DashboardHead() {
  
  return (
    <div className="DashboardHead">
      <nav>
        <div className="contenIcon">
          <img src={iconNav} />
        </div>
        <div className="centrado">
          <div className="conjuntoSearch">
            <img src={iconLupa} className="lupa" />
            <p className="arquit">Arquit</p>
          </div>
          <input type="text" />
          <a className="tituloBuscador" href="#">
            INGRESAR
          </a>
          <linea  className="linea-separador-btn"/>
          <button className="ingresaProfecional">
            INGRESAR COMO PROFESIONAL
          </button>
          <linea  className="linea-separador-btn"/>
          <button className="btnRegsitrarse">
            REGISTRARSE
          </button>
        </div>
      </nav>
     
    </div>
  );
}

export default DashboardHead;
