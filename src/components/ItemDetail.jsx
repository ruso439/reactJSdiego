import React from 'react';

export const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
    </div>
  );
};