import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import FAQItem from "./FAQItem";

const FAQs = [
  {
    question: "How can I place an order?",
    answer: "You can browse services, select your requirement, choose a verified professional and instantly book your service.",
  },
  {
    question: "How can I book a service?",
    answer: "You can browse services, select your requirement, choose a verified professional and instantly book your service.",
  },
  {
    question: "What is the return policy?",
    answer: "You can browse services, select your requirement, choose a verified professional and instantly book your service.",
  },
  {
    question: "How can I become a seller?",
    answer: "You can browse services, select your requirement, choose a verified professional and instantly book your service.",
  },
  {
    question: "Is payment secure on Omnivixo?",
    answer: "You can browse services, select your requirement, choose a verified professional and instantly book your service.",
  },
  {
    question: "How long does delivery take?",
    answer: "You can browse services, select your requirement, choose a verified professional and instantly book your service.",
  },
  {
    question: "Do you offer customer support?",
    answer: "You can browse services, select your requirement, choose a verified professional and instantly book your service.",
  },
  {
    question: "How can I track my order?",
    answer: "You can browse services, select your requirement, choose a verified professional and instantly book your service.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftFAQs = FAQs.slice(0, 4);
  const rightFAQs = FAQs.slice(4);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <a
            href="#"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
          >
            View All
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {leftFAQs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>
          <div className="space-y-4">
            {rightFAQs.map((faq, i) => (
              <FAQItem
                key={i + 4}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i + 4}
                onToggle={() => handleToggle(i + 4)}
              />
            ))}
          </div>
        </div>

        <div className="md:hidden space-y-4">
          {FAQs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
