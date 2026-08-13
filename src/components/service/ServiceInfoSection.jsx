import HowItWorks from "./HowItWorks";
import CustomerReviews from "./CustomerReviews";
import FAQ from "./FAQ";

function ServiceInfoSection() {
  return (
    <section className="mb-8" aria-label="How it works, Customer Reviews and FAQ">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.5fr_1.1fr]">
        <div className="border-b border-gray-100 md:border-b-0">
          <HowItWorks />
        </div>
        <div className="border-b border-gray-100 md:border-b-0 md:border-l md:border-gray-100">
          <CustomerReviews />
        </div>
        <div className="md:border-l md:border-gray-100">
          <FAQ />
        </div>
      </div>
    </section>
  );
}

export default ServiceInfoSection;
