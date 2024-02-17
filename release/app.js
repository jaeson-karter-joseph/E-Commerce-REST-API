const express = require("express");

//Load Environment Variables
require("dotenv").config();

//SetUp Database
require("./src/config/db");

//Load Routes
const apiRoutes = require("./src/routes/api.routes");
const app = express();
app.use(express.json());

//Api Routes
app.use("/api", apiRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
