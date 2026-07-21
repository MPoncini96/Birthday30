import { slideshowImages } from "./slideshow-images";

type DetailItem = {
  label: string;
  value: string;
  detail?: string;
};

const reservationSlides = [...slideshowImages].reverse();

const reservationDetails: DetailItem[] = [
  {
    label: "Forest",
    value: "Stanislaus National Forest"
  },
  {
    label: "Campground",
    value: "Union West - Union Reservoir (Stanislaus NF)"
  },
  {
    label: "Campsites",
    value: "Sites 3 and 4, Union West"
  },
  {
    label: "Location",
    value: "Lat 38.42759 | Long -119.99366"
  },
  {
    label: "Check In",
    value: "Fri, Aug 7, 2026",
    detail: "2:00 PM"
  },
  {
    label: "Check Out",
    value: "Sun, Aug 9, 2026",
    detail: "12:00 PM"
  },
  {
    label: "Occupants",
    value: "12 people"
  },
  {
    label: "Vehicles",
    value: "4 vehicles total"
  },
  {
    label: "Pets",
    value: "Pet friendly"
  }
];

export function ReservationDetails() {
  return (
    <section className="reservation-card" aria-labelledby="reservation-details-heading">
      <div className="reservation-card__header">
        <p className="card-kicker">Trip details</p>
        <h2 id="reservation-details-heading">Campsite Info</h2>
      </div>

      <div className="reservation-card__grid">
        <div className="reservation-slideshow" aria-label="Reservation photo slideshow">
          <div className="reservation-slideshow__stack">
            {reservationSlides.map((slide, index) => (
              <div
                className="reservation-slideshow__slide"
                key={slide.src}
                style={{ animationDelay: `${index * 3.5}s` }}
              >
                <img
                  className="reservation-slideshow__image"
                  src={slide.src}
                  alt={slide.alt}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="reservation-panel">
          <dl className="detail-list">
            {reservationDetails.map((item) => (
              <div className="detail-row" key={item.label}>
                <dt>{item.label}</dt>
                <dd>
                  <span>{item.value}</span>
                  {item.detail ? <small>{item.detail}</small> : null}
                </dd>
              </div>
            ))}
          </dl>

          <div className="reservation-link-block">
            <a
              className="reservation-link"
              href="https://maps.apple.com/directions?source=Bay+Bridge%2C+San+Francisco-Oakland+Bay+Bridge+San+Francisco%2C+CA+United+States&source-place-id=I3DCDEAC6D61A305E&destination=Forest+Service+Road+7N75%2C+Arnold%2C+CA++95223%2C+United+States&mode=driving"
              target="_blank"
              rel="noreferrer"
            >
              Apple Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
