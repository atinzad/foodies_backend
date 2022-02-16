const express = require("express");
const upload = require("../../middleware/multer");
const {
  controllerGetIngredient,
  controllerAddIngredient,
} = require("./controllers");
const router = express.Router();

router.get("/", controllerGetIngredient);
router.post("/", upload.single("image"), controllerAddIngredient);

module.exports = router;
