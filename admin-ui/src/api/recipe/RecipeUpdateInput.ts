import { IngredientUpdateManyWithoutRecipesInput } from "./IngredientUpdateManyWithoutRecipesInput";

export type RecipeUpdateInput = {
  ingredients?: IngredientUpdateManyWithoutRecipesInput;
  name?: string | null;
};
