import { Ingredient } from "../ingredient/Ingredient";
import { Order } from "../order/Order";

export type Recipe = {
  createdAt: Date;
  id: string;
  ingredients?: Array<Ingredient>;
  name: string | null;
  order?: Order | null;
  updatedAt: Date;
};
