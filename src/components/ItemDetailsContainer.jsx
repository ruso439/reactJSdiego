import React from 'react';

export const ItemDetailsContainer = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
    </div>
  );
};
