const express = require('express');
const { 
    _loginSeller,
    _getSeller,
    _insertSeller} = require("../controllers/seller.js");

const router = express.Router()

router.post('/register',_insertSeller);

router.post('/login',_loginSeller);

router.post('/getSeller',_getSeller);

module.exports = router;
