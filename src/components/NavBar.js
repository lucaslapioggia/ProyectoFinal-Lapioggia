import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">ProyectoFinal+Lapioggia</Link>
        <div>
          <Link className="btn btn-link" to="/category/tapiceria">Tapicería</Link>
          <Link className="btn btn-link" to="/category/carpinteria">Carpintería</Link>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}
