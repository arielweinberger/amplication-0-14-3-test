import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { IngredientList } from "./ingredient/IngredientList";
import { IngredientCreate } from "./ingredient/IngredientCreate";
import { IngredientEdit } from "./ingredient/IngredientEdit";
import { IngredientShow } from "./ingredient/IngredientShow";
import { RecipeList } from "./recipe/RecipeList";
import { RecipeCreate } from "./recipe/RecipeCreate";
import { RecipeEdit } from "./recipe/RecipeEdit";
import { RecipeShow } from "./recipe/RecipeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"pizzashop-backoffice"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Ingredient"
          list={IngredientList}
          edit={IngredientEdit}
          create={IngredientCreate}
          show={IngredientShow}
        />
        <Resource
          name="Recipe"
          list={RecipeList}
          edit={RecipeEdit}
          create={RecipeCreate}
          show={RecipeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
