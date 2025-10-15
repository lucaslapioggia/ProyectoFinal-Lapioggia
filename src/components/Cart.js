import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, totalPrice, clearCart } = useCart();

  if (!cart.length) return <div><h3>Carrito vacío</h3><Link to="/">Volver al catálogo</Link></div>;

  return (
    <div>
      {cart.map(i => <CartItem key={i.id} item={i} />)}
      <h3>Total: ${totalPrice}</h3>
      <button className="btn btn-danger me-2" onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout" className="btn btn-success">Finalizar compra</Link>
    </div>
  );
}
