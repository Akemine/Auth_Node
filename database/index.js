const mongoose = require('mongoose');

exports.clientPromise = mongoose
  .connect(
    "mongodb+srv://akemine56:root@cluster0.ymfcysv.mongodb.net/twitter?retryWrites=true&w=majority"
  )
  .then((client) => {
    console.log('Connected to MongoDB');
    return client;
  })
  .catch((err) => {
    console.log(err);
  });
