import React from "react";
import logo from '../img/logo.png';
import face from '../img/facebook.png';
import ig from '../img/instagram.png';
import tiktok from '../img/tiktok.png';
import '../estilos/Footer.css';

function Footer() {  
  return (
    
    <div className="contenedor-footer">
      <div className="caja-lista-logo">
        <div className="contendor-logo">
          <img className="logop" src={logo} alt="Mi imagen de footer" />
        </div>
        <div className="caja-menu">
          <div className="bloque-menu">
            <h4 id="titulo-enlace">Contáctanos</h4>
            <ul>
              <li><a href="">Telf: +51 999000555</a></li>
              <li><a href="">Email: pastel@gmail.com</a></li>
              <li><a href="">Horario de Atención: <br/>
              Lunes a Domingo<br/>
              11am a 9pm</a></li>
            </ul>
          </div>
          <div className="bloque-menu">
            <h4 id="titulo-enlace">Políticas</h4>
            <ul>
              <li><a href="">Libro de Reclamaciones</a></li>
              <li><a href="">Términos y condiciones</a></li>
              <li><a href="">Entregas y devoluciones</a></li>
            </ul>
          </div>
          <div className="bloque-menu">
            <h4 id="titulo-enlace">Información Adicional</h4>
            <ul>
              <li><a href=""></a></li>
              <li><a href="">Página de inicio</a></li>
              <li><a href="">Productos</a></li>
              <li><a href="">Acerca de nosotros</a></li>
            </ul>
          </div>
        </div>

        <div className="contenedor-redes">
        <h4 id="titulo-redes">Redes sociales</h4>
        <div className="redes-horizontales">
            <figure>
              <img src={face} className="red" alt="Facebook" />
              <figcaption>Facebook</figcaption>
            </figure>
            <figure>
              <img src={ig} className="red" alt="Instagram" />
              <figcaption>Instagram</figcaption>
            </figure>
            <figure>
              <img src={tiktok} className="red" alt="Tiktok" />
              <figcaption>Tiktok</figcaption>
            </figure>
          </div>
      </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Página Web. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}
export default Footer;