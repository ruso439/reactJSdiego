import './styles/App.css';

import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { ItemDetailsContainer } from './components/ItemDetailsContainer';
import { NotFound } from './components/NotFound';
import { CarritoProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  
  return (
    <BrowserRouter>
        <CarritoProvider>
            <Navbar />
            <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
            <ToastContainer/>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:cid' element={<ItemListContainer />} />
              <Route path='/product/:pid' element={<ItemDetailsContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </CarritoProvider>
    </BrowserRouter>

  )
}


//function App() {
//  const [cart, setCart] = useState([]);
//
//  const product = [
//    { name: 'Miel de 1kg', price: 8 },
//    { name: 'Miel de 2kg', price: 14 },
//    { name: 'Miel de 3kg', price: 21 },
//    { name: 'Miel de 30kg', price: 200 },
//  ];
//
//  const addToCart = (product) => {
//    setCart([...cart, product]);
//  };
//
//  const removeFromCart = (productToRemove) => {
//    setCart(cart.filter((product) => product !== productToRemove));
//  };
//
//  return (
//    <>
//      <NavBar />
//
//      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
//      
//      {products.map((product, index) => (
//        <product key={index} product={product} addToCart={addToCart} />
//      ))}
//      <Cart cart={cart} removeFromCart={removeFromCart} />
//      
//    </>
//  );
//}

export default App;
