export function ActivitiesAndFood() {
  return (
    <section className="itinerary-section" aria-labelledby="activities-food-heading">
      <div className="itinerary-section__header">
        <p className="card-kicker">Weekend plans</p>
        <h2 id="activities-food-heading">Activities and Food</h2>
        <p className="itinerary-section__intro">
          Beyond the hike, we can keep the weekend easy and flexible around the lake.
        </p>
      </div>

      <div className="itinerary-grid">
        <article className="itinerary-day">
          <div className="itinerary-day__header">
            <h3>Lake stuff</h3>
            <p>
              Swim, float, hang by the shore, bring camp chairs, toss games around camp,
              and catch sunset at the water.
            </p>
          </div>
        </article>

        <article className="itinerary-day">
          <div className="itinerary-day__header">
            <h3>Extra options</h3>
            <p>
              If people want more to do, we can mix in kayaking or paddleboarding if
              anyone brings gear, plus relaxed walks and general campsite downtime.
            </p>
          </div>
        </article>

        <article className="itinerary-day">
          <div className="itinerary-day__header">
            <h3>Food plan</h3>
            <p>
              Everyone can be on their own for food, or we can coordinate shared meals,
              snacks, and camp supplies in the group chat.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
