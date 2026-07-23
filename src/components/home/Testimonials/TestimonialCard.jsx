import { Star } from "lucide-react";

function TestimonialCard({ image, name, review, rating }) {
  return (
<div className="rounded-2xl border border-gray-100 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">      {/* Quote */}
      <div className="text-5xl font-bold leading-none text-[#7C5CFF]/20">
        ❝
      </div>

      {/* Review */}
      <p className="mt-4 min-h-[60px] md:min-h-[70px] text-[16px] leading-7 text-gray-600">
        "{review}"
      </p>

      {/* Profile */}
      <div className="mt-5 flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <h4 className="text-lg font-semibold text-gray-900">
            {name}
          </h4>

          <div className="mt-1 flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={16}
                className={
                  index < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;