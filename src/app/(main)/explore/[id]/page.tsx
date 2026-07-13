'use server'
import Image from "next/image";
import { Star, MapPin, Clock3 } from "lucide-react";
import { serverFetch } from "@/lib/core/server";
import { Product } from "@/types/product";
import { addToCart } from "@/lib/actions/addProdutctToCart";
import CartBtn from "@/components/shared/CartBtn";
import { getSession } from "@/lib/core/session";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductDetails = async ({ params }: PageProps) => {
  const { id } = await params;
  const product = await serverFetch<Product>(`/products/${id}`);
  if (!product) return null;

  const user=await getSession();


  return (
    <section className="min-h-screen bg-[#FAF9F5]">
      {/* Eyebrow / breadcrumb strip */}
      <div className="border-b border-[#E7E3D8]">
        <div className="container mx-auto flex items-center gap-2 px-4 py-4 text-[11px] uppercase tracking-[0.18em] text-[#8A8578] sm:px-6">
          <span>Catalogue</span>
          <span className="text-[#C9C2AD]">/</span>
          <span>{product.category}</span>
          <span className="text-[#C9C2AD]">/</span>
          <span className="text-[#3A372E]">{product.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          {/* Image */}
          <div>
            <div className="relative aspect-square w-full max-w-[340px] overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(30,28,22,0.10)]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {product.featured && (
              <div className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#9C7A3C]">
                <span className="h-px w-6 bg-[#9C7A3C]" />
                Featured selection
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#9C7A3C]">
              {product.category}
            </span>

            <h1 className="mt-3 font-serif text-[2.75rem] leading-[1.05] tracking-tight text-[#1E1C16] sm:text-5xl">
              {product.title}
            </h1>

            <p className="mt-5 max-w-md text-[15px] leading-7 text-[#5D594C]">
              {product.shortDescription}
            </p>

            {/* Meta row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 border-y border-[#E7E3D8] py-5 text-sm text-[#4A4738]">
              <div className="flex items-center gap-1.5">
                <Star className="fill-[#9C7A3C] text-[#9C7A3C]" size={15} />
                <span className="font-medium">{product.rating}</span>
                <span className="text-[#A6A192]">rating</span>
              </div>
              <span className="h-4 w-px bg-[#E7E3D8]" />
              <div className="flex items-center gap-1.5">
                <MapPin size={15} className="text-[#A6A192]" />
                <span>{product.location}</span>
              </div>
              <span className="h-4 w-px bg-[#E7E3D8]" />
              <div className="flex items-center gap-1.5">
                <Clock3 size={15} className="text-[#A6A192]" />
                <span>{product.duration}</span>
              </div>
            </div>

            {/* Price placard */}
            <div className="mt-8 border border-[#E7E3D8] bg-white p-6">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-4xl text-[#1E1C16]">
                  ${product.price}
                </span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#A6A192]">
                  Available {product.availableDate}
                </span>
              </div>

              <CartBtn user={user} product={product}/>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-20 border-t border-[#E7E3D8] pt-14">
          <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
            <h2 className="font-serif text-2xl text-[#1E1C16]">
              Description
            </h2>
            <p className="max-w-2xl text-[15px] leading-8 text-[#4A4738]">
              {product.description}
            </p>
          </div>
        </div>

        {/* Specs */}
        <div className="mt-14 border-t border-[#E7E3D8] pt-14">
          <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
            <h2 className="font-serif text-2xl text-[#1E1C16]">
              Details
            </h2>

            <dl className="max-w-2xl divide-y divide-[#E7E3D8] border-y border-[#E7E3D8]">
              {[
                ["Category", product.category],
                ["Shipping from", product.location],
                ["Delivery time", product.duration],
                ["Available date", product.availableDate],
                ["Rating", `${product.rating} / 5`],
                ["Featured", product.featured ? "Yes" : "No"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-3.5 text-sm"
                >
                  <dt className="text-[#8A8578]">{label}</dt>
                  <dd className="font-medium text-[#1E1C16]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;