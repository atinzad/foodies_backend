const express = require("express");
const upload = require("../../middleware/multer");
const { fetchCategory } = require("../category/controllers");
const {
  controllerGetRecipe,
  controllerAddRecipe,
  controllerUpdateRecipe,
} = require("./controllers");

const router = express.Router();

router.param("recipeId", async (req, res, next, recipeId) => {
  try {
    const recipe = await fetchRecipe(recipeId, next);
    req.recipe = recipe;
    next();
  } catch (error) {
    next(error);
  }
});

router.param("categoryId", async (req, res, next, categoryId) => {
  try {
    const category = await fetchCategory(categoryId, next);
    req.category = category;
    next();
  } catch (error) {
    next(error);
  }
});

router.get("/", controllerGetRecipe);
router.post("/", upload.single("image"), controllerAddRecipe);
router.post("/:categoryId", upload.single("image"), controllerAddRecipe);
router.put("/:recipeId", upload.single("image"), controllerUpdateRecipe);

module.exports = router;
