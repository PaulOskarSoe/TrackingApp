const express     = require('express')
const markerRoute = require('./routes/marker')
const app         = express()
const PORT        = 8080
const mongoose    = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/marker', markerRoute);


const listen = () => app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`)
})

mongoose.connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log('Database access success!');
    listen();
  })
  .catch((err) => {
    console.log('Database access unsuccessful: ', err);
  });
