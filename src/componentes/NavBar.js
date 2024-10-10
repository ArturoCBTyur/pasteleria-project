// src/componentes/NavBar.js
import React, { useState } from "react";
import '../estilos/NavBar.css';
import lupa from '../img/lupa.png';
import logo from '../img/logo.png';
import carritoCom from '../img/carrito.png';
import FormularioPedido from './FormularioPedido.js'; // Importamos el nuevo componente

const NavBar = ({ carrito, setCarrito }) => {
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const manejarClickCarrito = () => {
    setCarritoAbierto(!carritoAbierto);
  };

  const quitarProducto = (titulo) => {
    const nuevoCarrito = carrito.filter(item => item.title !== titulo);
    setCarrito(nuevoCarrito);
  };

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + (item.price * item.cantidad), 0);
  };

  const manejarConfirmacion = () => {
    setMostrarFormulario(true); // Mostrar el formulario cuando se confirma el carrito
  };

  const cerrarFormulario = () => {
    setMostrarFormulario(false); // Cerrar el formulario
  };

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
          <div className="carrito" onClick={manejarClickCarrito}>
            <img src={carritoCom} alt="Carrito" />
          </div>
        </div>
      </div>

      {carritoAbierto && (
        <div className="carrito-desplegable">
          {carrito.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <div>
              <ul>
                {carrito.map((item, index) => (
                  <li key={index}>
                    {item.title} - Cantidad: {item.cantidad} - Precio: S/.{item.price * item.cantidad}
                    <button onClick={() => quitarProducto(item.title)}>Quitar</button>
                  </li>
                ))}
              </ul>
              <div className="botones-carrito">
                <p><strong>Total: S/.{calcularTotal()}</strong></p>
                <button className="confirmar-btn" onClick={manejarConfirmacion}>Confirmar</button>
              </div>
            </div>
          )}
        </div>
      )}

      {mostrarFormulario && <FormularioPedido cerrarFormulario={cerrarFormulario} />} {/* Invocar al formulario */}
    </header>
  );
};

export default NavBar;
