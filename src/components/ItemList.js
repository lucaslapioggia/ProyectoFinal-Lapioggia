import React from 'react';
import Item from './Item';

export default function ItemList({ products }) {
  if (!products.length) return <p>Cargando productos...</p>;
  return (
    <div className="row">
      {products.map(p => (
        <div className="col-md-4" key={p.id}>
          <Item product={p} />
        </div>
      ))}
    </div>
  );
}
