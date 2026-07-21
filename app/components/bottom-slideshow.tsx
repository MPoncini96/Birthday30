import { slideshowImages } from "./slideshow-images";

const bottomSlides = [...slideshowImages].reverse();

export function BottomSlideshow() {
  return (
    <section className="bottom-slideshow" aria-label="Photo slideshow">
      <div className="bottom-slideshow__frame">
        <div className="bottom-slideshow__stack">
          {bottomSlides.map((slide, index) => (
            <div
              className="bottom-slideshow__slide"
              key={slide.src}
              style={{ animationDelay: `${index * 3.5}s` }}
            >
              <img
                className="bottom-slideshow__image"
                src={slide.src}
                alt={slide.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
