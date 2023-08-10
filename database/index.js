const mongoose = require('mongoose');
require('dotenv').config()

exports.clientPromise = mongoose
  .connect(
    process.env.MONGO_SRV,
  )
  .then((client) => {
    console.log('Connected to MongoDB');
    return client;
  })
  .catch((err) => {
    console.log(err);
  });
