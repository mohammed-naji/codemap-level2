import { useContext, useState } from "react";
import { CgMoon, CgShoppingBag, CgSun, CgTrash } from "react-icons/cg";
import CartContext from "../context/CartContext";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <div className="flex sticky top-0 justify-between items-center bg-sky-200 dark:bg-sky-900 dark:text-white px-20 py-6">
        <span className="text-2xl font-semibold">Code Map Original</span>
        <div className="flex items-center gap-6">
          {theme === "dark" ? (
            <CgSun
              className="text-sky-950 dark:text-sky-100 cursor-pointer"
              size={30}
              onClick={() => setTheme("light")}
            />
          ) : (
            <CgMoon
              className="text-sky-950 dark:text-sky-100 cursor-pointer"
              size={30}
              onClick={() => setTheme("dark")}
            />
          )}
          <div
            className="relative cursor-pointer"
            onClick={() => setShowCart(!showCart)}
          >
            <CgShoppingBag
              className="text-sky-950 dark:text-sky-100"
              size={30}
            />
            <span className="absolute w-4 h-4 flex justify-center items-center rounded-full bg-sky-900 dark:bg-sky-100 text-white text-xs -top-1 -right-1">
              {cart.reduce((acc, curr) => acc + curr.qty, 0)}
            </span>
          </div>
        </div>
      </div>
      {showCart && (
        <div className="fixed top-20 right-20 w-96 bg-sky-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Cart Items</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span>{item.product.title}</span>
                    <span>
                      {item.qty} * ${item.product.price.toFixed(2)}
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <CgTrash />
                    </span>
                  </div>
                  {item.qty >= 10 && (
                    <span className="text-red-500 text-sm font-semibold">
                      (10+ items) 20% discount applied
                    </span>
                  )}
                </div>
              ))}
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                onClick={() => {
                  if (confirm("Are you sure you want to clear the cart?")) {
                    clearCart();
                  }
                }}
              >
                Clear Cart
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
