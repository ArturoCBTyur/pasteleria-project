import React from "react";
import "../estilos/Nosotros.css";

// Importación de las imágenes desde la carpeta `img` dentro de `src`
import pasteleroImg from "../img/pasteleros.jpg";
import pastelera1Img from "../img/pastelera_1.jpg";
import pastelero2Img from "../img/pastelero_2.jpg";
import rousImg from "../img/rous.jpg";

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <h1>¿Quiénes somos?</h1>
      <p className="descripcion">
        Sweet inspiration es un lugar donde la imaginación, los sabores y la
        inspiración se fusionan para crear las tortas más espectaculares. Una
        pastelería especializada en el arte en azúcar, contamos con más de 25
        años de experiencia. Reconocidas por ser lindas, irresistibles y de
        elegantes diseños, que no solo impactan de manera visual sino por la
        explosión delicada de sabores de sus rellenos. Gracias a la gran
        diversidad de técnicas que aplicamos en el taller en Sweet inspiration
        puedes encontrar desde una deliciosa trufa hasta la torta más glamorosa.
        En Sweet inspiration encontrarás la torta de tus sueños, workshops
        innovadores orientados a pasteleros de diferentes niveles, recetas
        exclusivas, tips de pastelería y de más contenido relacionado al mundo
        del arte en azúcar y pastelería. Bienvenido a nuestro dulce mundo.
      </p>
      <p className="bienvenida">¡Bienvenido a Sweet inspiration!</p>
      
      {/* Imagen principal del pastelero */}
      <img
        src={pasteleroImg}
        alt="imagen de pastelero"
        className="imagen-pastelero"
      />

      <div className="equipo">
        <h3>Conoce a nuestro equipo</h3>
        <div className="miembros">
          <div className="miembro">
            <img src={pastelera1Img} alt="Persona 1" />
            <p>Persona 1 - CEO</p>
          </div>
          <div className="miembro">
            <img src={pastelero2Img} alt="Persona 2" />
            <p>Persona 2 - CTO</p>
          </div>
        </div>
      </div>

      {/* Sección del chef */}
      <div className="chef-section">
        <img src={rousImg} alt="Chef Rous" className="chef-image" />
        <p>
          Rous es una chef profesional egresada del Cordon Bleu. Desde muy
          temprana edad, incursionó en el mundo del arte en azúcar ya que
          trabajaba junto a sus papás en la pastelería de la familia, fue ahí
          donde descubrió su pasión por los pasteles.
        </p>
      </div>
    </div>
  );
};

export default Nosotros;
