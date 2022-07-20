import { StringFilter } from "../../util/StringFilter";
import { IngredientListRelationFilter } from "../ingredient/IngredientListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type RecipeWhereInput = {
  id?: StringFilter;
  ingredients?: IngredientListRelationFilter;
  name?: StringNullableFilter;
  order?: OrderWhereUniqueInput;
};
