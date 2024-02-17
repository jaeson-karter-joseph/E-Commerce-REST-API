const httpStatusCodes = require("http-status-codes");

class BaseController {
  constructor(repoClass) {
    this.repo = new repoClass();
  }

  //Common Respone Methods

  ok(res, data) {
    if (!!data) {
      res.status(httpStatusCodes.StatusCodes.OK).json(data);
    } else {
      res.status(httpStatusCodes.StatusCodes.OK).json({
        message: "OK",
      });
    }
  }

  notFound(res) {
    res.status(httpStatusCodes.StatusCodes.NOT_FOUND).json({
      message: "Not Found",
    });
  }

  badRequest(res, message) {
    res.status(httpStatusCodes.StatusCodes.BAD_REQUEST).json({
      message: message || "Bad Request",
    });
  }

  internalServerError(res, err) {
    res.status(httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: err,
    });
  }

  CREATED(res, data) {
    res.status(httpStatusCodes.StatusCodes.CREATED).json(data);
  }

  //Commond DB operations
  getAll = (req, res) => {
    this.repo
      .findAll()
      .then((doc) => {
        return this.ok(res, doc);
      })
      .catch((err) => {
        return this.internalServerError(res, err);
      });
  };

  add = (req, res) => {
    const body = req.body;

    this.repo
      .create(body)
      .then((doc) => {
        return this.CREATED(res, doc);
      })
      .catch((err) => {
        return this.internalServerError(res, err);
      });
  };

  update = (req, res) => {
    const body = req.body;
    this.repo
      .update(body)
      .then((doc) => {
        return this.ok(res, doc);
      })
      .catch((err) => {
        return this.internalServerError(res, err);
      });
  };

  deleteById = (req, res) => {
    const id = req.params.id;
    this.repo
      .deleteById(id)
      .then(() => {
        return this.ok(res);
      })
      .catch((err) => {
        return this.internalServerError(res, err);
      });
  };

  getById = (req, res) => {
    const id = req.params.id;
    this.repo
      .findById(id)
      .then((doc) => {
        if (!!doc) {
          return this.ok(res, doc);
        } else {
          return this.notFound(res);
        }
      })
      .catch((err) => {
        return this.internalServerError(res, err);
      });
  };
}

module.exports = BaseController;
