const express = require("express");
const { controllerGetCategory } = require("./controllers");

const router = express.Router();

router.get("/", controllerGetCategory);

module.exports = router;
