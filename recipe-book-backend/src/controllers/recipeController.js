const Recipe = require("../models/recipeModels");

module.exports = {
  addRecipe: async (req, res) => {
    const { recipeName, ingredients, instructions } = req.body;

    const recipe = {
      RecipesID: "4", // Replace with a unique identifier (e.g., use a UUID library)
      recipeName,
      ingredients,
      instructions,
    };

    const success = await Recipe.addRecipe(recipe);

    if (success) {
      res.status(201).json({ message: "Recipe added successfully" });
    } else {
      res.status(500).json({ message: "Error adding recipe" });
    }
  },
};
