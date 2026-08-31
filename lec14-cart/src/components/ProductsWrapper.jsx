import Product from "./Product";

const ProductsWrapper = ({ products, addToCart }) => {
  return (
    <div>
      <div className="max-w-6xl mx-auto my-10 grid md:grid-cols-3 gap-6">
        {products.length > 0 &&
          products.map((el) => (
            <Product addToCart={addToCart} product={el} key={el.id} />
          ))}
      </div>
    </div>
  );
};

export default ProductsWrapper;
