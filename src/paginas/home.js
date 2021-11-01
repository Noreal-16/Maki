import "../css/home.css";
import iconNav from "../Iconos/home/iconMaki.png";
import iconLupa from "../Iconos/home/lupa.png";
import imgEmpiezaAqui from "../Imagenes/home/empiezaAqui.png";
function Home() {
  return (
    <div>
      <nav>
        <div className="contenIcon">
          <img src={iconNav} />
        </div>
        <div className="centrado">
          <div className="conjuntoSearch">
            <img src={iconLupa} className="lupa"/>
            <p>Arquit</p>
          </div>
          <input type="text"/>
          <a href="#">INGRESAR</a>
          <button>INGRESAR COMO PROFESIONAL</button>
        </div>
      </nav>
      <div className="containerFirst">
        <p className="titleFirst">TUS PROYECTOS <br/>EN MANOS DE <br/> MENTES CREATIVAS </p>
        <p className="subTitle">Encuentra profesionales que dan vida a tus ideas </p>
      </div>
      <div className="containerSecond">
      <p className="titleOrange" >Encuentra Profesionales</p>

      </div>
      <div className="containerEmpiezaAqui">
      <p className="titleFr" >Empieza aqui</p>
      <p className="subTitleFr" >En tan solo 3 pasos</p>
      <img src={imgEmpiezaAqui} className="empiezaAqui"/>
      <div className="footerImg">
        <p>SELECCIONA EL TIPO DE PROYECTO</p>
        <p>CONTACTA CON EL PROFESIONAL</p>
        <p>FINALIZA Y EVALÚA TU PROYECTO</p>
      </div>
      </div>
    </div>
  );
}

export default Home;
