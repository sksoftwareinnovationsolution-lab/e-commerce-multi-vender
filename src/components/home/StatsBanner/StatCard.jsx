import React from "react";

function StatCard({ icon: Icon, value, label, showDivider }) {
  return (
    <div className="relative flex h-full min-h-[90px] items-center justify-center gap-5 px-6 py-5">

      <div>
        <Icon className="h-12 w-12 text-white/90" />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white">
          {value}
        </h3>

        <p className="mt-0.5 text-sm text-white/80">
          {label}
        </p>
      </div>

      {showDivider && (
        <div className="absolute right-0 h-10 w-[0.5px] bg-white/10" />
      )}

    </div>
  );
}

export default StatCard;