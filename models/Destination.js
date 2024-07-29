const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: String,
  description: String,
  rate: Number,
});

module.exports = mongoose.model('Destination', destinationSchema);