const AWS = require("aws-sdk");

AWS.config.update({ region: "eu-west-2" });
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: "recipes",
  Item: {
    "RecipesID (Number)": 2, // Use the next unique numeric value
    recipName: "ExampleRecipe",
  },
};

console.log("Attempting to insert item:", JSON.stringify(params.Item, null, 2));

dynamoDb.put(params, (error, data) => {
  if (error) {
    console.error("Error inserting item:", error);
    console.log("Error details:", JSON.stringify(error, null, 2));
  } else {
    console.log("Item inserted successfully:", data);
  }
});
