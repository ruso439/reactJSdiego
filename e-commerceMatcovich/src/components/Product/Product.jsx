import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Product = ({ product, addToCart }) => {
  return (
    <Card body>
      <CardTitle tag="h5">{product.name}</CardTitle>
      <CardText>${product.price}</CardText>
      <Button onClick={() => addToCart(product)}>Add to Cart</Button>
    </Card>
  );
};

export default Product;
