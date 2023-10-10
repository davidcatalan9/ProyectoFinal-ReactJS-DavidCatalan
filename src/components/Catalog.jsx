import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import products from '../data/products';



function Catalog( {carro, setCarro }) {

    const { id: categoryId } = useParams();
    const { pathname } = useLocation();

    const [filteredProducts, setFilteredProducts] = useState([]);
    
    const compraProds = (producto) => {
        setCarro([...carro, producto ]);
        console.log("evento comprar", carro);
        
    }

    useEffect(() => {
        if (pathname === '/' || !categoryId) {
            setFilteredProducts(products);
        } else {
            
            const filtered = products.filter(product => product.marca === categoryId);

            setFilteredProducts(filtered);
        }
    }, [categoryId, pathname]);

    return (
        <div className='p-4  product-grid'>
            {filteredProducts.map(product => (
                <div key={product.id}>
                    Id: {product.id } =
                    <Link to={`/item/${product.id}`}>{product.name}</Link>
                    <img
                        src={`./images/${product.imageFileName}`} // Ruta a la imagen
                        alt={product.name} // Texto alternativo para la imagen
                        width="150" // Ancho de la imagen
                        height="150" // Alto de la imagen
                    />
                    <h3>${product.precio} </h3>
                    <button onClick={()=> compraProds(product)}>Comprar</button>
                </div>
            ))}
        </div>
    );
}

export default Catalog;
