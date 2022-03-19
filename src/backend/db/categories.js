import { v4 as uuid } from "uuid";
import { bags } from "../../assets/images";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    imageName: bags,
    categoryName: "Showpieces",
    alt: "Showpieces",
  },
  {
    _id: uuid(),
    imageName: bags,
    categoryName: "Wall decor",
    alt: "Wall decor",
  },
  {
    _id: uuid(),
    imageName: bags,
    categoryName: "Clocks",
    alt: "Clocks",
  },
  {
    _id: uuid(),
    imageName: bags,
    categoryName: "Plant & Planters",
    alt: "Plant & Planters",
  },
];
