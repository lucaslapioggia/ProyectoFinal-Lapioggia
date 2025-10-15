import React, { useState } from 'react';

export default function ItemCount({ stock, initial=1, onAdd }) {
  const [count, setCount] = useState(initial);

  const inc = () => setCount(c => Math.min(stock, c+1));
  const dec = () => setCount(c => Math.max(1, c-1));

  return (
    <div className="d-flex align-items-center">
      <button className="btn btn-outline-secondary" onClick={dec}>-</button>
      <span className="mx-2">{count}</span>
      <button className="btn btn-outline-secondary" onClick={inc}>+</button>
      <button className="btn btn-primary ms-3" onClick={() => onAdd(count)}>Agregar</button>
    </div>
  );
}
