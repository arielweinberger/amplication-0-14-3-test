import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";

export type IngredientCreateInput = {
  name?: string | null;
  recipe?: RecipeWhereUniqueInput | null;
  stockQuantity?: number | null;
};
