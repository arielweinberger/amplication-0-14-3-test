import { Recipe } from "../recipe/Recipe";

export type Order = {
  createdAt: Date;
  id: string;
  recipes?: Array<Recipe>;
  updatedAt: Date;
};
