import { Ingredient } from "../ingredient/Ingredient";

export type Recipe = {
  createdAt: Date;
  id: string;
  ingredients?: Array<Ingredient>;
  name: string | null;
  updatedAt: Date;
};
