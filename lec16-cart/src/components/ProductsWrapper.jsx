import Product from "./Product";

const ProductsWrapper = ({ products }) => {
  return (
    <div className="dark:bg-slate-950 dark:text-white min-h-screen">
      <div className="max-w-6xl mx-auto py-10 grid md:grid-cols-3 gap-6">
        {products.length > 0 &&
          products.map((el) => <Product product={el} key={el.id} />)}
      </div>
    </div>
  );
};

export default ProductsWrapper;
