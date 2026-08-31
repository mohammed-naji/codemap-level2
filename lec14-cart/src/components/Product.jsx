import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import MainButton from "./MainButton";

const Product = ({ product, addToCart }) => {
  const [count, setCount] = useState(1);
  const [showModal, setShowModal] = useState(false);

  function decrementCounter() {
    if (count == 1) return;
    setCount(count - 1);
  }

  function incrementCounter() {
    setCount(count + 1);
  }

  function handleAddToCart() {
    addToCart(product, count);
    setCount(1);
  }

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-slate-800/60 backdrop-blur-[3px] flex justify-center items-center ${showModal ? "" : "hidden"}`}
        onClick={() => setShowModal(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-1/2 bg-white p-6 rounded shadow"
        >
          <p>{product.description}</p>
        </div>
      </div>
      <div className="shadow-lg text-center">
        <img src={product.thumbnail} alt="" />
        <div className="p-4">
          <h2 className="font-semibold text-xl">{product.title}</h2>
          <p className="text-gray-500 mt-4">
            {product.description.substr(0, 50)}...
            <span
              className="mx-2 text-sky-500 hover:text-sky-600 cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              more
            </span>
          </p>

          <div className="grid gap-6 grid-cols-2 mt-4">
            <div className="flex gap-1">
              <button
                onClick={decrementCounter}
                className="bg-slate-200 w-10 rounded cursor-pointer duration-200 hover:bg-slate-300  h-10"
              >
                -
              </button>
              <span className="w-1/2 h-10 inline-flex border items-center justify-center border-slate-200 rounded">
                {count}
              </span>
              <button
                onClick={incrementCounter}
                className="bg-slate-200 w-10 rounded cursor-pointer duration-200 hover:bg-slate-300  h-10"
              >
                +
              </button>
            </div>
            <div>
              <button className="btn" onClick={handleAddToCart}>
                <AiOutlineShoppingCart />
                Add To Cart
              </button>
              {/* <MainButton>
                <AiOutlineShoppingCart />
                Add To Cart
              </MainButton> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
