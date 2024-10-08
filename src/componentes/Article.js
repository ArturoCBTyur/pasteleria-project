import React, { useState } from 'react';
import torta1 from '../img/tortaN1.jpg';
import torta2 from '../img/tortaN2.jpg';
import torta3 from '../img/tortaN3.jpg';
import torta4 from '../img/tortaN4.jpg';
import torta5 from '../img/tortaN5.jpg';
import torta6 from '../img/tortaN6.jpg';
import torta7 from '../img/tortaN7.jpg';
import torta8 from '../img/tortaN8.jpg';
import '../estilos/Article.css';

function Article() {
    const [mensaje, setMensaje] = useState(''); 
    const [visible, setVisible] = useState(false); 

    const tortas = [
        { title: 'Torta de Chocolate', description: 'Chocolate, ganache suave.', image: torta1 },
        { title: 'Torta Red Velvet', description: 'Color rojo, queso crema.', image: torta2 },
        { title: 'Torta de Zanahoria', description: 'Zanahoria, nueces, crema.', image: torta3 },
        { title: 'Torta de Limon', description: 'Fresca, glaseado de limón.', image: torta4 },
        { title: 'Torta de Almendras', description: 'Almendras, suave y ligera.', image: torta5 },
        { title: 'Torta de Coco', description: 'Coco, frosting, coco rallado.', image: torta6 },
        { title: 'Torta de Frutas', description: 'Frutas confitadas, almíbar.', image: torta7 },
        { title: 'Torta Selva Negra', description: 'Chocolate, cerezas, crema.', image: torta8 },
    ];

    
    const mostrarMensaje = (mensaje) => {
        setMensaje(mensaje);
        setVisible(true); 
        setTimeout(() => {
            setVisible(false); 
        }, 3000);
    };

    return (
        <div className="grid-contenedor">
            {tortas.map((torta, index) => (
                <TortaCard key={index} torta={torta} mostrarMensaje={mostrarMensaje} />
            ))}

         
            {visible && (
                <div className="mensaje-emergente">
                    {mensaje}
                </div>
            )}
        </div>
    );
}

function TortaCard({ torta, mostrarMensaje }) {
    const [cantidad, setCantidad] = useState(0);

    const incrementar = () => setCantidad(cantidad + 1);
    const decrementar = () => {
        if (cantidad > 0) setCantidad(cantidad - 1);
    };

    const agregarProducto = () => {
        if (cantidad > 0) {
            mostrarMensaje(`Producto agregado: ${torta.title}. Cantidad: ${cantidad}`);
        } else {
            mostrarMensaje("No hay productos que agregar");
        }
    };

    return (
        <div className="card">
            <img src={torta.image} alt={torta.title} className="card-image" />
            <h3>{torta.title}</h3>
            <p>{torta.description}</p>

            <div className="contador">
                <button onClick={decrementar} className="contador-btn">-</button>
                <input type="text" value={cantidad} readOnly className="contador-input" />
                <button onClick={incrementar} className="contador-btn">+</button>
            </div>

            <button onClick={agregarProducto} className="agregar-btn">Agregar</button>
        </div>
    );
}

export default Article;