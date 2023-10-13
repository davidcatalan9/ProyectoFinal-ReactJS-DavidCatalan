import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Catalog.css";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ProductDetail() {
  // const { id: productId } = useParams();

  const { id:productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const selectedProduct = doc(db, "reloj", productId); // Elimina las comillas alrededor de productId

    getDoc(selectedProduct).then((snapshot) => {
      if (snapshot.exists()) {
        const productData = snapshot.data();
        setProduct(productData);
      }
    });
  }, [productId]);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h4>{product.id}</h4>
      <h2>Marca: {product.marca} </h2>
      <h3>Nombre: {product.name}</h3>
      <h4>Precio: $ {product.precio}</h4>
      <img
        src={`/images/${product.foto}`}
        alt={product.name}
        width="300px"
        height="300px"
      />
    </div>
  );
}

export default ProductDetail;
