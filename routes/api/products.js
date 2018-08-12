const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');
const bcrypt = require('bcryptjs');
//  @route GET api/products/test
//  @DESC Test Products Route
//  @access PUBLIC
router.get('/test', (req, res) => {
  res.json({
    message: 'Products Works'
  });
});

//  @route GET api/products/addProduct
//  @DESC Adds a Product Route
//  @access PUBLIC
router.post('/addProduct', (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price
  });
  newProduct
    .save()
    .then(product => {
      return res.json(product);
    })
    .catch(err => {
      console.log(err);
    });
});
module.exports = router;
