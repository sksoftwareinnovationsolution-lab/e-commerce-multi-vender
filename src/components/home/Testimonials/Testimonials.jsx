import TestimonialCard from "./TestimonialCard";

import customer1 from "../../../assets/images/testimonials/customer-1.png";
import customer2 from "../../../assets/images/testimonials/customer-2.png";
import customer3 from "../../../assets/images/testimonials/customer-3.png";

const testimonials = [
  {
    image: customer1,
    name: "Ananya Singh",
    review:
      "Amazing platform! I found everything I needed at best prices. Delivery was super fast.",
    rating: 5,
  },
  {
    image: customer2,
    name: "Rohit Verma",
    review:
      "Booked AC service in minutes. Professional and on-time. Highly recommended.",
    rating: 5,
  },
  {
    image: customer3,
    name: "Priya Mehta",
    review:
      "Great experience with Omnivixo. Trusted platform for everyone.",
    rating: 4,
  },
];

function Testimonials() {
  return (
    <section className="bg-[#F8FAFF] py-16">
      <div className="mx-auto max-w-7xl px-4">

        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          What Our Customers Say
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              review={testimonial.review}
              rating={testimonial.rating}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;