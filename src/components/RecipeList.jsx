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

  // const deleteData = async () => {
  //   try {
  //     const response = await axios.delete(
  //       "https://qmryxmsuoe.execute-api.eu-west-2.amazonaws.com/recipe/recipes"
  //     );

  //     // Assuming a successful delete would return a status code of 204 (No Content)
  //     if (response.status === 204) {
  //       // The server responded successfully with no content (as expected for a DELETE request)
  //       console.log("Recipe deleted successfully");
  //     } else {
  //       // Handle other status codes if needed
  //       console.error("Unexpected response status:", response.status);
  //     }
  //   } catch (error) {
  //     console.error("Error deleting data:", error);
  //   } finally {
  //     // Perform any cleanup or UI changes here
  //     setLoading(false);
  //   }
  // };

  const deleteData = async () => {
    try {
      const response = await axios.delete(
        "https://qmryxmsuoe.execute-api.eu-west-2.amazonaws.com/recipe/recipes"
      );
    } catch (error) {
      console.error("Error deleting data:", error);
      console.log("error data", response.data);
      setError(error.message || "An error occurred while deleting data.");
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
    // <div>
    //   <h1>RecipeList</h1>

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
          <button type="button" onClick={deleteData}>
            Delete
          </button>
        </div>
      ))}
    </div>
    // </div>
  );
};

export default RecipeList;
