const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/product.controller");
const productController = new ProductController();

router.get("/getall", productController.getAll);
router.get("/getbyid/:id", productController.getById);
router.post("/add", productController.add);
router.put("/update/:id", productController.update);
router.delete("/delete/:id", productController.deleteById);

module.exports = router;
