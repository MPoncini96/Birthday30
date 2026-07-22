import type { StaticImageData } from "next/image";

import unionOne from "../../Photos/UnionRes/Union1.webp";
import unionThree from "../../Photos/UnionRes/union3.webp";
import unionFive from "../../Photos/UnionRes/Union5.webp";
import unionSix from "../../Photos/UnionRes/Union6.webp";

export type UnionSlide = {
  image: StaticImageData;
  alt: string;
};

export const unionSlides: UnionSlide[] = [
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

