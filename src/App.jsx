import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
import CartContent  from './components/CartContent';
import { FaShoppingCart } from 'react-icons/fa';


function App() {
  const [carro, setCarro] = useState([]);
  const [carroCount, setCarroCount] = useState(0);

  const actualizarCarroCount = (count) => {
    setCarroCount(count);
  };

  
  return (
    <BrowserRouter>
      <Navbar carroCount={carroCount} />
      <Routes>
        <Route path='/' exact element={<Catalog carro={carro} setCarro={setCarro} actualizarCarroCount={actualizarCarroCount} /> } />
        <Route path='/category/:id' exact element={<Catalog carro={carro} setCarro={setCarro} actualizarCarroCount={actualizarCarroCount } />} />
        <Route path='/item/:id' exact element={<ProductDetail />} />
        <Route path='/cart' element={<CartContent carro={carro} setCarro={setCarro} actualizarCarroCount={actualizarCarroCount}/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
