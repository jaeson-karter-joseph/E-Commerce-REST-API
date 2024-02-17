const httpStatusCodes = require("http-status-codes");
const CategoryRepository = require("../repositories/category.repository");

class CategoryController {
  constructor() {
    this.repo = new CategoryRepository();
  }

  getAll = (req, res) => {
    this.repo
      .findAll()
      .then((doc) => {
        res.status(httpStatusCodes.StatusCodes.OK).json({
          message: "Category fetched successfully",
          categories: doc,
        });
      })
      .catch((err) => {
        res.status(httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
          message: "Internal Server Error",
          error: err,
        });
      });
  };

  add = (req, res) => {
    const body = req.body;

    this.repo
      .create(body)
      .then((doc) => {
        res.status(httpStatusCodes.StatusCodes.CREATED).json({
          message: "Category added successfully",
          category: doc,
        });
      })
      .catch((err) => {
        res.status(httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
          message: "Internal Server Error",
          error: err,
        });
      });
  };
}

module.exports = CategoryController;
