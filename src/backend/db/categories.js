import { v4 as uuid } from "uuid";
import { showpiece, clock2, plant1, wallDecor } from "../../assets/images";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    imageName: showpiece,
    categoryName: "Show Pieces",
    alt: "Showpieces",
  },
  {
    _id: uuid(),
    imageName: wallDecor,
    categoryName: "Wall Decor",
    alt: "Wall decor",
  },
  {
    _id: uuid(),
    imageName: clock2,
    categoryName: "Clocks",
    alt: "Clocks",
  },
  {
    _id: uuid(),
    imageName: plant1,
    categoryName: "Plant & Planters",
    alt: "Plant & Planters",
  },
];
