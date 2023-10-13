import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore";

const Catalog = ({ carro, setCarro, actualizarCarroCount }) => {
    const { id: categoryId } = useParams();
    const location = useLocation(); // Obtener la ubicación actual

    const [productos, setProductos] = useState([]);

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


    useEffect(() => {
        const db = getFirestore();
        const itemsCatalog = collection(db, "reloj");
        
        if (categoryId) {
            // Si categoryId tiene un valor (por ejemplo, "Casio"), filtra por marca
            const marcaFiltro = query(itemsCatalog, where("marca", "==", categoryId));
            getDocs(marcaFiltro)
                .then((snapshot) => {
                    const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                    setProductos(docs);
                })
                .catch((error) => {
                    console.error("Error al obtener productos:", error);
                    // Puedes manejar el error aquí
                });
        } else {
            // Sin categoryId, obtén todos los productos
            getDocs(itemsCatalog)
                .then((snapshot) => {
                    const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                    setProductos(docs);
                })
                .catch((error) => {
                    console.error("Error al obtener productos:", error);
                    // Puedes manejar el error aquí
                });
        }
    }, [categoryId, location.pathname]); // Añadir location.pathname como dependencia

    return (
        <div className='p-4 product-grid'>
            {productos.map((p) => (
                <li key={p.id}>
                    <Link to={`/item/${p.id}`}>{p.name}</Link>
                    <img
                        src={`./images/${p.foto}`}
                        alt={p.name}
                        width="150"
                        height="150"
                    />
                    <h3>${p.precio}</h3>
                    <button onClick={() => compraProds(p)}>
                        Comprar ({carro.find((item) => item.id === p.id)?.cantidad || 0})
                    </button>
                </li>
            ))}
        </div>
    );
};

export default Catalog;
