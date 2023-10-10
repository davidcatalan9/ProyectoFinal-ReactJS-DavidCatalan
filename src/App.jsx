import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';


function App() {
  const [carro, setCarro] = useState([]);

  const addToCarro = (item) => {
    setCarro([...carro, item]);
  }
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Catalog />} />
        <Route path='/category/:id' exact element={<Catalog />} />
        <Route path='/item/:id' exact element={<ProductDetail />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
