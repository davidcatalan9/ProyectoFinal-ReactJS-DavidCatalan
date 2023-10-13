import React, { useState } from 'react';
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const Checkout = ({ cart, calcularTotal, onCheckout }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [direccion, setDireccion] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false); // Estado para rastrear el envío del formulario

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleDireccionChange = (e) => {
        setDireccion(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formSubmitted) {
            // Si el formulario ya se ha enviado, no hagas nada.
            return;
        }

        setFormSubmitted(true); // Marca el formulario como enviado

        const order = {
            name,
            email,
            direccion,
            items: cart,
            total: calcularTotal(cart),
            timestamp: serverTimestamp() // Marca de tiempo del servidor
        };

        // Guardar el pedido en la base de datos de Firebase
        const db = getFirestore();
        const ordersCollection = collection(db, "compras");

        try {
            await addDoc(ordersCollection, order);
            // Aquí puedes mostrar un mensaje de éxito o redirigir a una página de confirmación.
        } catch (error) {
            console.error("Error al guardar el pedido:", error);
            // Aquí puedes mostrar un mensaje de error al usuario.
        }
    };

    return (
        <div className="d-flex p-2 justify-content-center align-items-center bg-success p-2" style={{ width: '30%', minHeight: '35vh' }}>
            <form onSubmit={handleSubmit} style={{ width: '300px' }}>
                <h2>Formulario de compra</h2>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Direccion:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="direccion"
                        value={direccion}
                        onChange={handleDireccionChange}
                        required
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary" disabled={formSubmitted}>
                        {formSubmitted ? "Enviado" : "Finalizar Compra"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
