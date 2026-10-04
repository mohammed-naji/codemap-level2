import Image from "next/image";
import Link from "next/link";

export default async function Products() {
  const products = await fetch("https://dummyjson.com/products");
  const productsData = await products.json();

  return (
    <div className="min-h-screen w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {productsData.products.map((product: any) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="border p-4 rounded shadow"
          >
            {/* <Image
              src={"/moh.jpg"}
              alt={product.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded"
            /> */}
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p>{product.description}</p>
            <p className="font-bold">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
