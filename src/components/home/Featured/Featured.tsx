import ProductCard from "@/components/shared/ProductCard";
import { serverFetch } from "@/lib/core/server";
import { Product } from "@/types/product";


const Featured = async () => {
  const productData = await serverFetch<Product[]>("/products-featured");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 ">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Featured Tours
          </span>

          <h2 className="mt-2 text-4xl font-bold">
            Explore Our Featured Destinations
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {productData.map((item) => (
            <ProductCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;