const CategoryRepository = require("../repositories/category.repository");
const BaseController = require("./base.controller");

class CategoryController extends BaseController {
  constructor() {
    super(CategoryRepository);
  }
}

module.exports = CategoryController;
