import { IngredientCreateNestedManyWithoutRecipesInput } from "./IngredientCreateNestedManyWithoutRecipesInput";

export type RecipeCreateInput = {
  ingredients?: IngredientCreateNestedManyWithoutRecipesInput;
  name?: string | null;
};
