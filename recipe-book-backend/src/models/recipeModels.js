const AWS = require("aws-sdk");

AWS.config.update({ region: "eu-west-2" });
const dynamoDb = new AWS.DynamoDB.DocumentClient();

class Recipe {
  constructor({ RecipesID, recipeName, ingredients, instructions }) {
    this.RecipesID = RecipesID;
    this.recipeName = recipeName;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }

  async save() {
    try {
      const params = {
        TableName: "recipes",
        Item: {
          RecipesID: this.RecipesID,
          recipeName: this.recipeName,
          ingredients: this.ingredients,
          instructions: this.instructions,
        },
      };

      await dynamoDb.put(params).promise();
    } catch (error) {
      console.error("Error saving recipe to DynamoDB", error);
      throw error;
    }
  }
}

module.exports = Recipe;
