import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Men",
    description: "Premium clothing and accessories for men.",
    href: "/categories/Men",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
  },
  {
    title: "Women",
    description: "Trendy outfits for every occasion.",
    href: "/categories/Women",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
  },
  {
    title: "Shoes",
    description: "Sneakers, boots, sandals and more.",
    href: "/categories/shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
  },
  {
    title: "Bags",
    description: "Travel bags, backpacks & handbags.",
    href: "/categories/bags",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
  },
  {
    title: "Accessories",
    description: "Complete your look with stylish accessories.",
    href: "/categories/accessories",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80",
  },
  {
    title: "Watches",
    description: "Luxury and everyday watches.",
    href: "/categories/watches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  },
];

const Categories = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="section-badge">
            Categories
          </span>

          <h2 className="section-heading mt-3">
            Shop by Category
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group card-base card-hover overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {category.description}
                </p>

                <span className="mt-5 inline-flex items-center font-semibold text-[#14B8A6] transition-all duration-300 group-hover:translate-x-1">
                  Explore Collection &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;