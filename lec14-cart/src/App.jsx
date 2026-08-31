import { useState } from "react";
import Header from "./components/Header";
import ProductsWrapper from "./components/ProductsWrapper";

import products from "./data/products";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, qty) => {
    let item = {
      product,
      qty,
    };

    setCart([...cart, item]);
    toast.success(product.title + " added to cart successfully");
  };

  return (
    <div>
      <ToastContainer />
      <Header cart={cart} />
      <ProductsWrapper products={products} addToCart={handleAddToCart} />
    </div>
  );
};

export default App;
