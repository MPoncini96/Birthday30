const itineraryDays = [
  {
    day: "Friday",
    date: "Aug 7",
    summary: "Arrival, setup, and first evening by the water.",
    items: [
      {
        title: "Arrival window",
        detail: "Arrive through the afternoon and settle into campsites 3 and 4."
      },
      {
        title: "Camp setup",
        detail: "Unload cars, claim sleeping spots, and get the shared camp organized."
      },
      {
        title: "Lake time",
        detail: "Easy swim, shoreline hang, sunset walk, or a quick boat lap if timing works out."
      },
      {
        title: "Dinner",
        detail: "Keep the first meal simple with an easy grill plan or prep-ahead camp dinner."
      },
      {
        title: "Evening",
        detail: "Campfire, drinks, and a relaxed first night under the trees."
      }
    ]
  },
  {
    day: "Saturday",
    date: "Aug 8",
    summary: "Birthday day and the main adventure block.",
    items: [
      {
        title: "Breakfast",
        detail: "Coffee and a real camp breakfast before everyone scatters into activity mode."
      },
      {
        title: "Lake activities",
        detail: "Swimming, paddling, floating, boat time, and long stretches of hanging by the water."
      },
      {
        title: "Hike option",
        detail: "Leave space for Bull Run Lake Trail or a shorter scenic walk depending on energy."
      },
      {
        title: "Lunch",
        detail: "Sandwiches, snacks, and cooler food between lake sessions and any hike plan."
      },
      {
        title: "Birthday dinner",
        detail: "This is the main shared meal slot for the weekend and the best place for dessert."
      },
      {
        title: "Night plans",
        detail: "Campfire round two, music, games, and the main birthday celebration."
      }
    ]
  },
  {
    day: "Sunday",
    date: "Aug 9",
    summary: "Slow morning, one last view, and pack-out.",
    items: [
      {
        title: "Morning",
        detail: "Coffee, leftovers, breakfast, and an easy final stretch at camp."
      },
      {
        title: "Optional outing",
        detail: "Short shoreline walk, quick swim, or a final easy loop before cleanup."
      },
      {
        title: "Pack up",
        detail: "Break down tents, clear shared gear, and consolidate everything into the cars."
      },
      {
        title: "Departure",
        detail: "Plan around the noon checkout window and leave the sites clean."
      }
    ]
  }
];

export function Itinerary() {
  return (
    <section className="itinerary-section" aria-labelledby="itinerary-heading">
      <div className="itinerary-section__header">
        <p className="card-kicker">Weekend itinerary</p>
        <h2 id="itinerary-heading">Friday to Sunday game plan</h2>
        <p className="itinerary-section__intro">
          Built as an easy-to-edit weekend outline with separate blocks for arrivals,
          lake time, meals, hikes, and pack-out.
        </p>
      </div>

      <div className="itinerary-grid">
        {itineraryDays.map((day) => (
          <article className="itinerary-day" key={day.day}>
            <div className="itinerary-day__header">
              <p className="itinerary-day__date">{day.date}</p>
              <h3>{day.day}</h3>
              <p>{day.summary}</p>
            </div>

            <div className="itinerary-day__items">
              {day.items.map((item) => (
                <div className="itinerary-item" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
