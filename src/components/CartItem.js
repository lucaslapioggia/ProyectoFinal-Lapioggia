import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <div className="card mb-2">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5>{item.name}</h5>
          <p>Cantidad: {item.quantity}</p>
          <p>Subtotal: ${item.quantity * item.price}</p>
        </div>
        <div>
          <button className="btn btn-outline-danger" onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      </div>
    </div>
  );
}
