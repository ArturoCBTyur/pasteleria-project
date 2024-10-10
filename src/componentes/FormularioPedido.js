// src/componentes/FormularioPedido.js
import React from "react";
import '../estilos/FormularioPedido.css'; 

const FormularioPedido = ({ cerrarFormulario }) => {
  return (
    <div className="formulario-pedido-overlay">
      <div className="formulario-pedido">
        <h2>Formulario de Pedido</h2>
        <form>
          <label>Nombre Completo:</label>
          <input type="text" placeholder="Nombre" required />

          <label>Dirección:</label>
          <input type="text" placeholder="Dirección" required />

          <label>Teléfono:</label>
          <input type="tel" placeholder="Teléfono" required />

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
