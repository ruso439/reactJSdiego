import React, { useEffect, useState } from 'react';

export const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div>
      <h2>Lista de Artículos</h2>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Peso: {item.weight}</p>
        </div>
      ))}
    </div>
  );
};
