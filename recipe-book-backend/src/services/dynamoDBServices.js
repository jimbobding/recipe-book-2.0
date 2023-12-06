const AWS = require("aws-sdk");

AWS.config.update({ region: "eu-west-2" });
const dynamoDb = new AWS.DynamoDB.DocumentClient();

class DynamoDbService {
  async getRecipeByName(recipeName) {
    try {
      const params = {
        TableName: "recipes",
        KeyConditionExpression: "#id = :recipeId",
        ExpressionAttributeNames: {
          "#id": "RecipesID", // Replace with your actual partition key attribute name
        },
        ExpressionAttributeValues: {
          ":recipeId": recipeName, // Replace with the actual recipe name you want to query
        },
      };
      console.log(data.Items);
      const data = await dynamoDb.query(params).promise();
      return data.Items;
    } catch (error) {
      console.error("Error querying recipe by name", error);
      throw error; // You might want to handle this error in a more appropriate way in your application
    }
  }
}

module.exports = new DynamoDbService();
