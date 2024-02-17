const ProductRepository = require("../repositories/product.repository");
const BaseController = require("./base.controller");

class ProductController extends BaseController {
  constructor() {
    super(ProductRepository);
  }
}

module.exports = ProductController;
