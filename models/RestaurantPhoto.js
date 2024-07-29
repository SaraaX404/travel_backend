const mongoose = require('mongoose');

const restaurantPhotoSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  imageURL: String,
});

module.exports = mongoose.model('RestaurantPhoto', restaurantPhotoSchema);