import axios from "axios";
import React, { useState, useEffect } from "react";

const RecipeList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://qmryxmsuoe.execute-api.eu-west-2.amazonaws.com/recipe/recipes"
      );
      const responseData = response.data;
      console.log(responseData, "responseData");

      if (responseData && responseData.recipes) {
        setData(responseData.recipes);
      } else {
        throw new Error("Invalid response structure");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message || "An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (recipeId) => {
    try {
      const response = await fetch(
        "https://qmryxmsuoe.execute-api.eu-west-2.amazonaws.com/recipe/recipe",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            // Add other headers if needed (e.g., Authorization)
          },
          body: JSON.stringify({
            recipeId: recipeId,
          }),
        }
      );

      if (response.ok) {
        console.log("Recipe deleted successfully.");
        window.location.reload();
        // Handle the response if needed (although DELETE requests often don't have a response)
      } else {
        console.error("Error deleting recipe. Status:", response.status);
        console.error("Server Response:", await response.text());
      }
    } catch (error) {
      console.error("Error deleting recipe:", error);
      setError(error.message || "An error occurred while deleting recipe.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="recipe-container">
      {data.map((item) => (
        <div key={item.recipeId}>
          <div className="recipe-name">
            <label>
              Recipe Name:
              <div className="recipe-name"></div>
              <div>{item.recipeName}</div>
            </label>
          </div>
          <div className="recipe-ingredients">
            Ingredients
            <div className="ingredients">{item.ingredients}</div>
          </div>
          <div className="recipe-instructions">Instructions</div>
          <div>{item.instructions}</div>
          <button type="button" onClick={() => deleteData(item.recipeId)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
