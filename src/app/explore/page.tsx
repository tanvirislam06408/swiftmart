import ProductCard from "@/components/shared/ProductCard";
import { serverFetch } from "@/lib/core/server";
import { Product } from "@/types/product";
import { ProductsResponse } from "@/types/ProductsResponse";
import { Search } from "lucide-react";

const ExplorePage = async () => {
  const productData = await serverFetch<ProductsResponse>("/products");

  

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Explore Fashion
        </h1>
        <p className="mt-2 text-gray-500">
          Discover the latest fashion collections from premium brands.
        </p>
      </div>

      {/* Search + Filter + Sort */}
      <div className="mb-8 flex flex-col gap-4 rounded-2xl border bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 outline-none transition focus:border-black"
          />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          {/* Category */}
          <select className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black">
            <option>All Categories</option>
            <option>Shirts</option>
            <option>Jackets</option>
            <option>Shoes</option>
            <option>Bags</option>
            <option>Accessories</option>
            <option>Watches</option>
          </select>

          {/* Sort */}
          <select className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black">
            <option>Sort By</option>
            <option>Newest</option>
            <option>Price: Low → High</option>
            <option>Price: High → Low</option>
            <option>Highest Rated</option>
            <option>A - Z</option>
          </select>
        </div>
      </div>

      {/* Result Count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-gray-500">
           Showing{" "}
           <span className="font-semibold text-black">
             {productData.products.length}
           </span>{" "}
           products
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productData.products.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>

      {/* Pagination UI */}
      <div className="mt-12 flex items-center justify-center gap-2">
        <button className="rounded-lg border px-4 py-2 hover:bg-gray-100">
          Previous
        </button>

        <button className="rounded-lg bg-black px-4 py-2 text-white">
          1
        </button>

        <button className="rounded-lg border px-4 py-2 hover:bg-gray-100">
          2
        </button>

        <button className="rounded-lg border px-4 py-2 hover:bg-gray-100">
          3
        </button>

        <button className="rounded-lg border px-4 py-2 hover:bg-gray-100">
          Next
        </button>
      </div>
    </div>
  );
};

export default ExplorePage;