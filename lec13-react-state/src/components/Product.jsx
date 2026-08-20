import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Product = ({ product }) => {
  // let count = 8;
  const [count, setCount] = useState(1);

  // console.log(counter[1]);

  function decrementCounter() {
    if (count == 1) return;
    setCount(count - 1);
  }

  function incrementCounter() {
    setCount(count + 1);
  }

  return (
    <div className="shadow-lg text-center">
      <img src={product.thumbnail} alt="" />
      <div className="p-4">
        <h2 className="font-semibold text-xl">{product.title}</h2>
        <p className="text-gray-500 mt-4">
          {product.description.substr(0, 50)}...
        </p>

        <div className="grid gap-6 grid-cols-2">
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
            <button className="btn">
              <AiOutlineShoppingCart />
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
