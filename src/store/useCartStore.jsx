import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item) => {
        const cart = get().cart;
        const existing = cart.find((p) => p.id === item.id);

        if (existing) {
          set({
            cart: cart.map((p) =>
              p.id === item.id
                ? { ...p, quantity: p.quantity + 1 }
                : p
            ),
          });
        } else {
          set({ cart: [...cart, { ...item, quantity: 1 }] });
        }
      },

      removeFromCart: (id) =>
        set({
          cart: get().cart.filter((item) => item.id !== id),
        }),

      updateQuantity: (id, delta) =>
        set({
          cart: get().cart
            .map((item) =>
              item.id === id
                ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                : item
            )
            .filter((item) => item.quantity > 0),
        }),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
);

export default useCartStore;
