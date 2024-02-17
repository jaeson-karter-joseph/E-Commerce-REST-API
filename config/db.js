const mongoose = require("mongoose");
const mongoDB_Url =
  process.env.MONGODB_URL || "mongodb://localhost:27017/expressapi";

mongoose.connect(mongoDB_Url);
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});
mongoose.connection.on("error", (err) => {
  console.log("MongoDB Connection Error", err.message);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is disconnected!!!!");
});
