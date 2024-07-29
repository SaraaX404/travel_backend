const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  rate: Number,
});

module.exports = mongoose.model('Restaurant', restaurantSchema);