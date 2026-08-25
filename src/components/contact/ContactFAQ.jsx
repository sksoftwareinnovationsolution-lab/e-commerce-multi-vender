import { useState } from "react";
import { ChevronRight, Minus, Plus } from "lucide-react";

const faqColumns = [
  [
    {
      question: "How can I track my order?",
      answer:
        "Go to \u201CMy Orders\u201D in your account, select the order you want to follow, and click \u201CTrack Order\u201D to see real-time delivery status.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, net banking, UPI, popular digital wallets, and cash on delivery.",
    },
    {
      question: "How do I return or exchange a product?",
      answer:
        "You can request a return or exchange within 7 days of delivery from the \u201CMy Orders\u201D section. We arrange a free pickup for eligible items.",
    },
    {
      question: "How can I become a seller on Omnivixo?",
      answer:
        "Click \u201CBecome a Seller\u201D at the bottom of the page, fill in the registration form, and our team will verify your details within 48 hours.",
    },
  ],
  [
    {
      question: "How long does delivery take?",
      answer:
        "Most orders arrive within 3\u20137 business days, depending on your location and the seller's shipping policy.",
    },
    {
      question: "Do you offer cash on delivery?",
      answer:
        "Yes, cash on delivery is available on most serviceable pin codes for eligible orders.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us through the contact form above, email support@omnivixo.com, or call our 24/7 helpline.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Absolutely. We use industry-standard SSL encryption and never share your personal data without your consent.",
    },
  ],
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`w-full rounded-xl border bg-white transition-colors ${
        isOpen
          ? "border-purple-300"
          : "border-gray-200/90 hover:border-purple-200"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left sm:px-5"
      >
        <span className="min-w-0 text-[0.85rem] font-semibold leading-snug text-[#1e2a52] sm:text-[0.88rem]">
          {item.question}
        </span>
        <span className="flex h-6 w-6 shrink-0 items-center justify-center text-purple-600">
          {isOpen ? (
            <Minus size={17} strokeWidth={2.4} />
          ) : (
            <Plus size={17} strokeWidth={2.4} />
          )}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-t border-gray-100 px-4 pb-3.5 pt-2.5 text-[0.8rem] leading-relaxed text-gray-500 sm:px-5">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (globalIndex) => {
    setOpenIndex((prev) => (prev === globalIndex ? null : globalIndex));
  };

  return (
    <section
      aria-label="Frequently asked questions"
      className="mt-6 w-full overflow-hidden rounded-[1.5rem] border border-indigo-100/70 bg-gradient-to-b from-[#fbfaff] to-[#f6f5fe] shadow-[0_10px_30px_-18px_rgba(79,70,229,0.2)] lg:mt-8"
    >
      <div className="px-5 py-6 sm:px-7 sm:py-7 lg:px-8">
        {/* ===== Header ===== */}
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <h2 className="text-[1.35rem] font-extrabold leading-snug tracking-tight text-[#1e2a52] sm:text-[1.55rem]">
            Frequently Asked Questions
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-1 whitespace-nowrap text-[0.85rem] font-semibold text-purple-600 transition-colors hover:text-purple-700"
          >
            View All FAQs
            <ChevronRight size={15} strokeWidth={2.4} aria-hidden="true" />
          </a>
        </div>

        {/* ===== FAQ Grid ===== */}
        <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-x-5">
          {faqColumns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-3">
              {column.map((item, rowIdx) => {
                const globalIndex = colIdx * faqColumns[0].length + rowIdx;
                return (
                  <FaqItem
                    key={item.question}
                    item={item}
                    isOpen={openIndex === globalIndex}
                    onToggle={() => handleToggle(globalIndex)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactFAQ;
