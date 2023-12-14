import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const RecipeForm = ({ addRecipe }) => {
  const [recipeData, setRecipeData] = useState({
    recipeId: "",
    recipeName: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setRecipeData((prevData) => ({
      ...prevData,
      [name]: value,
      recipeId: uuidv4(),

      // [name]: name === "RecipeID" ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!recipeData.recipeId) {
    //   console.error("RecipeID is required.");

    //   return;
    // }
    const recipeIdUnique = uuidv4();
    console.log("recipeIdUnique", recipeIdUnique);
    console.error("RecipeID", recipeData.recipeId);
    console.error("Recipe data", recipeData);

    try {
      const response = await axios.post(
        "https://qmryxmsuoe.execute-api.eu-west-2.amazonaws.com/recipe/recipe",
        recipeData
      );

      const newRecipe = response.data;
      console.log("newRecipe", newRecipe);

      // Clear the form after successful submission
      setRecipeData({
        recipeId: "",
        recipeName: "",
        ingredients: "",
        instructions: "",
      });
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  };

  return (
    <>
      <form>
        <div className="grid-container">
          <div className="grid-columns">
            <div className="icon">
              {/* Add your FontAwesomeIcon or other UI elements here */}
            </div>
            <div className="icon">
              {/* <label>
                Recipe id:
                <input
                  type="string"
                  name="recipeId"
                  value={recipeData.recipeId}
                  onChange={handleChange}
                />
              </label> */}
            </div>
            <div className="icon">
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
        </div>
        <button type="button" onClick={handleSubmit}>
          Create Recipe
        </button>
      </form>
    </>
  );
};

export default RecipeForm;
