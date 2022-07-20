import { StringFilter } from "../../util/StringFilter";
import { IngredientListRelationFilter } from "../ingredient/IngredientListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RecipeWhereInput = {
  id?: StringFilter;
  ingredients?: IngredientListRelationFilter;
  name?: StringNullableFilter;
};
