const mongoose = require('mongoose');

const MarkerSchema = mongoose.Schema({
  deviceID    : String,
  deviceName  : String,
  lattitude   : String,
  longitude   : String,
});

module.exports = MarkerSchema;