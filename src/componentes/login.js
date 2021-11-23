import "../css/login.css";
import iconFacebook from "../Iconos/home/faceIcon.png";
import iconGoogle from "../Iconos/home/googleIcon.png";
function Login() {
  return (
    <div className="Login">
      <div className="">
        <p className="titleLogin">Iniciar sesión</p>
        <form>
          <div className="inputForm">
            <input type="text" placeholder="Ingrese correo eléctronico" />
            <br />
            <input type="password" placeholder="Ingrese contraseña" />
          </div>
          <div className="bottonCont">
            <button>CONTINUAR</button>
          </div>
        </form>
        <div className="cotenSeparador">
          <rayas /><p> o </p> <rayas />
        </div>
        <p className="titleRegist">¡Regístrate GRATIS!</p>
      </div>
      <div>

          <a className="textoFacebbok"> <img src={iconFacebook}/> CONTINUE CON FACEBOOK</a>

          <a className="textoGoogle"> <img src={iconGoogle}/> CONTINUE CON GOOGLE</a>
          <div className="labelCheck">
          <input className="inputChec" type="checkbox" name="politica" id="politica" />
          <label for="politica">Acepto los Términos y Condiciones y la Política de Privacidad  </label>
          </div>
      </div>
    </div>
  );
}

export default Login;
