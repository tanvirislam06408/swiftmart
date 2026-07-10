import Image from "next/image";
import Link from "next/link";

export interface TourPackage {
  _id: string;
  title: string;
  shortDescription: string;
  description: string;
  price: number;
  rating: number;
  location: string;
  duration: string;
  category: string;
  availableDate: string;
  featured: boolean;
  image: string;
}

interface ProductCardProps {
  item: TourPackage;
}

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
          {item.category}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="line-clamp-1 text-xl font-bold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm text-gray-600">
            {item.shortDescription}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
          <span>📍 {item.location}</span>
          <span>⭐ {item.rating}</span>
          <span>🕒 {item.duration}</span>
          <span>📅 {item.availableDate}</span>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-xs text-gray-500">Starting From</p>

            <h4 className="text-2xl font-bold text-emerald-600">
              ${item.price}
            </h4>
          </div>

          <Link
            href={`/packages/${item._id}`}
            className="rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}