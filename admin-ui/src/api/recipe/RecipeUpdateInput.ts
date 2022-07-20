import { IngredientUpdateManyWithoutRecipesInput } from "./IngredientUpdateManyWithoutRecipesInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type RecipeUpdateInput = {
  ingredients?: IngredientUpdateManyWithoutRecipesInput;
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
};
