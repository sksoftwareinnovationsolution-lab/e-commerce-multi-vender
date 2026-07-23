  import {
    ShoppingBagIcon,
    UsersIcon,
    HeartIcon,
    ClockIcon,
  } from "@heroicons/react/24/outline";

  import StatCard from "./StatCard";

  function StatsBanner() {
    return (
      <section className="bg-white py-12">

        <div className="mx-auto max-w-7xl px-4">

          <div className="min-h-[90px] md:min-h-[95px] overflow-hidden rounded-xl bg-gradient-to-r from-[#0D0B52] to-[#3224A8] shadow-xl">

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

              <StatCard
                icon={ShoppingBagIcon}
                value="50K+"
                label="Products"
                showDivider
              />

              <StatCard
                icon={UsersIcon}
                value="5K+"
                label="Service Providers"
                showDivider
              />

              <StatCard
                icon={HeartIcon}
                value="100K+"
                label="Happy Customers"
                showDivider
              />

              <StatCard
                icon={ClockIcon}
                value="99.9%"
                label="Uptime"
              />

            </div>

          </div>

        </div>

      </section>
    );
  } 

  export default StatsBanner;