import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function ItemDetail({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    addToCart(product, qty);
    setAdded(true);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <p>Stock: {product.stock}</p>
        {!added ? (
          product.stock > 0 ? <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} /> : <p>Producto sin stock</p>
        ) : (
          <div>
            <Link to="/cart" className="btn btn-success me-2">Ir al carrito</Link>
            <Link to="/" className="btn btn-secondary">Seguir comprando</Link>
          </div>
        )}
      </div>
    </div>
  );
}
