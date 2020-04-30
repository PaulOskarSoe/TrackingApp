const express = require('express');
const router  = express.Router();
const Marker  = require('./../models/Marker');

router.get('/', async (req, res) => {
  try {
    const markers = await Marker.find({});
    if(markers){
      res.json({ success: true, markers, code: 200 });
    }
  } catch (error) {
    console.error('Error while getting markers: ', error);
    res.json({ error });
  }
});

router.post('/', async (req, res) => {
  const { deviceId, deviceName, lattitude, longitude } = req.body;
  
  try {
    const newPosition = await Marker.update({ deviceId },{ $set : { deviceId, deviceName, lattitude, longitude }} , { upsert: true });
    res.json({ success: true, message: "Marker was updated", newPosition, code: 200});
  } catch (error) {
    console.error('Error while adding devince or new position to database!');
    res.json({ error });
  }
});
module.exports = router;


