import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({ product }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text"><strong>${product.price}</strong></p>
        <Link to={`/item/${product.id}`} className="btn btn-primary">Ver detalle</Link>
      </div>
    </div>
  );
}
