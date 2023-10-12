import React, { useState } from 'react';
import Checkout from './Checkout';

const CartContent = ({ carro, actualizarCarroCount }) => {
  const [cart, setCart] = useState(carro);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const eliminarProducto = (producto) => {
    const updatedCart = cart.filter((item) => item.id !== producto.id);
    setCart(updatedCart);
    const cantidadEnCarro = cantProdCarro(updatedCart);
    actualizarCarroCount(cantidadEnCarro);
  };

  const sumarCantidad = (producto) => {
    const updatedCart = cart.map((item) => {
      if (item.id === producto.id) {
        return { ...item, cantidad: item.cantidad + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    const cantidadEnCarro = cantProdCarro(updatedCart);
    actualizarCarroCount(cantidadEnCarro);
  };

  const restarCantidad = (producto) => {
    const updatedCart = cart.map((item) => {
      if (item.id === producto.id && item.cantidad > 1) {
        return { ...item, cantidad: item.cantidad - 1 };
      }
      return item;
    });
    setCart(updatedCart);
    const cantidadEnCarro = cantProdCarro(updatedCart);
    actualizarCarroCount(cantidadEnCarro);
  };

  const calcularTotal = (carro) => {
    return carro.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  };

  const cantProdCarro = (carro) => {
    return carro.reduce((cantProd, elem) => cantProd + elem.cantidad, 0);
  };

  const handleOrderPlaced = (order) => {
    
    console.log('Pedido realizado:', order);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((producto) => (
          <li key={producto.id}>
            <div className='cartContent'>
              <h4>{producto.id}</h4>
              <h4>{producto.name}</h4>
              <p>Precio: ${producto.precio}</p>
              <button className='btn btn-warning' onClick={() => sumarCantidad(producto)}>+</button>
              <p className='bg-success p-2 text-white bg-opacity-75'>Cantidad: {producto.cantidad}</p>
              <button className='btn btn-warning' onClick={() => restarCantidad(producto)}>-</button>
              <button className='btn btn-danger' onClick={() => eliminarProducto(producto)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      {cart.length === 0 ? (
        <p>El carrito de compras está vacío.</p>
      ) : (
        <div>
          <h3>Total: $ {calcularTotal(cart)}</h3>
          <button className='btn btn-info' onClick={handleCheckout}>Comprar</button>
        </div>
      )}

      {showCheckout && (
        <Checkout
          cart={cart}
          calcularTotal={calcularTotal}
          onCheckout={handleOrderPlaced}
        />
      )}
    </div>
  );
};

export default CartContent;
