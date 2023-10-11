import React, { useState } from 'react';

const Checkout = ({ cart, calcularTotal, onCheckout }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [direccion, setDireccion] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleDireccionChange = (e) => {
        setDireccion(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            name,
            email,
            direccion,
            items: cart,
            total: calcularTotal(cart),
        };
        onCheckout(order);
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
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
                    <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
