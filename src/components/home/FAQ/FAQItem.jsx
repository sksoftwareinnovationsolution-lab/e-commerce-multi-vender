import { useId } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function FAQItem({ question, answer, isOpen, onToggle }) {
  const id = useId();
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <div
      className={`rounded-xl border transition-all duration-200 ${
        isOpen
          ? "border-purple-600 shadow-md"
          : "border-gray-200 hover:shadow-md"
      }`}
    >
      <button
        id={buttonId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-4 px-[22px] py-[18px] text-left text-gray-900 font-medium transition-colors duration-200 hover:text-purple-600 cursor-pointer"
      >
        <span>{question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-[250ms] ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-[250ms] ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-[22px] pb-[18px] text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default FAQItem;
