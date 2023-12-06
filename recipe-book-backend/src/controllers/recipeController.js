const AWS = require("aws-sdk");
AWS.config.update({ region: "eu-west-2" });
const dynamoDb = new AWS.DynamoDB.DocumentClient();

class RecipeController {
  async getAllRecipes(req, res) {
    try {
      const params = {
        TableName: "recipes",
      };

      const data = await dynamoDb.scan(params).promise();
      console.log("Successfully fetched recipes:", data.Items);
      res.json(data.Items);
    } catch (error) {
      console.error("Error fetching recipes", error);
      res.status(500).json({ error: "Error fetching recipes" });
    }
  }

  async getRecipeById(req, res) {
    const recipeId = req.params.id;

    try {
      const params = {
        TableName: "recipes",
        Key: {
          id: recipeId,
        },
      };

      const data = await dynamoDb.get(params).promise();
      console.log("Successfully fetched recipe:", data.Item);
      res.json(data.Item);
    } catch (error) {
      console.error("Error fetching recipe", error);
      res.status(500).json({ error: "Error fetching recipe" });
    }
  }
}

module.exports = new RecipeController();
