import "../css/footer.css";
import logoMaki from "../Iconos/home/maquiLogo.png"
import imgStore from "../Imagenes/home/store.png";
function Footer() {
  return (
    <div className="Footer">
     
      <div className="footerBody">
        <div className="cuerpo-footer">
          <img className="logo-maki-footer" src={logoMaki} />
          <p className="text-footer" >¡OBTÉN UNA MEJOR EXPERIENCIA CON NUESTRA APP!</p>
          <img className="rede-maki-footer" src={imgStore} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
