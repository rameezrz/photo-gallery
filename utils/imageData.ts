export interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

import img1 from "../public/images/file (1).jpg";
import img2 from "../public/images/file (2).jpg";
import img3 from "../public/images/file (3).jpg";
import img4 from "../public/images/file (4).jpg";
import img5 from "../public/images/file (5).jpg";
import img6 from "../public/images/file (6).jpg";

export const images: ImageData[] = [
  {
    src: img1.src,
    alt: "Tropical beach",
    width: 800,
    height: 533,
  },
  {
    src: img2.src,
    alt: "Forest pathway",
    width: 800,
    height: 533,
  },
  {
    src: img3.src,
    alt: "Misty mountain lake",
    width: 800,
    height: 533,
  },
  {
    src: img4.src,
    alt: "Desert landscape",
    width: 800,
    height: 533,
  },
  {
    src: img5.src,
    alt: "Autumn forest",
    width: 800,
    height: 533,
  },
  {
    src: img6.src,
    alt: "Tropical beach",
    width: 800,
    height: 533,
  },
];
