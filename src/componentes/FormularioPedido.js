// src/componentes/FormularioPedido.js
import React, { useState } from "react";
import '../estilos/FormularioPedido.css';

const FormularioPedido = ({ cerrarFormulario }) => {
  const [metodoEntrega, setMetodoEntrega] = useState("recoger"); // Estado para el método de entrega

  const manejarCambioEntrega = (e) => {
    setMetodoEntrega(e.target.value);
  };

  return (
    <div className="formulario-pedido-overlay">
      <div className="formulario-pedido">
        <h2>Formulario de Pedido</h2>
        <form>
          <label>Nombre Completo:</label>
          <input type="text" placeholder="Nombre" required />

          <label>Teléfono:</label>
          <input type="tel" placeholder="Teléfono" required />

          <label>Método de Entrega:</label>
          <div className="metodo-entrega">
            <label>
              <input
                type="radio"
                value="recoger"
                checked={metodoEntrega === "recoger"}
                onChange={manejarCambioEntrega}
              />
              Recoger en Tienda
            </label>
            <label>
              <input
                type="radio"
                value="domicilio"
                checked={metodoEntrega === "domicilio"}
                onChange={manejarCambioEntrega}
              />
              Enviar a Domicilio
            </label>
          </div>

          {/* Solo mostrar el campo de dirección si se selecciona "Enviar a Domicilio" */}
          {metodoEntrega === "domicilio" && (
            <>
              <label>Dirección:</label>
              <input type="text" placeholder="Dirección" required />
            </>
          )}

          <label>Forma de pago:</label>
          <select required>
            <option value="tarjeta">Tarjeta de Crédito/Débito</option>
            <option value="efectivo">Efectivo</option>
          </select>

          <button type="submit">Enviar Pedido</button>
          <button type="button" onClick={cerrarFormulario}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioPedido;
