import Image, { type StaticImageData } from "next/image";

import ciscoAndKara from "../../Photos/WebpInvitees/CiscoAndKara.webp";
import evanAndErin from "../../Photos/WebpInvitees/EvanAndErin.webp";
import greg from "../../Photos/WebpInvitees/Greg.webp";
import jason from "../../Photos/WebpInvitees/Jason.webp";
import juli from "../../Photos/WebpInvitees/Juli.webp";
import kelly from "../../Photos/WebpInvitees/Kelly.webp";
import leo from "../../Photos/WebpInvitees/Leo.webp";
import luca from "../../Photos/WebpInvitees/Luca.webp";
import matthew from "../../Photos/WebpInvitees/Me.webp";
import michael from "../../Photos/WebpInvitees/Michael.webp";
import samAndTaylor from "../../Photos/WebpInvitees/SamandTaylor.webp";
import tallon from "../../Photos/WebpInvitees/Tallon.webp";

type Invitee = {
  name: string;
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
    photo: matthew
  },
  {
    name: "Tallon",
    photo: tallon
  },
  {
    name: "Cisco & Kara",
    photo: ciscoAndKara,
    featured: true
  },
  {
    name: "Greg",
    photo: greg,
    photoPosition: "30% center"
  },
  {
    name: "Juli",
    photo: juli
  },
  {
    name: "Evan & Erin",
    photo: evanAndErin,
    featured: true
  },
  {
    name: "Michael",
    photo: michael
  },
  {
    name: "Sam & Taylor",
    photo: samAndTaylor,
    photoPosition: "center top",
    photoClassName: "invitee-card__photo--top-focus",
    featured: true
  },
  {
    name: "Verdot",
    mediaSrc: "/gifs/Verdot.gif"
  },
  {
    name: "Kelly",
    photo: kelly
  },
  {
    name: "Leo",
    photo: leo,
    photoScale: 1.32
  },
  {
    name: "Luca",
    photo: luca
  },
  {
    name: "Jason",
    photo: jason
  }
];

export function Invitees() {
  return (
    <section className="invitees-section" aria-labelledby="invitees-heading">
      <div className="invitees-section__header">
        <p className="card-kicker">Who's going</p>
        <h2 id="invitees-heading">Attendees</h2>
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
