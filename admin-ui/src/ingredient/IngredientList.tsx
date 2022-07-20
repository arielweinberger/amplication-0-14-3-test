import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RECIPE_TITLE_FIELD } from "../recipe/RecipeTitle";

export const IngredientList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Ingredients"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <ReferenceField label="Recipe" source="recipe.id" reference="Recipe">
          <TextField source={RECIPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="stockQuantity" source="stockQuantity" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
