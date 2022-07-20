import { StringFilter } from "../../util/StringFilter";
import { RecipeListRelationFilter } from "../recipe/RecipeListRelationFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  recipes?: RecipeListRelationFilter;
};
