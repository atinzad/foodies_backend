const Ingredient = require("../../models/Ingredient");

exports.controllerGetIngredient = async (req, res, next) => {
  try {
    const ingredient = await Ingredient.find();
    res.json({ msg: "Getting Ingredients", payload: ingredient });
  } catch (error) {
    res.json(error);
  }
};

exports.controllerAddIngredient = async (req, res, next) => {
  try {
    const ingredient = req.body;
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    const ingredientCreated = await Ingredient.create(ingredient);
    res
      .status(201)
      .json({ msg: "Created Ingredient", payload: ingredientCreated });
  } catch (error) {
    res.json(error);
  }
};
