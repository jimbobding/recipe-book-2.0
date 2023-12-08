// const express = require("express");
// const recipeRoutes = require("./src/routes/recipeRoutes");
// const cors = require("cors");

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());
// app.use(cors());
// app.use("/api/recipes", recipeRoutes);

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port} like a boss`);
// });

const express = require("express");
const recipeRoutes = require("./src/routes/recipeRoutes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/api/recipes", recipeRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
