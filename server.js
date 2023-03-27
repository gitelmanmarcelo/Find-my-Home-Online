const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const seller_router = require('./routes/seller.js')
const apart_router = require('./routes/aparts.js')

dotenv.config();

const app = express();
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',express.static(__dirname + '/fmh-client/public'));

app.listen(process.env.PORT, () => { console.log('run on port '+ process.env.PORT)});

app.use('/seller', seller_router);

app.use('/apartment', apart_router);
