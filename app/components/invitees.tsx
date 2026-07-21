import Image, { type StaticImageData } from "next/image";

import ciscoAndKara from "../../Photos/CiscoAndKara.jpg";
import evanAndErin from "../../Photos/EvanAndErin.jpg";
import greg from "../../Photos/Greg.jpg";
import jason from "../../Photos/Jason.jpeg";
import juli from "../../Photos/Juli.jpg";
import kelly from "../../Photos/Kelly.jpg";
import leo from "../../Photos/Leo.jpg";
import luca from "../../Photos/Luca.jpg";
import matthew from "../../Photos/Me.jpg";
import michael from "../../Photos/Michael.jpg";
import samAndTaylor from "../../Photos/SamandTaylor.jpg";
import tallon from "../../Photos/Tallon.jpg";

type Invitee = {
  name: string;
  note: string;
  photo?: StaticImageData;
  mediaSrc?: string;
  photoPosition?: string;
  photoScale?: number;
  photoClassName?: string;
  featured?: boolean;
};

const invitees: Invitee[] = [
  {
    name: "Matthew",
    note: "Birthday captain",
    photo: matthew
  },
  {
    name: "Tallon",
    note: "Camp setup specialist",
    photo: tallon
  },
  {
    name: "Cisco & Kara",
    note: "Double campsite duo",
    photo: ciscoAndKara,
    featured: true
  },
  {
    name: "Greg",
    note: "Weekend crew",
    photo: greg,
    photoPosition: "30% center"
  },
  {
    name: "Juli",
    note: "Adventure crew",
    photo: juli
  },
  {
    name: "Evan & Erin",
    note: "Reservoir regulars",
    photo: evanAndErin,
    featured: true
  },
  {
    name: "Michael",
    note: "Campfire committee",
    photo: michael
  },
  {
    name: "Sam & Taylor",
    note: "Golden hour team",
    photo: samAndTaylor,
    photoPosition: "center top",
    photoClassName: "invitee-card__photo--top-focus",
    featured: true
  },
  {
    name: "Verdot",
    note: "Animated VIP cameo",
    mediaSrc: "/gifs/Verdot.gif"
  },
  {
    name: "Kelly",
    note: "Birthday weekend crew",
    photo: kelly
  },
  {
    name: "Leo",
    note: "Lake day energy",
    photo: leo,
    photoScale: 1.32
  },
  {
    name: "Luca",
    note: "Birthday weekend crew",
    photo: luca
  },
  {
    name: "Jason",
    note: "Birthday weekend crew",
    photo: jason
  }
];

export function Invitees() {
  return (
    <section className="invitees-section" aria-labelledby="invitees-heading">
      <div className="invitees-section__header">
        <p className="card-kicker">Who's going</p>
        <h2 id="invitees-heading">The birthday weekend lineup</h2>
      </div>

      <div className="invitees-grid">
        {invitees.map((invitee) => (
          <article
            className={`invitee-card${invitee.featured ? " invitee-card--featured" : ""}`}
            key={invitee.name}
          >
            <div className="invitee-card__photo-wrap">
              {invitee.photo ? (
                <Image
                  className={`invitee-card__photo${invitee.photoClassName ? ` ${invitee.photoClassName}` : ""}`}
                  src={invitee.photo}
                  alt={invitee.name}
                  placeholder="blur"
                  sizes="(max-width: 820px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{
                    objectPosition: invitee.photoPosition,
                    transform: invitee.photoScale ? `scale(${invitee.photoScale})` : undefined
                  }}
                />
              ) : (
                <img
                  className={`invitee-card__photo${invitee.photoClassName ? ` ${invitee.photoClassName}` : ""}`}
                  src={invitee.mediaSrc}
                  alt={invitee.name}
                />
              )}
            </div>
            <div className="invitee-card__content">
              <h3>{invitee.name}</h3>
              <p>{invitee.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
