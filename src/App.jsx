import React from "react";
import RecipeForm from "./components/RecipeForm";
import axios from "axios";

import "./css/index.css";
import "./css/RecipeList.css";
import RecipeList from "./components/RecipeList";

const App = () => {
  // const addRecipe = async (recipeData) => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/api/recipes",
  //       recipeData
  //     );
  //     console.log(response.data);
  //     console.log("response.data", response.data);
  //   } catch (error) {
  //     console.error("Error adding recipe:", error.response.data);
  //   }
  // };

  return (
    <div>
      {/* <h1>Recipe App</h1> */}
      <RecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
