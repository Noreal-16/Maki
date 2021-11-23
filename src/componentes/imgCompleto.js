import React, {useEffect} from "react";
import "../css/img-completo.css";
import casa from "../Imagenes/home/casa1.png";


function ImgCompleto(props) {
  
  const [modalLoginUsr, setmodalLoginUsr ] = React.useState(false);
  const enviar = (id) => (event) => {
    event.preventDefault();
    props.onEnvio(id);
}
  return (
    <div className="ImgCompleto">
      <div  onClick={enviar(false)} className="img-completo">
        <img className="casa-img-complete" src={casa}  />
        </div>
      
    </div>
  );
}

export default ImgCompleto;
