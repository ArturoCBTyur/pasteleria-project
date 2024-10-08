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

function Article({ agregarAlCarrito }) {
    const tortas = [
        { title: 'Torta de Chocolate', description: 'Chocolate, ganache suave.', price: 25, image: torta1 },
        { title: 'Torta Red Velvet', description: 'Color rojo, queso crema.', price: 30, image: torta2 },
        { title: 'Torta de Zanahoria', description: 'Zanahoria, nueces, crema.', price: 28, image: torta3 },
        { title: 'Torta de Limón', description: 'Fresca, glaseado de limón.', price: 22, image: torta4 },
        { title: 'Torta de Almendras', description: 'Almendras, suave y ligera.', price: 35, image: torta5 },
        { title: 'Torta de Coco', description: 'Coco, frosting, coco rallado.', price: 27, image: torta6 },
        { title: 'Torta de Frutas', description: 'Frutas confitadas, almíbar.', price: 40, image: torta7 },
        { title: 'Torta Selva Negra', description: 'Chocolate, cerezas, crema.', price: 38, image: torta8 },
    ];

    return (
        <div className="grid-contenedor">
            {tortas.map((torta, index) => (
                <TortaCard 
                    key={index} 
                    torta={torta} 
                    agregarAlCarrito={agregarAlCarrito}
                />
            ))}
        </div>
    );
}

function TortaCard({ torta, agregarAlCarrito }) {
    const [cantidad, setCantidad] = useState(0);

    const incrementar = () => setCantidad(cantidad + 1);
    const decrementar = () => {
        if (cantidad > 0) setCantidad(cantidad - 1);
    };

    const agregarProducto = () => {
        if (cantidad > 0) {
            agregarAlCarrito(torta, cantidad);
        } else {
            agregarAlCarrito(torta, 0);
        }
    };

    return (
        <div className="card">
            <img src={torta.image} alt={torta.title} className="card-image" />
            <h3>{torta.title}</h3>
            <p>{torta.description}</p>
            <p><strong>Precio: S/.{torta.price}</strong></p>
            
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
