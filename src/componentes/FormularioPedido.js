import React, { useState } from "react";
import '../estilos/FormularioPedido.css';
import jsPDF from "jspdf";
import QRCode from "qrcode";
import logoImg from '../img/logo.png';

const FormularioPedido = ({ cerrarFormulario, carrito, total, limpiarCarrito }) => {
  const [metodoEntrega, setMetodoEntrega] = useState("recoger");
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [metodoPago, setMetodoPago] = useState('tarjeta');
  const [direccion, setDireccion] = useState('');

  const manejarCambioEntrega = (e) => {
    setMetodoEntrega(e.target.value);
  };

  const generarCodigoPedido = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const generarPDF = async (e) => {
    e.preventDefault();

    // Crear un nuevo documento PDF en formato A4
    const doc = new jsPDF({
      format: 'a4',
      unit: 'mm'
    });

    // Configuración inicial
    const margenIzquierdo = 20;
    let posicionY = 20;
    const espacioLinea = 8;

    // Código de pedido
    const codigoPedido = generarCodigoPedido();

    // Generar el código QR
    const qrCodeUrl = await QRCode.toDataURL(codigoPedido.toString());

    // Crear imagen del logo para el PDF
    const img = new Image();
    img.src = logoImg;

    // Encabezado con fondo
    doc.setFillColor(51, 51, 51);
    doc.rect(0, 0, 210, 50, 'F');

    // Añadir logo
    doc.addImage(img, 'PNG', margenIzquierdo, 5, 30, 30);
    
    // Título de la pastelería
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text("Sweet Inspiration", margenIzquierdo + 35, 20);
    
    // Subtítulo
    doc.setFontSize(12);
    doc.setFont('helvetica', 'italic');
    doc.text("Pastelería & Repostería", margenIzquierdo + 35, 28);
    
    // Información del pedido
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Código: #${codigoPedido}`, margenIzquierdo + 35, 38);
    doc.text(`Fecha: ${new Date().toLocaleDateString()}`, margenIzquierdo + 100, 38);

    // Información del cliente
    posicionY = 70;
    doc.setTextColor(51, 51, 51);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text("Información del Cliente", margenIzquierdo, posicionY);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    posicionY += espacioLinea + 5;
    doc.text(`Nombre: ${nombre}`, margenIzquierdo, posicionY);
    posicionY += espacioLinea;
    doc.text(`Teléfono: ${telefono}`, margenIzquierdo, posicionY);
    posicionY += espacioLinea;
    doc.text(`Método de Entrega: ${metodoEntrega === 'recoger' ? 'Recoger en Tienda' : 'Enviar a Domicilio'}`, margenIzquierdo, posicionY);
    
    if (metodoEntrega === 'domicilio') {
      posicionY += espacioLinea;
      doc.text(`Dirección: ${direccion}`, margenIzquierdo, posicionY);
    }
    
    posicionY += espacioLinea;
    doc.text(`Método de Pago: ${metodoPago === 'tarjeta' ? 'Tarjeta de Crédito/Débito' : 'Efectivo'}`, margenIzquierdo, posicionY);

    // Detalles del pedido
    posicionY += espacioLinea + 10;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text("Detalles del Pedido", margenIzquierdo, posicionY);

    // Cabecera de la tabla
    posicionY += espacioLinea + 5;
    doc.setFillColor(240, 240, 240);
    doc.rect(margenIzquierdo, posicionY - 5, 170, 8, 'F');
    doc.setFontSize(11);
    doc.text("Producto", margenIzquierdo + 2, posicionY);
    doc.text("Cant.", margenIzquierdo + 90, posicionY);
    doc.text("Precio", margenIzquierdo + 120, posicionY);
    doc.text("Total", margenIzquierdo + 150, posicionY);

    // Productos
    doc.setFont('helvetica', 'normal');
    carrito.forEach((item, index) => {
      posicionY += espacioLinea;
      const titulo = item.title.length > 40 ? item.title.substring(0, 37) + '...' : item.title;
      doc.text(titulo, margenIzquierdo + 2, posicionY);
      doc.text(item.cantidad.toString(), margenIzquierdo + 90, posicionY);
      doc.text(`S/.${item.price.toFixed(2)}`, margenIzquierdo + 120, posicionY);
      doc.text(`S/.${(item.price * item.cantidad).toFixed(2)}`, margenIzquierdo + 150, posicionY);
    });

    // Total
    posicionY += espacioLinea + 5;
    doc.setDrawColor(200, 200, 200);
    doc.line(margenIzquierdo, posicionY, 190, posicionY);
    posicionY += espacioLinea;
    doc.setFont('helvetica', 'bold');
    doc.text("Total:", margenIzquierdo + 120, posicionY);
    doc.text(`S/.${total.toFixed(2)}`, margenIzquierdo + 150, posicionY);

    // Añadir el código QR
    doc.addImage(qrCodeUrl, 'PNG', 165, 15, 25, 25);

    // Pie de página
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(128, 128, 128);
    doc.text("Sweet Inspiration", doc.internal.pageSize.width / 2, 280, { align: "center" });

    // Descargar el PDF
    doc.save(`Sweet_Inspiration_Pedido_${codigoPedido}.pdf`);

    setTimeout(() => {
      limpiarCarrito();
    }, 1000);
    cerrarFormulario();
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