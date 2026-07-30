"use client";

import { useState } from "react";
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
import greg2 from "../../Photos/WebpInvitees/Greg2.webp";
import juli2 from "../../Photos/WebpInvitees/Juli2.webp";

type Invitee = {
  name: string;
  photo?: StaticImageData;
  altPhoto?: StaticImageData;
  mediaSrc?: string;
  photoPosition?: string;
  photoScale?: number;
  photoClassName?: string;
  featured?: boolean;
  bio?: string;
};

const invitees: Invitee[] = [
  {
    name: "Matthew",
    photo: matthew,
    bio: "The birthday boy. Claims he \"just wants a chill trip\" but has definitely already packed a french press, a camp chess set, and a journal for Deep Thoughts. Has been known to give a 45-minute fireside speech about the importance of being present. Cried once at a sunset. Won't confirm or deny."
  },
  {
    name: "Tallon",
    photo: tallon,
    bio: "Arrived at base camp with a single drawstring bag and no rain gear. Somehow always the most comfortable person there. Once slept through a bear incident and woke up asking if breakfast was ready. Unofficially holds the group record for most s'mores consumed in a single sitting (eleven, if you're counting — and he was not)."
  },
  {
    name: "Cisco & Kara",
    photo: ciscoAndKara,
    featured: true,
    bio: "The power couple who show up with a two-person sleeping bag, a bluetooth speaker loaded with \"hiking bangers,\" and enough snacks to outlast a siege. Kara once talked Cisco out of a wrong trail turn using only vibes and a compass she'd never used before. It worked. They bicker about tent setup in a way that is honestly very entertaining for everyone else."
  },
  {
    name: "Greg",
    photo: greg,
    altPhoto: greg2,
    photoPosition: "30% center",
    bio: "Brought a hammock on a trip with zero trees. Adapted by attempting to string it between two other hikers. This did not work. Spends the first hour of every hike loudly declaring he \"doesn't need trekking poles\" and the last hour quietly asking to borrow someone's. Will absolutely catch a fish. Will absolutely not stop talking about catching that fish."
  },
  {
    name: "Juli",
    photo: juli,
    altPhoto: juli2,
    bio: "Showed up to a winter camping trip with a summer sleeping bag and the confidence of someone who had never been cold before. Survived entirely on borrowed gear and sheer stubbornness. Makes the best camp coffee of anyone in the group — secret ingredient is apparently \"not measuring anything.\" Once identified a bird call that turned out to be Luca doing a bit."
  },
  {
    name: "Evan & Erin",
    photo: evanAndErin,
    featured: true,
    bio: "Evan plans the route. Erin questions the route. Evan defends the route. Erin is right about the route. They have done this on every single trip and it has somehow always ended fine, which only encourages both of them. Collectively responsible for the group's best campfire meal (foil packet potatoes, don't ask, just trust) and also the group's worst navigation decision, which they have agreed to never speak of again."
  },
  {
    name: "Michael",
    photo: michael,
    bio: "Michael aspires to live in the woods and loves getting into deep convos in the outdoors. His favorite backpacking food is peanut butter."
  },
  {
    name: "Sam & Taylor",
    photo: samAndTaylor,
    photoPosition: "center top",
    photoClassName: "invitee-card__photo--top-focus",
    featured: true,
    bio: "Taylor — professional tree hugger (literally, for science) and self-appointed camp naturalist. Can ID a tree from a single leaf but cannot, under any circumstances, accurately estimate how long a hike is. If she says \"quick little 2-miler,\" start planning your will. Will absolutely stop mid-trail to yell about banana slugs. 10/10 will keep you alive, 0/10 will get you back to camp on time."
  },
  {
    name: "Verdot",
    mediaSrc: "/gifs/Verdot.gif",
    bio: "She's a Bernese Mountain Dog puppy, all paws and running on a grand total of two brain cells — and both of them are currently dedicated to helping. Spotted a stick? She's on it. Someone has too much personal space? She's on that too. Tree ID skills: unclear. Emotional support and enthusiastic supervision skills: unmatched. She may not know what a hike is, but she will absolutely walk the entire thing sideways, tail wagging, fully convinced she is the one keeping everyone safe. And honestly? Who's to say she isn't."
  },
  {
    name: "Kelly",
    photo: kelly,
    bio: "Has a sixth sense for finding the one flat tent spot in any campsite. Also has a first sense, second sense, and third sense for knowing when someone else got a better flat spot. Once reorganized the entire bear canister mid-hike because \"the weight distribution was off\" and everyone had to stop for 20 minutes, but honestly? She was right. Responsible for group morale via strategic deployment of emergency gummy bears."
  },
  {
    name: "Leo",
    photo: leo,
    photoScale: 1.32,
    bio: "Committed outdoorsman who insists every hike is \"totally doable\" and \"not that much elevation.\" It is always that much elevation. Once led the group on a \"shortcut\" that added four miles and a river crossing nobody was prepared for. Described it afterward as a \"bonus adventure.\" Genuinely cannot read a topo map but will hold it very confidently. The group loves him anyway."
  },
  {
    name: "Luca",
    photo: luca,
    bio: "Brings a full spice kit backpacking. Not a little pouch — a kit, with labeled jars, a tiny whisk, and a fold-out cutting board. Once made shakshuka at 9,000 feet on a backpacking stove. The group has never fully recovered from how good it was. Also somehow always the first one asleep and the last one anyone hears snoring. Science cannot explain this."
  },
  {
    name: "Jason",
    photo: jason,
    bio: "Self-described \"light packer\" who shows up with a 55-liter pack stuffed to the zipper. Contents are always a mystery. Once pulled a full-size cutting board out of it like a magician. Knows exactly one campfire song — \"Take Me Home, Country Roads\" — but performs it with such conviction that no one has ever asked for anything else. Somehow always has cell service when no one else does."
  }
];

