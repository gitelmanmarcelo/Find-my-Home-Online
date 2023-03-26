const express = require('express');
const { 
    _loginSeller,
    _insertSeller} = require("../controllers/seller.js");

const router = express.Router()

router.post('/register',_insertSeller);

router.post('/login',_loginSeller);

module.exports = router;
