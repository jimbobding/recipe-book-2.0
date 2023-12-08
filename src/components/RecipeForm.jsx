// RecipeForm.js

import {
  faClock,
  faPersonWalking,
  faScaleBalanced,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEventHandler, useState } from "react";

const RecipeForm = ({ addRecipe }) => {
  const [recipeData, setRecipeData] = useState({
    RecipesID: "",
    recipeName: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setRecipeData((prevData) => ({
      ...prevData,
      [name]: name === "RecipesID" ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(recipeData);
  };

  return (
    <>
      <form>
        <div className="grid-container">
          <div className="grid-columns">
            <div className="icon">
              {/* <FontAwesomeIcon className="fa-icon" icon={faUser} />{" "} */}
            </div>
            <div className="icon">
              {" "}
              <FontAwesomeIcon
                className="fa-icon"
                icon={faScaleBalanced}
              />{" "}
              <label>
                Recipe Name:
                <input
                  type="text"
                  name="recipeName"
                  value={recipeData.recipeName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="icon">
              {" "}
              <label>
                Ingredients:
                <textarea
                  type="text"
                  rows="10"
                  cols="35"
                  id="ingredients"
                  name="ingredients"
                  value={recipeData.ingredients}
                  onChange={handleChange}
                  className="ingredients-text-area"
                />
              </label>
            </div>

            <div className="row"></div>
          </div>
          <div className="grid-columns"> </div>
          <div className="grid-columns"></div>
          <div className="grid-columns">
            <div className="icon">
              <label htmlFor="instructions">Instructions:</label>
              <textarea
                type="text"
                rows="10"
                cols="35"
                id="instructions"
                name="instructions"
                value={recipeData.instructions}
                onChange={handleChange}
                className="instructions-text-area"
              />
            </div>
          </div>

          {/* <div className="grid-one-columns">
            <div class Name="column col1">
              <div className="card">
                <div className="card-container">
                  <h4></h4>
                  <p></p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <button type="button" onClick={handleSubmit}>
          Create Recipe
        </button>
      </form>
    </>
  );
};

export default RecipeForm;
