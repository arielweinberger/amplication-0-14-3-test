import { SortOrder } from "../../util/SortOrder";

export type IngredientOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  recipeId?: SortOrder;
  stockQuantity?: SortOrder;
  updatedAt?: SortOrder;
};
