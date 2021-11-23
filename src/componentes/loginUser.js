
import "../css/loginUser.css";
import iconFacebook from "../Iconos/home/faceIcon.png";
import iconGoogle from "../Iconos/home/googleIcon.png";

function LoginUser() {
    
  return (
    <div className="LoginUser">
      <div className="">
        <p className="titleRegist">¡Regístrate GRATIS!</p>
      </div>
      <div>
        <a className="textoFacebbok">
          <img src={iconFacebook} /> CONTINUE CON FACEBOOK
        </a>

        <a className="textoGoogle">
          <img src={iconGoogle} /> CONTINUE CON GOOGLE
        </a>
        <div className="cotenSeparador">
          <rayas/><p> o </p> <rayas />
        </div>
        <a className="textoRegitro">
           <p>REGISTRARSE CON E-MAIL</p>
        </a>
        <div className="labelCheck">
          <input className="inputChec" type="checkbox" name="politica" />
          <label for="politica">
            Acepto los Términos y Condiciones y la Política de Privacidad{" "}
          </label>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
