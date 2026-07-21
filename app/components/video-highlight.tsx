export function VideoHighlight() {
  return (
    <section className="video-section" aria-labelledby="video-section-heading">
      <div className="video-section__header">
        <p className="card-kicker">Weekend preview</p>
        <h2 id="video-section-heading">A little Verdot energy for the invite</h2>
        <p className="video-section__intro">
          Converted into a looping GIF so it feels more like part of the page than a
          separate video player.
        </p>
      </div>

      <div className="video-frame">
        <img
          className="video-frame__media"
          src="/gifs/Verdot.gif"
          alt="Verdot clip from the birthday weekend"
        />
      </div>
    </section>
  );
}
