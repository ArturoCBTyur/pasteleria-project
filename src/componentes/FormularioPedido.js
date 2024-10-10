// src/componentes/FormularioPedido.js
import React, { useState } from "react";
import '../estilos/FormularioPedido.css';
import jsPDF from "jspdf";
import QRCode from "qrcode";

const FormularioPedido = ({ cerrarFormulario, carrito, total }) => {
  const [metodoEntrega, setMetodoEntrega] = useState("recoger");
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [metodoPago, setMetodoPago] = useState('tarjeta');

  const manejarCambioEntrega = (e) => {
    setMetodoEntrega(e.target.value);
  };

  const generarCodigoPedido = () => {
    return Math.floor(100000 + Math.random() * 900000); // Código aleatorio de 6 dígitos
  };

  const generarPDF = async (e) => {
    e.preventDefault();

    // Crear un nuevo documento PDF
    const doc = new jsPDF();

    // Código de pedido
    const codigoPedido = generarCodigoPedido();

    // Generar el código QR
    const qrCodeUrl = await QRCode.toDataURL(codigoPedido.toString());

    // Añadir contenido al PDF
    doc.setFontSize(16);
    doc.text("Resumen de Pedido", 20, 20);
    doc.setFontSize(12);
    doc.text(`Código de Pedido: ${codigoPedido}`, 20, 30);
    doc.text(`Nombre del Cliente: ${nombre}`, 20, 40);
    doc.text(`Teléfono: ${telefono}`, 20, 50);
    doc.text(`Método de Pago: ${metodoPago}`, 20, 60);
    doc.text(`Método de Entrega: ${metodoEntrega === 'recoger' ? 'Recoger en Tienda' : 'Enviar a Domicilio'}`, 20, 70);

    // Detalles del carrito
    doc.text("Especificaciones del Pedido:", 20, 80);
    carrito.forEach((item, index) => {
      doc.text(`${index + 1}. ${item.title} - Cantidad: ${item.cantidad} - Precio: S/.${item.price} - Total: S/.${item.price * item.cantidad}`, 20, 90 + (index * 10));
    });

    // Precio total del pedido
    doc.text(`Precio Total del Pedido: S/.${total}`, 20, 100 + (carrito.length * 10));

    // Añadir el código QR al PDF
    doc.addImage(qrCodeUrl, 'PNG', 150, 20, 40, 40); // Posición y tamaño del QR

    // Descargar el archivo PDF
    doc.save(`pedido_${codigoPedido}.pdf`);

    cerrarFormulario(); // Cerrar el formulario después de generar el PDF
  };

  return (
    <div className="formulario-pedido-overlay">
      <div className="formulario-pedido">
        <h2>Formulario de Pedido</h2>
        <form onSubmit={generarPDF}>
          <label>Nombre Completo:</label>
          <input 
            type="text" 
            placeholder="Nombre" 
            required 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)}
          />

          <label>Teléfono:</label>
          <input 
            type="tel" 
            placeholder="Teléfono" 
            required 
            value={telefono} 
            onChange={(e) => setTelefono(e.target.value)}
          />

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

          {metodoEntrega === "domicilio" && (
            <>
              <label>Dirección:</label>
              <input type="text" placeholder="Dirección" required />
            </>
          )}

          <label>Forma de pago:</label>
          <select required value={metodoPago} onChange={(e) => setMetodoPago(e.target.value)}>
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
