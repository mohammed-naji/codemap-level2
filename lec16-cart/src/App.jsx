// import { useContext } from "react";
import Header from "./components/Header";
import ProductsWrapper from "./components/ProductsWrapper";
import CartProvider from "./context/CartProvider";
import ThemeProvider from "./context/ThemeProvider";

import products from "./data/products";
import { ToastContainer } from "react-toastify";
// import ThemeContext from "./context/ThemeContext";

const App = () => {
  // const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <CartProvider>
        <ToastContainer theme={"dark"} style={{ marginTop: "60px" }} />
        <Header />
        <ProductsWrapper products={products} />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
