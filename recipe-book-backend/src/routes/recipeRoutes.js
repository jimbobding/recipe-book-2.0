// const express = require("express");
// const router = express.Router();

// router.post("/", recipeController.addRecipe);

// module.exports = router;

const express = require("express");
const recipeController = require("../controllers/recipeController");

const router = express.Router();

router.post("/", recipeController.addRecipe);

module.exports = router;
