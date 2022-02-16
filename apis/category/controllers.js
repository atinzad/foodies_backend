const Category = require("../../models/Category");

exports.fetchCategory = async (categoryId, next) => {
  try {
    const category = await Category.findById(categoryId);
    if (category) return category;
    else {
      const err = new Error("Category not found");
      err.status = 404;
      next(err);
    }
  } catch (error) {
    next(error);
  }
};

exports.controllerGetCategory = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.json({ msg: "Getting Catagories", payload: categories });
  } catch (error) {
    res.json(error);
  }
};

exports.controllerAddCategory = async (req, res, next) => {
  try {
    const category = req.body;
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    const categoryCreated = await Category.create(category);
    res.status(201).json({ msg: "Created Category", payload: categoryCreated });
  } catch (error) {
    res.json(error);
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
