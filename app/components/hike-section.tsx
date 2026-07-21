export function HikeSection() {
  return (
    <section className="hike-section" aria-labelledby="hike-heading">
      <div className="hike-section__header">
        <p className="card-kicker">Hike</p>
        <h2 id="hike-heading">Bull Run Lake trail option</h2>
      </div>

      <div className="hike-card">
        <h3>Hike option</h3>
        <p>
          Keep this slot open for the Bull Run Lake Trail loop or a shorter scenic walk
          depending on energy.
        </p>
        <a
          className="hike-download-link"
          href="/hikes/bull-run-lake-trail-highland-creek-and-rock-lake-loop-54a49807.pdf"
          download
          target="_blank"
          rel="noreferrer"
        >
          Download the Bull Run Lake trail PDF
        </a>
      </div>
    </section>
  );
}
