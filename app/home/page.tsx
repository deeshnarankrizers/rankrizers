"use server"

import ProductCard from "@/components/ProductCard";
import { fetchProducts } from "@/services/apiProducts";
import type { JSX } from "react";

export default async function HomePage(): Promise<JSX.Element> {
  // const cookieStore =await cookies()
  // const token = cookieStore.get('token')?.value
  // if (!token)
  // {
  //     redirect('/login')
  // }
    const products = await fetchProducts();
  return (
    <div className="flex flex-col mt-16">
      <div className="flex flex-col px-4 sm:px-6 md:px-8 py-4 sm:py-10 min-w-full h-auto justify-between items-center space-y-4 bg-[#dce7ef]">
        <h1 className="font-bold mt-4 text-center sm:text-left text-[32px]">
          FIND PROVIDER
        </h1>
       
      </div>
      <div className="flex flex-col min-w-full h-auto px-4 md:px-6 lg:px-8 justify-between items-center space-y-4 mt-10">
        <div className="container m-auto max-w-5xl flex gap-5 flex-col mb-10">
          {products?.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.uuid} product={product} />
            ))
          ) : (
            <p className="text-gray-500 text-center">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
