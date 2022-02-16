const express = require("express");
const categoryRoutes = require("./apis/category/routes");
const connectDB = require("./database/database");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/category", categoryRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));

const port = 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
  connectDB();
});
