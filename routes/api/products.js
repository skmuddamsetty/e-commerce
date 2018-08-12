const express = require('express');
const router = express.Router();

//  @route GET api/products/test
//  @DESC Test Products Route
//  @access PUBLIC
router.get('/test', (req, res) => {
  res.json({
    message: 'Products Works'
  });
});
module.exports = router;
