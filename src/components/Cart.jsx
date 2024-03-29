import React from 'react';
import { useCarritoContext } from "../context/CartContext";
import { ItemList } from './ItemList';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const Cart = ({ cart, removeFromCart }) => {
  return (
    <Modal isOpen={cart.length > 0}>
      <ModalHeader>Your Cart</ModalHeader>
      <ModalBody>
        {cart.map((product, index) => (
          <div key={index}>
            {product.name} - ${product.price}
            <Button color="danger" onClick={() => removeFromCart(product)}>
              Remove
            </Button>
          </div>
        ))}
      </ModalBody>
      <ModalFooter>
        <Button color="primary">Checkout</Button>
      </ModalFooter>
    </Modal>
  );
};