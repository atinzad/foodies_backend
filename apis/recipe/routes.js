const express = require("express");
const upload = require("../../middleware/multer");
const { controllerGetRecipe, controllerAddRecipe } = require("./controllers");

const router = express.Router();

router.get("/", controllerGetRecipe);
router.post("/", upload.single("image"), controllerAddRecipe);

module.exports = router;
