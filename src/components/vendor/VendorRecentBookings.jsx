import { FiChevronRight } from "react-icons/fi";
import "./VendorRecentBookings.css";

const RECENT_BOOKINGS = [
  {
    id: "#BK-12569",
    service: "Home Cleaning",
    customer: "Ananya Singh",
    date: "May 31, 10:00 AM",
    amount: "\u20B91,799",
    status: "Confirmed",
  },
  {
    id: "#BK-12568",
    service: "Pest Control",
    customer: "Rohit Verma",
    date: "May 30, 04:00 PM",
    amount: "\u20B92,299",
    status: "Completed",
  },
  {
    id: "#BK-12567",
    service: "Plumbing",
    customer: "Priya Mehta",
    date: "May 30, 11:00 AM",
    amount: "\u20B91,499",
    status: "Completed",
  },
  {
    id: "#BK-12566",
    service: "AC Repair",
    customer: "Vikram Patel",
    date: "May 29, 03:00 PM",
    amount: "\u20B92,999",
    status: "Completed",
  },
  {
    id: "#BK-12565",
    service: "Electrician",
    customer: "Neha Sharma",
    date: "May 29, 10:30 AM",
    amount: "\u20B91,199",
    status: "Cancelled",
  },
];

function StatusBadge({ status }) {
  if (status === "Cancelled") {
    return (
      <span className="vd-badge vd-badge--red">
        {status}
      </span>
    );
  }
  return (
    <span className="vd-badge vd-badge--green">
      {status}
    </span>
  );
}

function VendorRecentBookings() {
  return (
    <section className="vd-recent-bookings">
      <article className="vd-recent-bookings__card">
        <div className="vd-recent-bookings__header">
          <h2 className="vd-recent-bookings__title">
            Recent Bookings
          </h2>
          <button
            type="button"
            className="vd-recent-bookings__viewall"
          >
            <span>View All</span>
            <FiChevronRight size={10} className="vd-recent-bookings__viewall-icon" />
          </button>
        </div>

        <div className="vd-recent-bookings__table-wrap">
          <table className="vd-recent-bookings__table">
            <thead className="vd-recent-bookings__thead">
              <tr>
                <th className="vd-recent-bookings__th">
                  Booking ID
                </th>
                <th className="vd-recent-bookings__th">
                  Service
                </th>
                <th className="vd-recent-bookings__th">
                  Customer
                </th>
                <th className="vd-recent-bookings__th">
                  Date &amp; Time
                </th>
                <th className="vd-recent-bookings__th vd-recent-bookings__th--right">
                  Amount
                </th>
                <th className="vd-recent-bookings__th">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {RECENT_BOOKINGS.map((b) => (
                <tr
                  key={b.id}
                  className="vd-recent-bookings__row"
                >
                  <td className="vd-recent-bookings__cell vd-recent-bookings__cell--id">
                    {b.id}
                  </td>
                  <td className="vd-recent-bookings__cell vd-recent-bookings__cell--service">
                    {b.service}
                  </td>
                  <td className="vd-recent-bookings__cell vd-recent-bookings__cell--customer">
                    {b.customer}
                  </td>
                  <td className="vd-recent-bookings__cell vd-recent-bookings__cell--date">
                    {b.date}
                  </td>
                  <td className="vd-recent-bookings__cell vd-recent-bookings__cell--amount">
                    {b.amount}
                  </td>
                  <td className="vd-recent-bookings__cell">
                    <StatusBadge status={b.status} />
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

export default VendorRecentBookings;
