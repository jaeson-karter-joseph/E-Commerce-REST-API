const express = require("express");
const router = express.Router();

const CategoryController = require("../controllers/category.controller");
const categoryController = new CategoryController();

router.get("/getall", categoryController.getAll);
router.post("/add", categoryController.add);

module.exports = router;
