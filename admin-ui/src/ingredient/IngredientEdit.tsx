import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { RecipeTitle } from "../recipe/RecipeTitle";

export const IngredientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceInput source="recipe.id" reference="Recipe" label="Recipe">
          <SelectInput optionText={RecipeTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="stockQuantity" source="stockQuantity" />
      </SimpleForm>
    </Edit>
  );
};
