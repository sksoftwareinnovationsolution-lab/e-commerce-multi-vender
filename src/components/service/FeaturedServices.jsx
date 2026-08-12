import { Star } from "lucide-react";
import sofaCarpetCleaning from "../../assets/images/service/sofa-carpet-cleaning.png";
import acRepairServices from "../../assets/images/service/ac-repair-services.png";
import plumbingServicesImg from "../../assets/images/service/plumbing-services.png";
import electricalServicesImg from "../../assets/images/service/electrical-services.png";
import homePaintingImg from "../../assets/images/service/home-painting.png";
import pestControlImg from "../../assets/images/service/pest-control.png";

const services = [
  {
    title: "Sofa & Carpet Cleaning",
    rating: 4.8,
    reviews: 153,
    price: 499,
    image: sofaCarpetCleaning,
  },
  {
    title: "AC Repair & Service",
    rating: 4.7,
    reviews: 342,
    price: 399,
    image: acRepairServices,
  },
  {
    title: "Plumbing Services",
    rating: 4.8,
    reviews: 362,
    price: 299,
    image: plumbingServicesImg,
  },
  {
    title: "Electrical Services",
    rating: 4.8,
    reviews: 353,
    price: 299,
    image: electricalServicesImg,
  },
  {
    title: "Home Painting",
    rating: 4.6,
    reviews: 421,
    price: 799,
    image: homePaintingImg,
  },
  {
    title: "Pest Control",
    rating: 4.8,
    reviews: 238,
    price: 599,
    image: pestControlImg,
  },
];

function ServiceCard({ service }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-purple-100 hover:shadow-md hover:shadow-purple-200/40">
      {/* Image */}
      <div className="h-36 w-full shrink-0 overflow-hidden bg-gray-100 sm:h-32 xl:h-[140px]">
        <img
          src={service.image}
          alt={`${service.title} service`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-3">
        <h3 className="line-clamp-2 text-sm font-bold leading-snug text-[#0B1535]">
          {service.title}
        </h3>

        {/* Rating & reviews */}
        <div className="mt-1.5 flex items-center gap-1">
          <Star
            className="h-3.5 w-3.5 shrink-0 fill-amber-400 text-amber-400"
            aria-hidden="true"
          />
          <span className="text-sm font-bold text-[#0B1535]">
            {service.rating.toFixed(1)}
          </span>
          <span className="min-w-0 truncate text-xs font-medium text-gray-400">
            ({service.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-2 mb-3">
          <p className="text-[11px] font-medium text-gray-400">Starting at</p>
          <p className="text-base font-extrabold leading-tight text-[#0B1535]">
            ₹{service.price.toLocaleString("en-IN")}
          </p>
        </div>

        {/* Book Now button */}
        <button
          type="button"
          className="mt-auto w-full rounded-lg bg-[#6C47FF] py-2 text-center text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[#5C39EF] active:translate-y-px"
        >
          Book Now
        </button>
      </div>
    </article>
  );
}

function FeaturedServices() {
  return (
    <section className="mb-8" aria-label="Featured Services">
      {/* Section Header */}
      <h2 className="text-2xl font-extrabold text-[#0B1535] sm:text-3xl">
        Featured Services
      </h2>
      <p className="mt-1.5 text-sm text-gray-500 sm:text-base">
        Book trusted professionals for your everyday needs.
      </p>

      {/* Services Grid */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedServices;
