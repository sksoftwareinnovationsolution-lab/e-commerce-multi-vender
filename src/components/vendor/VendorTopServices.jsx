import {
  FiChevronRight,
  FiHome,
  FiShield,
  FiDroplet,
  FiWind,
  FiZap,
} from "react-icons/fi";
import "./VendorTopServices.css";

const TOP_SERVICES = [
  {
    name: "Home Cleaning",
    bookings: 456,
    earnings: "\u20B928,450",
    Icon: FiHome,
    color: "violet",
  },
  {
    name: "Pest Control",
    bookings: 234,
    earnings: "\u20B916,780",
    Icon: FiShield,
    color: "purple",
  },
  {
    name: "Plumbing",
    bookings: 198,
    earnings: "\u20B914,650",
    Icon: FiDroplet,
    color: "indigo",
  },
  {
    name: "AC Repair",
    bookings: 156,
    earnings: "\u20B911,230",
    Icon: FiWind,
    color: "violet",
  },
  {
    name: "Electrician",
    bookings: 120,
    earnings: "\u20B97,450",
    Icon: FiZap,
    color: "purple",
  },
];

function VendorTopServices() {
  return (
    <section className="vd-top-services">
      <article className="vd-top-services__card">
        <div className="vd-top-services__header">
          <h2 className="vd-top-services__title">
            Top Services
          </h2>
          <button
            type="button"
            className="vd-top-services__viewall"
          >
            <span>View All</span>
            <FiChevronRight
              size={10}
              className="vd-top-services__viewall-icon"
            />
          </button>
        </div>

        <div className="vd-top-services__table-wrap">
          <table className="vd-top-services__table">
            <thead className="vd-top-services__thead">
              <tr>
                <th className="vd-top-services__th">
                  Service
                </th>
                <th className="vd-top-services__th vd-top-services__th--center">
                  Bookings
                </th>
                <th className="vd-top-services__th vd-top-services__th--right">
                  Earnings
                </th>
              </tr>
            </thead>
            <tbody>
              {TOP_SERVICES.map((s) => (
                <tr
                  key={s.name}
                  className="vd-top-services__row"
                >
                  <td className="vd-top-services__cell">
                    <div className="vd-top-services__service">
                      <span
                        className={`vd-top-services__service-icon vd-top-services__service-icon--${s.color}`}
                      >
                        <s.Icon size={12} />
                      </span>
                      <span className="vd-top-services__service-name">
                        {s.name}
                      </span>
                    </div>
                  </td>
                  <td className="vd-top-services__cell vd-top-services__cell--center vd-top-services__cell--bookings">
                    {s.bookings}
                  </td>
                  <td className="vd-top-services__cell vd-top-services__cell--right vd-top-services__cell--earnings">
                    {s.earnings}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

export default VendorTopServices;
