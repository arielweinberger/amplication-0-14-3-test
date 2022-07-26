import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { RecipeTitle } from "../recipe/RecipeTitle";

export const IngredientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceInput source="recipe.id" reference="Recipe" label="Recipe">
          <SelectInput optionText={RecipeTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="stockQuantity" source="stockQuantity" />
      </SimpleForm>
    </Create>
  );
};
