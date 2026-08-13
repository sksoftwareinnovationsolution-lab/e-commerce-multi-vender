const steps = [
  {
    title: "Choose Your Service",
    description:
      "Browse through our service categories and pick what you need.",
  },
  {
    title: "Book a Time Slot",
    description:
      "Select a convenient date and time that fits your schedule.",
  },
  {
    title: "Verified Expert Arrives",
    description:
      "A background-verified professional reaches your doorstep on time.",
  },
  {
    title: "Pay After Service",
    description:
      "Pay securely once the job is done. No hidden charges, ever.",
  },
];

function HowItWorks() {
  return (
    <div className="flex h-full flex-col p-4 sm:p-6">
      <h2 className="text-xl font-extrabold text-[#0B1535]">How It Works</h2>

      <ol className="mt-6 flex-1 space-y-7">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <li key={step.title} className="relative flex gap-4">
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="absolute left-6 top-[52px] h-[calc(100%-40px)] w-px bg-purple-100"
                />
              )}

              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#6C47FF] text-base font-bold text-white shadow-sm shadow-purple-300/40">
                {index + 1}
              </span>

              <div className="min-w-0 pt-0.5">
                <h3 className="text-sm font-bold leading-snug text-[#0B1535]">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  {step.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default HowItWorks;
