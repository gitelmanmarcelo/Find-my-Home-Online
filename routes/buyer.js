const express = require('express');

const { 
    _insertBuyer} = require("../controllers/buyer.js");

const router = express.Router()

router.post('/register',_insertBuyer);

module.exports = router;
