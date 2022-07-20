import { Recipe } from "../recipe/Recipe";

export type Ingredient = {
  createdAt: Date;
  id: string;
  name: string | null;
  recipe?: Recipe | null;
  stockQuantity: number | null;
  updatedAt: Date;
};
