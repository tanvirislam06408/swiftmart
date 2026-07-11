'use client'
import CountUp from "react-countup";
import {
  Users,
  ShoppingBag,
  BadgeCheck,
  Smile,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 20000,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    icon: ShoppingBag,
    value: 5000,
    suffix: "+",
    label: "Products Available",
  },
  {
    icon: BadgeCheck,
    value: 150,
    suffix: "+",
    label: "Trusted Brands",
  },
  {
    icon: Smile,
    value: 99,
    suffix: "%",
    label: "Customer Satisfaction",
  },
];

const Statistics = () => {
  return (
    <section className="bg-emerald-600 py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 text-center text-white">
          <span className="text-sm font-semibold uppercase tracking-widest">
            Our Impact
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Trusted by Thousands of Customers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-emerald-100">
            SwiftMart is committed to providing premium fashion products,
            fast delivery, and an exceptional shopping experience.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Icon size={30} />
                </div>

                <h3 className="text-4xl font-bold text-gray-900">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                  />
                  {stat.suffix}
                </h3>

                <p className="mt-2 text-gray-600">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;