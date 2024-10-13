import React from "react";
import "../estilos/Contactanos.css";

function Contactanos() {
  return (
    <div className="container">
      <div className="infoSection">
        <div className="infoBox">
          <i className="fas fa-map-marker-alt icon"></i>
          <p>
            Calle flores 543
            <br />
            San Borja.
            <br />
            Solo recojo, previa coordinación
          </p>
        </div>
        <div className="infoBox">
          <i className="fas fa-clock icon"></i>
          <p>
            Horario:
            <br />
            Lunes a sábados: 8am a 5pm
            <br />
            Domingos: No hay atención
          </p>
        </div>
        <div className="infoBox">
          <i className="fas fa-phone icon"></i>
          <p>
            Teléfono:
            <br />
            987 654 543
            <br />
            999 000 555
          </p>
        </div>
        <div className="infoBox">
          <i className="fas fa-envelope icon"></i>
          <p>
            Correo:
            <br />
            <a href="mailto:info@dulcefina.com.pe">
              info@sweetinspiration.com.pe
            </a>
          </p>
        </div>
        <div className="infoBox">
          <p>
            Teléfono Provincia:
            <br />
            999 432 217
          </p>
        </div>
      </div>
      <div className="formSection">
        <h3>Envíanos un mensaje</h3>
        <form className="form">
          <label className="label">Nombres y apellidos *</label>
          <input type="text" className="input" required />

          <label className="label">Celular *</label>
          <input type="tel" className="input" required />

          <label className="label">Correo electrónico *</label>
          <input type="email" className="input" required />

          <label className="label">Mensaje *</label>
          <textarea className="textarea" required></textarea>

          <button type="submit" className="button">
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contactanos;
