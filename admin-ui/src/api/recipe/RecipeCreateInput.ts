import { IngredientCreateNestedManyWithoutRecipesInput } from "./IngredientCreateNestedManyWithoutRecipesInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type RecipeCreateInput = {
  ingredients?: IngredientCreateNestedManyWithoutRecipesInput;
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
};
