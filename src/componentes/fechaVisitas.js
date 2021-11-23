import React, { useEffect } from "react";
import "../css/fechaVisitas.css";

function FechaVisitas(props) {

 
  return (
    <div className="FechaVisitas">
      <label className="label-visitas">Días y horarios para reuniones</label>
      <input  type="date" className="date-visit" id="visitas" name="visitas" />
      <div className="Container-fechas">
        <div className="semanas">
          <div className="dias-semanas">
              <p className="dia-semana">LU</p>
              <p className="dia-semana">7</p>
          </div>
          <div className="horas-dias">
            <p className="hora-desc">10 am   Disponible </p>
            <p className="hora-desc">12 pm   - </p>
            <p className="hora-desc">13 am   Visita técnica </p>
          </div>
        </div>
        <div className="semanas">
          <div className="dias-semanas">
              <p className="dia-semana">MA</p>
              <p className="dia-semana">8</p>
          </div>
          <div className="horas-dias">
            <p className="hora-desc">10 am   Disponible </p>
            <p className="hora-desc">12 pm   - </p>
            <p className="hora-desc">13 am   Visita técnica </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FechaVisitas;