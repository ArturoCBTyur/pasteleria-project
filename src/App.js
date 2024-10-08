import './App.css';
import Footer from './componentes/Footer.js';
import Article from './componentes/Article.js';
import NavBar from './componentes/NavBar.js';
import Carousel from './componentes/Carousel.js';
import { useState } from 'react';


function App() {
  const [carrito, setCarrito] = useState([]);
  const [mensaje, setMensaje] = useState(''); 
  const [mensajeError, setMensajeError] = useState(''); 

  const agregarAlCarrito = (producto, cantidad) => {
    if (cantidad <= 0) {
      setMensajeError("No hay producto que agregar");
      setTimeout(() => {
        setMensajeError('');
      }, 3000);
      return;
    }

    const productoExistente = carrito.find(item => item.title === producto.title);

    if (productoExistente) {
      setCarrito(
        carrito.map(item =>
          item.title === producto.title ? { ...item, cantidad: item.cantidad + cantidad } : item
        )
      );
      setMensaje(`Producto agregado: ${producto.title}`); 
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
      setMensaje(`Producto agregado: ${producto.title}`);
    }
    setTimeout(() => {
      setMensaje('');
    }, 3000);
  };

  return (
    <div className="App">
      {mensaje && <div className="mensaje-emergente">{mensaje}</div>}
      {mensajeError && <div className="mensaje-emergente error">{mensajeError}</div>}
      <NavBar carrito={carrito} setCarrito={setCarrito} />
      <Carousel />
      <Article agregarAlCarrito={agregarAlCarrito} />
      <Footer />
    </div>
  );
}

export default App;
