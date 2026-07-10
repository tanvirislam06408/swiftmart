import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Clock3 } from "lucide-react";

interface ProductCardProps {
  item: Product;
}

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="group overflow-hidden border border-[#E7E3D8] bg-white transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(30,28,22,0.10)]">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-[#F2EFE6]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-3 top-3 bg-white/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[#1E1C16]">
          {item.category}
        </span>

        {/* Featured Badge */}
        {item.featured && (
          <span className="absolute right-3 top-3 bg-[#9C7A3C] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="line-clamp-1 font-serif text-lg text-[#1E1C16]">
          {item.title}
        </h3>

        <p className="mt-1.5 line-clamp-2 text-[13px] leading-5 text-[#5D594C]">
          {item.shortDescription}
        </p>

        {/* Product Meta */}
        <div className="mt-4 flex items-center gap-4 text-[12px] text-[#8A8578]">
          <span className="flex items-center gap-1">
            <Star size={12} className="fill-[#9C7A3C] text-[#9C7A3C]" />
            {item.rating}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} />
            {item.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock3 size={12} />
            {item.duration}
          </span>
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-[#E7E3D8] pt-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.14em] text-[#8A8578]">
              Price
            </p>
            <p className="font-serif text-xl text-[#1E1C16]">
              ${item.price}
            </p>
          </div>

          <Link
            href={`/explore/${item._id}`}
            className="bg-[#1E1C16] px-4 py-2 text-[11px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#9C7A3C]"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
}