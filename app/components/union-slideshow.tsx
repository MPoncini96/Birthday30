import Image from "next/image";

import unionOne from "../../Photos/UnionRes/Union1.webp";
import unionThree from "../../Photos/UnionRes/union3.jpg";
import unionFive from "../../Photos/UnionRes/Union5.webp";
import unionSix from "../../Photos/UnionRes/Union6.webp";

const unionSlides = [
  {
    image: unionOne,
    alt: "Union Reservoir shoreline"
  },
  {
    image: unionThree,
    alt: "Union Reservoir forest scene"
  },
  {
    image: unionFive,
    alt: "Union Reservoir lake at golden hour"
  },
  {
    image: unionSix,
    alt: "Union Reservoir weekend adventure view"
  }
];

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
