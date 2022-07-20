import { SortOrder } from "../../util/SortOrder";

export type RecipeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  orderId?: SortOrder;
  updatedAt?: SortOrder;
};
