import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget() {
  const { totalItems } = useCart();
  return (
    <Link to="/cart" className="btn btn-outline-primary">
      🛒 {totalItems}
    </Link>
  );
}
