import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Product from './components/Product/Product';
import Cart from './components/Product/Cart';
import ItemListContainer from './components/ItemListContainer';
import './App.css';


function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { name: 'Miel de 1kg', price: 8 },
    { name: 'Miel de 2kg', price: 14 },
    { name: 'Miel de 3kg', price: 21 },
    { name: 'Miel de 30kg', price: 200 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <div>
      <NavBar />

      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
      
      {products.map((product, index) => (
        <Product key={index} product={product} addToCart={addToCart} />
      ))}
      <Cart cart={cart} removeFromCart={removeFromCart} />
      
    </div>
  );
}

export default App;
