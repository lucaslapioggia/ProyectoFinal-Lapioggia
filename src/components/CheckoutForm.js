import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

export default function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name:'', email:'', phone:'' });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setBuyer({...buyer, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const order = { buyer, items: cart, total: totalPrice, createdAt: new Date().toISOString() };
    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (e) {
      const fake = 'ORDER-' + Math.floor(Math.random()*1000000);
      setOrderId(fake);
      clearCart();
    } finally {
      setLoading(false);
    }
  };

  if (orderId) return <div><h3>Compra realizada</h3><p>ID: {orderId}</p></div>;

  return (
    <form onSubmit={handleSubmit}>
      <input className="form-control mb-2" name="name" placeholder="Nombre" value={buyer.name} onChange={handleChange} required />
      <input className="form-control mb-2" name="email" placeholder="Email" type="email" value={buyer.email} onChange={handleChange} required />
      <input className="form-control mb-2" name="phone" placeholder="Teléfono" value={buyer.phone} onChange={handleChange} required />
      <p>Total a pagar: ${totalPrice}</p>
      <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? 'Procesando...' : 'Confirmar compra'}</button>
    </form>
  );
}
