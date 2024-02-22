import React from 'react';
import { Container } from 'react-bootstrap';

export const ItemListContainer = ({ greeting = '' }) => {
  return (
    <Container className="item-list-container">
      <p>{greeting}</p>
    </Container>
  );
};