import serviceAreaImg from "../../assets/images/vendor/service-area-coverage.png";
import "./VendorServiceAreaCoverage.css";

const areas = [
  { name: "Indiranagar", bookings: 245 },
  { name: "Koramangala", bookings: 198 },
  { name: "HSR Layout", bookings: 156 },
  { name: "JP Nagar", bookings: 124 },
  { name: "Whitefield", bookings: 98 },
];

const maxBookings = Math.max(...areas.map((a) => a.bookings));

function VendorServiceAreaCoverage() {
  return (
    <section className="vd-service-area">
      <article className="vd-service-area__card">
        <div className="vd-service-area__header">
          <h2 className="vd-service-area__title">
            Service Area Coverage
          </h2>
        </div>

        <div className="vd-service-area__body">
          {/* Left: Map visual */}
          <div className="vd-service-area__map">
            <img
              src={serviceAreaImg}
              alt="Service Area Coverage Map"
              className="vd-service-area__map-img"
            />
          </div>

          {/* Right: Areas list */}
          <div className="vd-service-area__list">
            <div className="vd-service-area__list-header">
              <span className="vd-service-area__list-header-label">Top Areas</span>
              <span className="vd-service-area__list-header-count">Bookings</span>
            </div>
            <div className="vd-service-area__list-items">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="vd-service-area__item"
                >
                  <span className="vd-service-area__item-name">
                    {area.name}
                  </span>
                  <div className="vd-service-area__item-stats">
                    <div className="vd-service-area__bar">
                      <div
                        className="vd-service-area__bar-fill"
                        style={{
                          width: `${(area.bookings / maxBookings) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="vd-service-area__item-count">
                      {area.bookings}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default VendorServiceAreaCoverage;
