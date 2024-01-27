import React from 'react';
import { Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';


const CartWidget = () => {
  return (
    <Button variant="secondary" className="position-relative">
      <FaShoppingCart />
      <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
        5
      </Badge>
    </Button>
  );
};

export default CartWidget;