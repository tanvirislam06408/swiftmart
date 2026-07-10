import Image from "next/image";
import { Star, MapPin, Truck } from "lucide-react";
import { serverFetch } from "@/lib/core/server";
import { Product } from "@/types/product";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductDetails = async ({ params }: PageProps) => {
  const { id } = await params;

  const product = await serverFetch<Product>(`/products/${id}`);
  console.log(product);
  

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Product Image */}
        <div className="relative h-[600px] overflow-hidden rounded-2xl border bg-gray-100">
          <Image
            src={product?.image}
            alt={product.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">
          <span className="mb-3 w-fit rounded-full bg-black px-4 py-1 text-sm text-white">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold text-gray-900">
            {product.title}
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            {product.shortDescription}
          </p>

          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-1">
              <Star className="fill-yellow-400 text-yellow-400" size={18} />
              <span className="font-medium">{product.rating}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={18} />
              {product.location}
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <Truck size={18} />
              {product.duration}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-4xl font-bold text-black">
              ${product.price}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Available from {product.availableDate}
            </p>
          </div>

          <div className="mt-8">
            <button className="rounded-xl bg-black px-8 py-3 text-white transition hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-20 rounded-2xl border bg-white p-8">
        <h2 className="mb-4 text-2xl font-bold">
          Product Description
        </h2>

        <p className="leading-8 text-gray-600">
          {product.description}
        </p>
      </div>

      {/* Product Information */}
      <div className="mt-8 rounded-2xl border bg-white p-8">
        <h2 className="mb-6 text-2xl font-bold">
          Product Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-gray-500">Category</p>
            <p className="font-semibold">{product.category}</p>
          </div>

          <div>
            <p className="text-gray-500">Shipping From</p>
            <p className="font-semibold">{product.location}</p>
          </div>

          <div>
            <p className="text-gray-500">Delivery Time</p>
            <p className="font-semibold">{product.duration}</p>
          </div>

          <div>
            <p className="text-gray-500">Available Date</p>
            <p className="font-semibold">{product.availableDate}</p>
          </div>

          <div>
            <p className="text-gray-500">Rating</p>
            <p className="font-semibold">{product.rating} / 5</p>
          </div>

          <div>
            <p className="text-gray-500">Featured</p>
            <p className="font-semibold">
              {product.featured ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;