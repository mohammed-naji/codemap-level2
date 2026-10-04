import { notFound } from "next/dist/client/components/not-found";
import Image from "next/image";
import Link from "next/link";

export default async function ProductSingle({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = await fetch(`https://dummyjson.com/products/${id}`);
  const productData = await product.json();

  if (!productData || productData.message) {
    notFound();
  }

  return (
    <div className="min-h-screen w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold">Product Single Page</h1>
      {JSON.stringify(productData)}
    </div>
  );
}
