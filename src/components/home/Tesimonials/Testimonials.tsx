import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "SwiftMart exceeded my expectations. The quality of the products is amazing, delivery was incredibly fast, and the customer support was very responsive. I'll definitely shop here again!",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Fashion Enthusiast",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "I ordered sneakers and a jacket, and both arrived exactly as shown. The sizing was perfect and the packaging was premium. Highly recommended!",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Regular Customer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    review:
      "Great shopping experience from start to finish. The website is easy to use, checkout is smooth, and the return process is hassle-free.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Testimonials
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Thousands of happy customers trust SwiftMart for quality fashion,
            fast delivery, and exceptional service.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Rating */}
              <div className="mb-5 flex">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mb-8 leading-7 text-gray-600">
                "{item.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;