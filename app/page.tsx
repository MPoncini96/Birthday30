import { ActivitiesAndFood } from "./components/activities-and-food";
import { Activities } from "./components/activities";
import { BottomSlideshow } from "./components/bottom-slideshow";
import { FaqFooter } from "./components/faq-footer";
import { Invitees } from "./components/invitees";
import { ReservationDetails } from "./components/reservation-details";
import { slideshowImages } from "./components/slideshow-images";
import { UnionSlideshow } from "./components/union-slideshow";

export default function Home() {
  return (
    <main className="page-shell">
      <UnionSlideshow />

      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Aug 7th to 9th</p>
          <h1>Union Reservoir Camping</h1>
          <p className="intro">It is also my birthday. I am turning 30 August 8th!</p>
        </div>

        <div className="hero__photo-wrap hero__photo-wrap--slideshow">
          <div className="hero__slideshow">
            {slideshowImages.map((slide, index) => (
              <div
                className="hero__slide"
                key={slide.src}
                style={{ animationDelay: `${index * 3.5}s` }}
              >
                <img className="hero__photo" src={slide.src} alt={slide.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReservationDetails />
      <Invitees />
      <Activities />
      <ActivitiesAndFood />
      <BottomSlideshow />
      <FaqFooter />
    </main>
  );
}
