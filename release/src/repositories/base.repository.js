class BaseRepository {
  constructor(_collection) {
    this.collection = _collection;
  }

  async findAll() {
    var data = await this.collection.find().lean().exec();
    return data;
  }

  async findById(id) {
    return this.collection.findById(id);
  }
  async create(model) {
    return this.collection.create(model);
  }
  async update(model) {
    return this.collection.findByIdAndUpdate(model._id, model);
  }
  async deleteById(id) {
    return this.collection.findByIdAndDelete(id);
  }
}

module.exports = BaseRepository;
