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
  bioLink?: { text: string; url: string };
};

const invitees: Invitee[] = [
  {
    name: "Matthew 🔥",
    photo: matthew,
    bio: "His best quality is being present. His second best quality is knowing the right things to say. He enlisted into the Army because he felt like it at the time. He enjoys the outdoors, and the outdoors enjoy him. He is pleasant. He smiles more when things aren't going well than when they are, because he likes himself a challenge. He enjoys camping. He enjoys his friends."
  },
  {
    name: "Tallon 👑",
    photo: tallon,
    bio: "Let's face it, she's a princess. But not the type of princess that wants to be pampered all day, although, she will allow that some of the time. She's the princess that doesn't need a prince to fight a dragon for her, because she loves dragons and will become its master on her own. She's mostly a princess because she's the prettiest girl in the movie, and that's usually who the princess is. Kinda like Braveheart. She can do outdoors, she can do camping, she will make a better smore than anyone. She knows how to have a good time, she knows how to live."
  },
  {
    name: "Cisco ⚾ & Kara 🍇",
    photo: ciscoAndKara,
    featured: true,
    bio: "Some sort of love. Cisco loves Kara and Kara loves Cisco. I was there the day they met and I saw it in their eyes. Fast forward 5 years, they are celebrating their fourth year of marriage this August. Stoked on that. They have a pup, a condo, and a tesla. Can they handle the outdoors? Live a weekend in a tent? Time will tell. But one thing is for sure, God is on their side. They have heart. That goes a long way in the wilderness."
  },
  {
    name: "Greg ⚔️",
    photo: greg2,
    altPhoto: greg,
    photoPosition: "30% center",
    bio: "Ayo. He's well read, and well practiced. He's better at making cocktails than anyone. He sure as heck knows how to host. He's fast. If you are with him and a bear is chasing you and Greg, you don't need to outrun the bear, you need to outrun Greg, which you can't, so just face it. You are dinner for that bear, or breakfast if he hasn't ate yet. Why? Cause Greg was faster than you and you should have been more prepared."
  },
  {
    name: "Juli 🦎",
    photo: juli,
    bio: "She has a PhD in animal stuff. She is our naturalist. She has dissected many lizards. Small ones too. Science isn't just in her nature, science is in nature in general, and Juli knows it. She hears the wolves howl in the middle of the night, and she knows what they are saying, thanks to her research. She's traveled the corners of the world and photographed its edges.",
    bioLink: { text: "@pugan_pics", url: "https://www.instagram.com/pugan_pics/" }
  },
  {
    name: "Evan 🍺 & Erin ☕",
    photo: evanAndErin,
    featured: true,
    bio: "He was a boy. She was a girl. Can I make it anymore obvious? He likes money. She likes plants. He likes Pokemon, she likes arts and crafts. They both like board games. I would say they let each other win all the time, but only one of them does that for the other. I'm kidding, but also, I'm kidding about kidding. I swear Erin lets Evan win sometimes, I'm calling that out. But enough, enough. They love the outdoors. The sun, the lake, nature's beauty. They are great company, and did I mention, they have a dog."
  },
  {
    name: "Michael 🦦",
    photo: michael,
    bio: "Michael aspires to live in the woods and loves getting into deep convos in the outdoors. His favorite backpacking food is peanut butter."
  },
  {
    name: "Sam 🍷 & Taylor🌲",
    photo: samAndTaylor,
    photoPosition: "center top",
    photoClassName: "invitee-card__photo--top-focus",
    featured: true,
    bio: "Sam: she's down for whatever, need your back cracked? She knows how to do it, and well.  It's part of her job. Adventure finds her because she's already halfway there. Good energy, great company, she's full of life.  She knows how to paint by the numbers. Overall, a good time. Taylor — professional tree hugger (literally, for science) and self-appointed camp naturalist. Can ID a tree from a single leaf but cannot, under any circumstances, accurately estimate how long a hike is. If she says \"quick little 2-miler,\" start planning your will. Will absolutely stop mid-trail to yell about banana slugs. 10/10 will keep you alive, 0/10 will get you back to camp on time."
  },
  {
    name: "Verdot 🌸",
    mediaSrc: "/gifs/Verdot.gif",
    bio: "She's a Bernese Mountain Dog puppy, all paws and running on a grand total of two brain cells — and both of them are currently dedicated to helping. Spotted a stick? She's on it. Someone has too much personal space? She's on that too. Tree ID skills: unclear. Emotional support and enthusiastic supervision skills: unmatched. She may not know what a hike is, but she will absolutely walk the entire thing sideways, tail wagging, fully convinced she is the one keeping everyone safe. And honestly? Who's to say she isn't."
  },
  {
    name: "Kelly ⛷️",
    photo: kelly,
    bio: "He smiles like a retriever. He's loyal like a lab. He's playful like a puppy. Let's face it, this guy is a dog. Woof! Woof! Now you are speaking Kelly's language. He runs up and down the mountain like a hound dog. He can fish, he can ski, he can hold a conversation. He's done the research. He is an asset. He's not just a dog, he's an outdoors man."
  },
  {
    name: "Leo 🦴",
    photo: leo,
    photoScale: 1.32,
    bio: "In a past life, Leo summited Everest. Twice. The first time was for glory. The second time was for a woman named Helga, who was waiting at base camp with a thermos of hot cocoa and eyes like the Himalayas. She wasn't the first. There was Marguerite, who he met on the north face in a snowstorm. And Yuki, who taught him to read the wind. And a Swedish cartographer whose name he never learned but whose laugh he never forgot. They all loved him, and he loved the mountain, and somehow that was enough. He descended for the last time in 1987, hung up his crampons, and was reborn as Leo, a white fluffball.  He now spends his time keeping Kara and Cisco attentive to his needs."
  },
  {
    name: "Luca 🥩",
    photo: luca,
    bio: "In a past life, Luca was an inventor and a field medic — a dangerous combination. He built a device in 1843 that could reset a dislocated shoulder using only a leather strap and a pulley system he machined himself in a barn outside Florence. It worked every time. His lover, a man named Raffaele, was his first patient and his last. Raffaele had fallen from a horse and Luca had put him back together piece by piece, and somewhere between the splint and the fever breaking, something happened. They spent eleven years together in a stone house by the river. Raffaele would bring him problems and Luca would invent solutions. A better lantern. A water filter made from river clay. A folding stretcher that fit on a mule. When Raffaele died of a winter that came too fast, Luca kept inventing, but it was quieter after that, and in his sleep, Luca joined Raffaele in the great beyond. Luca was reborn eventually, as a dog. Evan's and Erin's chocolate lab."
  },
  {
    name: "Jason ⛰️",
    photo: jason,
    bio: "He knows not fear. But that doesn't mean, you shouldn't fear him."
  }
];

function InviteeBio({ bio, bioLink }: { bio: string; bioLink?: { text: string; url: string } }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="invitee-card__bio">
      <p
        className={`invitee-card__bio-text${expanded ? " invitee-card__bio-text--expanded" : ""}`}
      >
        {bio}
        {bioLink && (
          <>
            {" "}
            <a
              className="invitee-card__bio-link"
              href={bioLink.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {bioLink.text}
            </a>
          </>
        )}
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
        {invitee.bio && <InviteeBio bio={invitee.bio} bioLink={invitee.bioLink} />}
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
