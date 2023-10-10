import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
import { CartContent } from './components/CartContent';
import { FaShoppingCart } from 'react-icons/fa';


function App() {
  const [carro, setCarro] = useState([]);

  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Catalog carro={carro} setCarro={setCarro}/>} />
        <Route path='/category/:id' exact element={<Catalog carro={carro} setCarro={setCarro}/>} />
        <Route path='/item/:id' exact element={<ProductDetail />} />
        <Route path='/cart' element={<CartContent carro={carro} setCarro={setCarro} />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
