      import appScreen from "../../../assets/images/app/app-screen.png";
      import appScreen1 from "../../../assets/images/app/app-screen1.png";
      import { Package, CalendarCheck, Wallet, Bell } from "lucide-react";

      const FEATURES = [
        { icon: Package, label: "Order Tracking", bgColor: "bg-blue-500" },
        { icon: CalendarCheck, label: "Instant Booking", bgColor: "bg-green-500" },
        { icon: Wallet, label: "Secure Wallet", bgColor: "bg-orange-500" },
        { icon: Bell, label: "Real-time Notifications", bgColor: "bg-yellow-500" },
      ];

      function AppShowcase() {
        return (
          <section>
            <div className="max-w-9xl mx-auto bg-white rounded-3xl shadow-lg px-6 py-6 lg:px-10 lg:py-8">
              <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className="md:col-span-3 lg:col-span-5 flex justify-center lg:pt-8 w-full">
                  <img
                    src={appScreen}
                    alt="Omnivixo App"
                  className="w-full max-w-[420px] md:max-w-[480px] lg:max-w-[540px] h-auto object-contain"
                  />
                </div>

                <div className="md:col-span-2 lg:col-span-3 space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Omnivixo App
                  </h2>
                  <p className="text-lg text-gray-500">
                    One App, Everything
                  </p>
                  <div className="space-y-1">
                    {FEATURES.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-3 min-h-[64px]"
                        >
                          <div className={`w-10 h-10  rounded-full flex items-center justify-center ${feature.bgColor}`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-base font-medium text-gray-800">
                            {feature.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="md:col-span-5 lg:col-span-4 flex justify-center">
                  <img
                    src={appScreen1}
                    alt="Download Omnivixo App"
                    className="w-full max-w-xs lg:max-w-sm h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      }

      export default AppShowcase;
