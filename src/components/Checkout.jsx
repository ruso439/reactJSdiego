import React from 'react';

export const Checkout = () => {
  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <label>
          Dirección de envío:
          <input type="text" name="shipping-address" />
        </label>
        <label>
          Método de pago:
          <select name="payment-method">
            <option value="credit-card">Tarjeta de crédito</option>
            <option value="debit-card">Tarjeta de débito</option>
            <option value="paypal">PayPal</option>
          </select>
        </label>
        <input type="submit" value="Realizar pedido" />
      </form>
    </div>
  );
};
