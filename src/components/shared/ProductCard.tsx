import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";



interface ProductCardProps {
  item: Product;
}

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">
          {item.category}
        </span>

        {/* Featured Badge */}
        {item.featured && (
          <span className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <div>
          <h3 className="line-clamp-1 text-lg font-bold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm text-gray-600">
            {item.shortDescription}
          </p>
        </div>

        {/* Product Meta */}
        <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-500">
          <span>⭐ {item.rating}</span>
          <span>📍 {item.location}</span>
          <span>🚚 {item.duration}</span>
          <span>📦 {item.availableDate}</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-xs text-gray-500">Price</p>

            <h4 className="text-2xl font-bold text-gray-900">
              ${item.price}
            </h4>
          </div>

          <Link
            href={`/products/${item._id}`}
            className="rounded-lg bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}