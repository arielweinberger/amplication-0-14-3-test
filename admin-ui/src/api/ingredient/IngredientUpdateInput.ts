import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";

export type IngredientUpdateInput = {
  name?: string | null;
  recipe?: RecipeWhereUniqueInput | null;
  stockQuantity?: number | null;
};
