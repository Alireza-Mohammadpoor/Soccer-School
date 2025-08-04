// context/UserContext.js
"use client";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("soccer-user");
    const storedCart = localStorage.getItem("soccer-cart");
    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem("soccer-user", JSON.stringify(user));
    localStorage.setItem("soccer-cart", JSON.stringify(cart));
  }, [user, cart]);

  const addToCart = (product) => {
    const found = cart.find((item) => item.id === product.id);
    if (found) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + amount, 1) } : item
      )
    );
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
