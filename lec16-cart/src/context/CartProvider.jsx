import { useEffect, useState } from "react";
import CartContext from "./CartContext";
import { toast } from "react-toastify";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const addToCart = (product, qty) => {
    const productInCart = cart.find((item) => item.product.id === product.id);

    if (productInCart) {
      const updatedCart = cart.map((item) => {
        if (item.product.id === product.id) {
          return { ...item, qty: item.qty + qty };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      let item = {
        product,
        qty,
      };
      setCart([...cart, item]);
    }

    toast.success(product.title + " added to cart successfully");
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId);
    setCart(updatedCart);
    toast.info("Item removed from cart");
  };

  const clearCart = () => {
    setCart([]);
    toast.info("Cart cleared");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
