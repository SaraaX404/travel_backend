const mongoose = require('mongoose');

const destinationPhotoSchema = new mongoose.Schema({
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' },
  imageURL: String,
});

module.exports = mongoose.model('DestinationPhoto', destinationPhotoSchema);