import React from "react";
import '../estilos/NavBar.css';
import lupa from '../img/lupa.png';
import logo from '../img/logo.png';
import carrito from '../img/carrito.png';

const NavBar = () => {
  return (
    <header>
      <div className="barra-navegacion">
        <div className="logo-small">
          <img src={logo} alt="Logo pequeño" />
        </div>
        <div className="buscador">
          <input type="text" id="search" placeholder="Buscar Productos..." />
          <button id="searchButton">
            <img src={lupa} alt="Buscar" />
          </button>
        </div>
        <div className="menu-opciones">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Tortas</a>
            </li>
          </ul>
          <div className="carrito">
            <img src={carrito} alt="Carrito" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
