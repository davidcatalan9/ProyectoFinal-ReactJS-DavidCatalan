import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import products from '../data/products';

function Catalog() {
    const { id: categoryId } = useParams();
    const { pathname } = useLocation();

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (pathname === '/' || !categoryId) {
            setFilteredProducts(products);
        } else {
            
            const filtered = products.filter(product => product.marca === categoryId);
            setFilteredProducts(filtered);
        }
    }, [categoryId, pathname]);

    return (
        <div className='p-3'>
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
                </div>
            ))}
        </div>
    );
}

export default Catalog;
