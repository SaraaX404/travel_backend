const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' },
  text: String,
  rating: Number,
});

module.exports = mongoose.model('Review', reviewSchema);