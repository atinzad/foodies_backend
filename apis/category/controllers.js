const Category = require("../../models/Category");

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
