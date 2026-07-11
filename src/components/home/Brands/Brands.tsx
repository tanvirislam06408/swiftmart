"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const brands = [
  {
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    name: "Puma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_logo.svg",
  },
  {
    name: "Zara",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
  },
  {
    name: "H&M",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
  },
  {
    name: "Levi's",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Levi%27s_logo.svg",
  },
  {
    name: "Gucci",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/1960s_Gucci_Logo.svg",
  },
  {
    name: "Louis Vuitton",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/46/Louis_Vuitton_logo_and_wordmark.svg",
  },
];

const Brands = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Trusted Brands
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Shop Your Favorite Brands
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover premium fashion from the world's most trusted brands.
          </p>
        </div>

        <Marquee
          speed={50}
          pauseOnHover
          gradient={false}
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="mx-5 flex h-32 w-52 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={140}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Brands;