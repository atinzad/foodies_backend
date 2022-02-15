const Category = require("../../models/Category");

exports.controllerGetCategory = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.json(error);
  }
};
