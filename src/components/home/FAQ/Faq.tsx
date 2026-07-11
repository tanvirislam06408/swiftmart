"use client";


const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Most orders are delivered within 2–5 business days. Delivery time may vary depending on your location and the selected shipping method.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Yes. You can request a return or exchange within 7 days of receiving your order, provided the product is unused, in its original packaging, and meets our return policy.",
  },
  {
    question: "How can I track my order?",
    answer:
      "After your order is shipped, you'll receive a tracking ID via email. You can also check your order status anytime from your account dashboard.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We currently support Cash on Delivery (COD), Visa, MasterCard, and popular mobile payment options where available.",
  },
];

export default function Faq() {

  return (
   <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            FAQ
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Find answers to the most common questions about shopping,
            payments, shipping, and returns.
          </p>
        </div>

        <div className="divide-y divide-gray-200 rounded-2xl bg-white shadow-sm">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="py-8 px-6 md:grid md:grid-cols-12 md:gap-10 md:px-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 md:col-span-5">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-600 leading-7 md:col-span-7 md:mt-0">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}