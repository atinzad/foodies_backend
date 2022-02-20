const Category = require("../../models/Category");
const Recipe = require("../../models/Recipe");
const Ingredient = require("../../models/Ingredient");

exports.fetchRecipe = async (recipeId, next) => {
  try {
    const recipe = Recipe.findById(recipeId);
    if (recipe) {
      return recipe;
    } else {
      const error = new Error(`could not find ${recipeId}`);
      error.status = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

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
    if (req.category) {
      req.body.category = req.category._id;
    }
    console.log("ing", !req.body.ingredients);
    if (req.body.ingredients) {
      recipe.ingredients = req.body.ingredients.split(",");
    } else {
      recipe.ingredients = [];
    }

    const recipeCreated = await Recipe.create(recipe);
    if (req.category) {
      await Category.findOneAndUpdate(
        req.category._id,
        { $push: { recipes: recipeCreated._id } },
        {
          new: true,
          runValidators: true,
        }
      );
    }
    if (recipeCreated.ingredients) {
      console.log("recipe.ingredients", recipeCreated._id);
      recipeCreated.ingredients.forEach(async (id) => {
        console.log("id", id);
        await Ingredient.findByIdAndUpdate(
          id.toString(),
          { $push: { recipes: recipeCreated._id } },
          {
            new: true,
            runValidators: true,
          }
        );
      });
    }
    res.status(201).json({ msg: "Created Recipe", payload: recipeCreated });
  } catch (error) {
    res.json(error);
  }
};

exports.controllerUpdateRecipe = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    const recipeId = req.recipe._id;
    const shop = req.body;
    const shopUpdated = await Shops.findOneAndUpdate(shopId, shop, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ msg: "Shop Updated", payload: shopUpdated });
  } catch (error) {
    next(error);
  }
};
