const express = require("express");
const categoryRoutes = require("./apis/category/routes");
const connectDB = require("./database/database");

const app = express();

app.use(express.json());

app.use("/api/category", categoryRoutes);

const port = 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
  connectDB();
});