function InviteeBio({ bio }: { bio: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="invitee-card__bio">
      <p
        className={`invitee-card__bio-text${expanded ? " invitee-card__bio-text--expanded" : ""}`}
      >
        {bio}
      </p>
      <button
        className="invitee-card__bio-toggle"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {expanded ? "View less" : "View more"}
      </button>
    </div>
  );
}

function InviteeCard({ invitee }: { invitee: Invitee }) {
  const [clothesOn, setClothesOn] = useState(true);
  const hasToggle = !!invitee.altPhoto;
  const activePhoto = hasToggle && !clothesOn ? invitee.altPhoto! : invitee.photo;

  return (
    <article
      className={`invitee-card${invitee.featured ? " invitee-card--featured" : ""}`}
    >
      <div className="invitee-card__photo-wrap">
        {activePhoto ? (
          <Image
            className={`invitee-card__photo${invitee.photoClassName ? ` ${invitee.photoClassName}` : ""}`}
            src={activePhoto}
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
        {hasToggle && (
          <div className="invitee-card__clothes-toggle">
            <span className="invitee-card__clothes-label">Clothes:</span>
            <button
              className={`invitee-card__clothes-btn${clothesOn ? " invitee-card__clothes-btn--active" : ""}`}
              onClick={() => setClothesOn(true)}
              aria-pressed={clothesOn}
            >
              On
            </button>
            <button
              className={`invitee-card__clothes-btn${!clothesOn ? " invitee-card__clothes-btn--active" : ""}`}
              onClick={() => setClothesOn(false)}
              aria-pressed={!clothesOn}
            >
              Off
            </button>
          </div>
        )}
        {invitee.bio && <InviteeBio bio={invitee.bio} />}
      </div>
    </article>
  );
}

export function Invitees() {
  return (
    <section className="invitees-section" aria-labelledby="invitees-heading">
      <div className="invitees-section__header">
        <p className="card-kicker">Who's going</p>
        <h2 id="invitees-heading">Attendees</h2>
      </div>

      <div className="invitees-grid">
        {invitees.map((invitee) => (
          <InviteeCard key={invitee.name} invitee={invitee} />
        ))}
      </div>
    </section>
  );
}
