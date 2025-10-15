import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const exists = cart.find(i => i.id === item.id);
    if (exists) {
      setCart(prev => prev.map(i => i.id === item.id ? {...i, quantity: i.quantity + quantity} : i));
    } else {
      setCart(prev => [...prev, {...item, quantity}]);
    }
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));
  const clearCart = () => setCart([]);
  const totalItems = cart.reduce((acc, i) => acc + i.quantity, 0);
  const totalPrice = cart.reduce((acc, i) => acc + i.quantity * i.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
