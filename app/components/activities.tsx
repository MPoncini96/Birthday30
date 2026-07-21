const hikePdfHref = "/hikes/bull-run-lake-trail-highland-creek-and-rock-lake-loop-54a49807.pdf";
const allTrailsHref =
  "https://www.alltrails.com/trail/us/california/bull-run-lake-trail-highland-creek-and-rock-lake-loop";

const hikeStats = [
  { value: "8.1mi", label: "Length" },
  { value: "921ft", label: "Elevation gain" },
  { value: "3.5-4hr", label: "Estimated time" },
  { value: "Loop", label: "Route type" }
];

export function Activities() {
  return (
    <section className="hike-section" aria-labelledby="activities-heading">
      <div className="hike-section__header">
        <p className="card-kicker">Hike</p>
        <h2 className="hike-section__title" id="activities-heading">
          Bull Run Lake trail option
        </h2>
      </div>

      <div className="hike-card">
        <h3>Trail details</h3>

        <div className="hike-stats" aria-label="Trail stats">
          {hikeStats.map((stat) => (
            <div className="hike-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <p>
          This is a beautiful route in the remote Carson-Iceberg Wilderness. It starts
          on the Lakeshore Trail, along Union Lake, and heads southeast on a forest
          road at the Elephant Rock Trailhead. At two miles, take the Bull Run Lake
          Trail for almost a mile and a half and link up with the Highland Creek Trail
          heading north toward Rock Lake. Complete the loop on the Elephant Rock
          Trail. Most of this route is above treeline. Plan this route in good weather,
          but always come prepared with extra layers and plan for a long day at higher
          elevations.
        </p>

        <a className="itinerary-download-link" href={allTrailsHref} target="_blank" rel="noreferrer">
          View on AllTrails
        </a>

        <div className="hike-preview">
          <p className="hike-preview__label">Trail preview</p>
          <iframe
            className="hike-preview__frame"
            src={hikePdfHref}
            title="Bull Run Lake trail PDF preview"
          />
        </div>
      </div>
    </section>
  );
}
