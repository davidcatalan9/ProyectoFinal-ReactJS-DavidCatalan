import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import products from '../data/products';

function Catalog({ carro, setCarro, actualizarCarroCount }) {
    const { id: categoryId } = useParams();
    const { pathname } = useLocation();

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (pathname === '/' || !categoryId) {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) => product.marca === categoryId);
            setFilteredProducts(filtered);
        }
    }, [categoryId, pathname]);

    const compraProds = (producto) => {
        const updatedCarro = [...carro];
        const existingProduct = updatedCarro.find((item) => item.id === producto.id);
        const count = carro.reduce((total, item) => total + (item.cantidad || 1), 1);
        actualizarCarroCount(count);

        if (existingProduct) {
            // Si el producto ya está en el carrito, incrementar la cantidad
            existingProduct.cantidad += 1;
        } else {
            // Si el producto no está en el carrito, agregarlo con cantidad 1
            producto.cantidad = 1;
            updatedCarro.push(producto);
        }

        setCarro(updatedCarro);
    };

    return (
        <div className='p-4 product-grid'>
            {filteredProducts.map((product) => (
                <div key={product.id}>
                    Id: {product.id} =
                    <Link to={`/item/${product.id}`}>{product.name}</Link>
                    <img
                        src={`./images/${product.imageFileName}`}
                        alt={product.name}
                        width="150"
                        height="150"
                    />
                    <h3>${product.precio} </h3>
                    <button onClick={() => compraProds(product)}>
                        Comprar ({carro.find((item) => item.id === product.id)?.cantidad || 0})
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Catalog;
