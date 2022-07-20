import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type IngredientWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  recipe?: RecipeWhereUniqueInput;
  stockQuantity?: IntNullableFilter;
};
