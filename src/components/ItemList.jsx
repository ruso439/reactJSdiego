import React from 'react';
import { ItemDetail } from './ItemDetail';

export const ItemList = () => {
  const items = [
    { name: '1kg de miel', id: 1 },
    { name: '2kg de miel', id: 2 },
    { name: '3kg de miel', id: 3 },
    { name: '30kg de miel', id: 4 },
  ];

  return (
    <div>
      <h2>Lista de Artículos</h2>
      {items.map((item) => (
        <ItemDetail key={item.id} item={item} />
      ))}
    </div>
  );
};
