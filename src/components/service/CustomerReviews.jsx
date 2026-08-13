import { Star, Quote, ChevronRight } from "lucide-react";
import customer1 from "../../assets/images/testimonials/customer-1.png";
import customer2 from "../../assets/images/testimonials/customer-2.png";
import customer3 from "../../assets/images/testimonials/customer-3.png";

const reviews = [
  {
    image: customer1,
    name: "Rohit Sharma",
    comment:
      "Booked AC service and the technician was on time and did a great job. Very professional!",
    rating: 5,
  },
  {
    image: customer2,
    name: "Priya Verma",
    comment:
      "Great experience with home cleaning service. My house has never been this clean!",
    rating: 5,
  },
  {
    image: customer3,
    name: "Aman Singh",
    comment:
      "Plumber came within 30 mins and fixed the issue quickly. Highly recommended!",
    rating: 5,
  },
];

function ReviewCard({ review }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <Quote
        className="h-5 w-5 shrink-0 text-[#7C3AED]/30"
        fill="currentColor"
        aria-hidden="true"
      />

      <p className="mt-3 flex-1 line-clamp-3 text-[11px] leading-relaxed text-gray-600">
        "{review.comment}"
      </p>

      <div className="mt-auto flex items-center gap-2 pt-4">
        <img
          src={review.image}
          alt={review.name}
          loading="lazy"
          className="h-8 w-8 shrink-0 rounded-full object-cover"
        />
        <div className="min-w-0">
          <h4 className="truncate text-[11px] font-bold leading-tight text-[#0B1535]">
            {review.name}
          </h4>
          <div className="mt-0.5 flex items-center gap-px">
            {[...Array(review.rating)].map((_, index) => (
              <Star
                key={index}
                className="h-3 w-3 fill-amber-400 text-amber-400"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function CustomerReviews() {
  return (
    <div className="flex h-full flex-col p-4 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-extrabold leading-tight text-[#0B1535]">
          What Our Customers Say
        </h2>
        <button
          type="button"
          className="inline-flex shrink-0 items-center gap-0.5 text-xs font-semibold text-[#7C3AED] transition hover:text-[#EC4899]"
        >
          View All Reviews
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-6 grid flex-1 grid-cols-1 auto-rows-fr items-stretch gap-2 sm:gap-3 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>
    </div>
  );
}

export default CustomerReviews;
