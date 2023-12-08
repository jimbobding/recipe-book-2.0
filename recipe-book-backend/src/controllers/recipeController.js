const Recipe = require("../models/recipeModels");
const { v4: uuidv4 } = require("uuid");

class RecipeController {
  static async addRecipe(req, res) {
    try {
      const { recipeName, ingredients, instructions } = req.body;
      // const RecipesID = uuidv4().parseInt();
      const RecipesIDString = uuidv4();
      const RecipesID = parseInt(RecipesIDString.replace(/-/g, ""), 16);
      // const RecipesID = 12;
      console.log("RecipesIDSrting", RecipesIDString);
      console.log("RecipesID", RecipesID);

      const recipe = new Recipe({
        RecipesID,
        recipeName,
        ingredients,
        instructions,
      });
      console.log("recipe", recipe);

      // Call the save method on the instance
      await recipe.save();

      res
        .status(201)
        .json({ success: true, message: "Recipe added successfully" });
    } catch (error) {
      console.error("Error adding recipe", error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }
}

module.exports = RecipeController;
