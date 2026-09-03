import { FiChevronRight } from "react-icons/fi";
import "./VendorTodaySchedule.css";

const schedule = [
  {
    time: "10:00 AM",
    service: "Home Cleaning",
    customer: "Ananya Singh",
    status: "Confirmed",
  },
  {
    time: "12:00 PM",
    service: "Pest Control",
    customer: "Rohit Verma",
    status: "Confirmed",
  },
  {
    time: "02:00 PM",
    service: "Plumbing",
    customer: "Priya Mehta",
    status: "Pending",
  },
  {
    time: "04:00 PM",
    service: "AC Repair",
    customer: "Vikram Patel",
    status: "Confirmed",
  },
];

function VendorTodaySchedule() {
  return (
    <section className="vd-today-schedule">
      <article className="vd-today-schedule__card">
        <div className="vd-today-schedule__header">
          <h2 className="vd-today-schedule__title">
            Today&apos;s Schedule
          </h2>
          <button className="vd-today-schedule__viewall">
            <span>View All</span>
            <FiChevronRight
              size={14}
              className="vd-today-schedule__viewall-icon"
            />
          </button>
        </div>

        <div className="vd-today-schedule__list">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="vd-today-schedule__item"
            >
              {/* Time */}
              <span className="vd-today-schedule__time">
                {item.time}
              </span>

              {/* Service + Customer */}
              <div className="vd-today-schedule__info">
                <p className="vd-today-schedule__service">
                  {item.service}
                </p>
                <p className="vd-today-schedule__customer">
                  {item.customer}
                </p>
              </div>

              {/* Status badge */}
              <span
                className={`vd-today-schedule__badge ${
                  item.status === "Confirmed"
                    ? "vd-today-schedule__badge--confirmed"
                    : "vd-today-schedule__badge--pending"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default VendorTodaySchedule;
