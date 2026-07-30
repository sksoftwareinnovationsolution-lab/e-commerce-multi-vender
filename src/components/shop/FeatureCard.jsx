function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-3 py-3 shadow-md">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F4EEFF]">
        <Icon className="h-5 w-5 text-[#6D28D9]" />
      </div>

      <div className="-mt-1">
        <h3 className="text-[15px] font-semibold leading-5 text-gray-900">
          {title}
        </h3>

        <p className="text-[13px] leading-4 text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;