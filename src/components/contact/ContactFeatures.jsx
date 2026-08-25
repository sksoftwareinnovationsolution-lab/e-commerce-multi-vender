import featureIcon1 from "../../assets/images/contact/contact-feature-1.png";
import featureIcon2 from "../../assets/images/contact/contact-feature-2.png";
import featureIcon3 from "../../assets/images/contact/contact-feature-3.png";
import featureIcon4 from "../../assets/images/contact/contact-feature-4.png";

const features = [
  {
    icon: featureIcon1,
    title: "24/7 Support",
    description: "We are here round the clock for your help",
  },
  {
    icon: featureIcon2,
    title: "Secure & Safe",
    description: "Your information is safe with us",
  },
  {
    icon: featureIcon3,
    title: "Dedicated Team",
    description: "A professional team to assist you",
  },
  {
    icon: featureIcon4,
    title: "Satisfaction Guaranteed",
    description: "We are committed to your satisfaction",
  },
];

function ContactFeatures() {
  return (
    <section
      aria-label="Why contact us"
      className="mt-6 w-full overflow-hidden rounded-[1.5rem] border border-indigo-100/70 bg-gradient-to-b from-[#fbfaff] to-[#f6f5fe] shadow-[0_10px_30px_-18px_rgba(79,70,229,0.2)] lg:mt-8"
    >
      <div className="grid grid-cols-1 gap-y-5 px-5 py-6 sm:grid-cols-2 sm:gap-y-6 sm:px-7 sm:py-7 lg:grid-cols-4 lg:gap-x-0 lg:px-8 lg:py-6">
        {features.map(({ icon, title, description }, index) => (
          <div
            key={title}
            className={`flex min-w-0 items-center gap-3.5 ${
              index > 0 ? "lg:border-l lg:border-gray-200/70" : ""
            } ${index > 0 ? "lg:pl-6" : ""} ${
              index % 2 === 1 ? "sm:pl-6" : ""
            }`}
          >
            <img
              src={icon}
              alt=""
              aria-hidden="true"
              className="h-11 w-11 shrink-0 object-contain"
              loading="lazy"
            />
            <div className="min-w-0">
              <h3 className="text-[0.92rem] font-bold leading-snug text-[#1e2a52] sm:text-[0.95rem]">
                {title}
              </h3>
              <p className="mt-0.5 text-[0.78rem] leading-relaxed text-gray-500">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactFeatures;
