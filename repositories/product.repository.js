const BaseRespository = require('./base.repository');
const product = require('../models/product.model');

class ProdcutRepository extends BaseRespository {
    constructor() {
        super(product);
    }
}

module.exports = ProdcutRepository;