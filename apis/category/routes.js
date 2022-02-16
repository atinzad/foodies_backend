const express = require("express");
const upload = require("../../middleware/multer");
const {
  controllerGetCategory,
  controllerAddCategory,
} = require("./controllers");

const router = express.Router();

router.get("/", controllerGetCategory);
router.post("/", upload.single("image"), controllerAddCategory);

module.exports = router;
