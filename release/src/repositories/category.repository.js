const BaseRespository = require('./base.repository');
const category = require('../models/category.model');

class CategoryRepository extends BaseRespository {
    constructor() {
        super(category);
    }
}

module.exports = CategoryRepository;