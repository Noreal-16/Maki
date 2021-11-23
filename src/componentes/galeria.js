import React, { useEffect } from "react";
import "../css/galeria.css";
import fondo1 from "../Imagenes/home/fondo1.png";
import fondo2 from "../Imagenes/home/fondo2.png";
import fondo3 from "../Imagenes/home/fondo3.png";
import fondo4 from "../Imagenes/home/fondo4.png";
import fondo5 from "../Imagenes/home/fondo5.png";
import fondo6 from "../Imagenes/home/fondo6.png";
import fondo7 from "../Imagenes/home/fondo7.png";
import fondo8 from "../Imagenes/home/fondo8.png";
import fondo9 from "../Imagenes/home/fondo9.png";
import fondo10 from "../Imagenes/home/fondo10.png";
import casa01 from "../Imagenes/home/casa01.png";
import casa02 from "../Imagenes/home/casa02.png";
import casa03 from "../Imagenes/home/casa03.png";

function Galeria() {


  return (
    <div className="Galeria">
        <div className="row">
            <div className="column">
                <img className="img-galeria-cmp" alt="fondo1" src={casa01} />
                <img className="img-galeria-cmp" alt="fondo2" src={fondo2} />
                <img className="img-galeria-cmp" alt="fondo3" src={fondo3} />
                <img className="img-galeria-cmp" alt="fondo4" src={fondo4} />
                <img className="img-galeria-cmp" alt="fondo5" src={fondo5} />
                <img className="img-galeria-cmp" alt="fondo6" src={fondo6} />
                <img className="img-galeria-cmp" alt="fondo7" src={fondo7} />
                <img className="img-galeria-cmp" alt="fondo8" src={fondo8} />
                <img className="img-galeria-cmp" alt="fondo9" src={fondo9} />
                <img className="img-galeria-cmp" alt="fondo10" src={fondo10} />
            </div>
            <div className="column">
                <img className="img-galeria-cmp" alt="fondo1" src={fondo1} />
                <img className="img-galeria-cmp" alt="fondo2" src={casa02} />
                <img className="img-galeria-cmp" alt="fondo3" src={fondo3} />
                <img className="img-galeria-cmp" alt="fondo4" src={casa01} />
                <img className="img-galeria-cmp" alt="fondo5" src={fondo5} />
                <img className="img-galeria-cmp" alt="fondo6" src={fondo6} />
                <img className="img-galeria-cmp" alt="fondo7" src={fondo7} />
                <img className="img-galeria-cmp" alt="fondo8" src={fondo8} />
                <img className="img-galeria-cmp" alt="fondo9" src={fondo9} />
                <img className="img-galeria-cmp" alt="fondo10" src={fondo10} />
            </div>
            <div className="column">
                <img className="img-galeria-cmp" alt="fondo1" src={fondo1} />
                <img className="img-galeria-cmp" alt="fondo2" src={fondo2} />
                <img className="img-galeria-cmp" alt="fondo3" src={casa03} />
                <img className="img-galeria-cmp" alt="fondo4" src={fondo4} />
                <img className="img-galeria-cmp" alt="fondo5" src={fondo5} />
                <img className="img-galeria-cmp" alt="fondo6" src={casa01} />
                <img className="img-galeria-cmp" alt="fondo7" src={casa01} />
                <img className="img-galeria-cmp" alt="fondo8" src={fondo8} />
                <img className="img-galeria-cmp" alt="fondo9" src={fondo9} />
                <img className="img-galeria-cmp" alt="fondo10" src={fondo10} />
            </div>
            <div className="column">
                <img className="img-galeria-cmp" alt="fondo1" src={fondo1} />
                <img className="img-galeria-cmp" alt="fondo2" src={casa01} />
                <img className="img-galeria-cmp" alt="fondo3" src={fondo3} />
                <img className="img-galeria-cmp" alt="fondo4" src={casa02} />
                <img className="img-galeria-cmp" alt="fondo5" src={fondo5} />
                <img className="img-galeria-cmp" alt="fondo6" src={fondo6} />
                <img className="img-galeria-cmp" alt="fondo7" src={fondo7} />
                <img className="img-galeria-cmp" alt="fondo8" src={casa03} />
                <img className="img-galeria-cmp" alt="fondo9" src={fondo9} />
                <img className="img-galeria-cmp" alt="fondo10" src={fondo10} />
            </div>
            
        </div>
    </div>
  );
}

export default Galeria;
