const express = require('express');
const { 
    _searchRaw,
    _searchApt,
    _insertApt} = require("../controllers/aparts.js");

const router = express.Router()

router.post('/register',_insertApt);

router.post('/search',_searchApt);

router.post('/searchraw',_searchRaw);

module.exports = router;
