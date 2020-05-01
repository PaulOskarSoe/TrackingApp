const mongoose = require('mongoose');

const MarkerSchema = mongoose.Schema({
  deviceId    : String,
  deviceName  : String,
  latitude    : String,
  longitude   : String,
});

module.exports = mongoose.model('marker', MarkerSchema);