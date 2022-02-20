const express = require("express");
const upload = require("../../middleware/multer");
const {
  controllerGetCategory,
  controllerAddCategory,
  controllerAddRecipe,
} = require("./controllers");

const router = express.Router();

// Params Middleware
router.param("categoryId", async (req, res, next, categoryId) => {
  const category = await fetchCategory(categoryId, next);
  req.category = category;
  next();
});

router.get("/", controllerGetCategory);
router.post("/", upload.single("image"), controllerAddCategory);

module.exports = router;
