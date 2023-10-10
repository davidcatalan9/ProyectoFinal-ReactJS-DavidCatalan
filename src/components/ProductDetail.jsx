import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

function ProductDetail() {
  const { id: productId } = useParams();

  const [product, setProduct] = useState(null);
  

  useEffect(() => {

    const selectedProduct = products.find(p => p.id === parseInt(productId));
    setProduct(selectedProduct);
  }, [productId]);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      {product.id}
      <h2>Marca: {product.marca} </h2>
      <h3>Nombre: {product.name}</h3>
      <h4>Precio: {product.precio}</h4>
      <img
           src={`/images/${product.imageFileName}`} // Ruta a la imagen
           alt={product.name} // Texto alternativo para la imagen
           width="300px" // Ancho de la imagen
           height="300px" // Alto de la imagen
       />
    </div>
  );
}

export default ProductDetail;
