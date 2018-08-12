const express = require('express');
const mongoose = require('mongoose');
const products = require('./routes/api/products');
const app = express();
//DB CONFIG
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db)
  .then(() => {
    console.log('Mongo DB Connected');
  })
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.use('/api/products', products);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
