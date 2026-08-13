import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I book a service?",
    answer:
      "Select the service you need, pick a convenient time slot and confirm your booking in just a few clicks. You'll receive an instant confirmation.",
  },
  {
    question: "How do I know the price?",
    answer:
      "Prices are shown upfront before you book based on the service you choose. There are no hidden charges — you'll always know the cost beforehand.",
  },
  {
    question: "Are the professionals verified?",
    answer:
      "Yes. Every professional on Omnivixo is background-verified and trained before they start taking bookings on the platform.",
  },
  {
    question: "What if I'm not satisfied?",
    answer:
      "We stand behind every service with a satisfaction guarantee. If something isn't right, we'll make it right or refund you.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex h-full flex-col p-4 sm:p-6">
      <h2 className="text-xl font-extrabold text-[#0B1535]">
        Frequently Asked Questions
      </h2>

      <div className="mt-6 space-y-2.5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
              >
                <span className="text-[13px] font-semibold leading-snug text-[#0B1535]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? "rotate-180 text-[#7C3AED]"
                      : "text-gray-400"
                  }`}
                  aria-hidden="true"
                />
              </button>

              {isOpen && (
                <div className="border-t border-gray-100 px-4 pb-3 pt-2.5">
                  <p className="text-xs leading-relaxed text-gray-500">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="mt-6 w-full rounded-lg border-2 border-[#6C47FF] py-2.5 text-sm font-semibold text-[#6C47FF] transition duration-200 hover:bg-[#6C47FF] hover:text-white"
      >
        View All FAQs
      </button>
    </div>
  );
}

export default FAQ;
