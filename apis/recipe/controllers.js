const Recipe = require("../../models/Recipe");

exports.controllerGetRecipe = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.json({ msg: "Getting Recipes", payload: recipes });
  } catch (error) {
    next(error);
  }
};

exports.controllerAddRecipe = async (req, res, next) => {
  try {
    const recipe = req.body;
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    const recipeCreated = await Recipe.create(recipe);
    res.status(201).json({ msg: "Created Recipe", payload: recipeCreated });
  } catch (error) {
    res.json(error);
  }
};
