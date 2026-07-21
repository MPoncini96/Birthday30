import Image from "next/image";

import { unionSlides } from "./union-slides";

export function UnionSlideshow() {
  return (
    <section className="union-slideshow" aria-label="Union Reservoir slideshow">
      <div className="union-slideshow__frame">
        <div className="union-slideshow__stack">
          {unionSlides.map((slide, index) => (
            <div
              className="union-slide"
              key={slide.alt}
              style={{ animationDelay: `${index * 4}s` }}
            >
              <Image
                className="union-slide__image"
                src={slide.image}
                alt={slide.alt}
                priority={index === 0}
                fill
                sizes="(max-width: 820px) 100vw, 1120px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
