import React from 'react';
import { Container } from 'react-bootstrap';

const ItemListContainer = ({ greeting = '' }) => {
  return (
    <Container className="item-list-container">
      <p>{greeting}</p>
    </Container>
  );
};

export default ItemListContainer;