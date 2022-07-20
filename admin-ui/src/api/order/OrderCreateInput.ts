import { RecipeCreateNestedManyWithoutOrdersInput } from "./RecipeCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  recipes?: RecipeCreateNestedManyWithoutOrdersInput;
};
