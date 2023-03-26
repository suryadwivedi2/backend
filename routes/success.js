const path = require('path');
const express = require('express');
const router = express.Router();

const rootdir = require('../util/path.js');
const productcontroller=require('../controllers/product.js');

router.post("/success",productcontroller.postsucess);



module.exports = router;