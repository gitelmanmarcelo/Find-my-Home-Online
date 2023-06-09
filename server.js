const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const seller_router = require('./routes/seller.js')
const buyer_router = require('./routes/buyer.js')
const apart_router = require('./routes/aparts.js')

dotenv.config();

const app = express();
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',express.static(__dirname + '/fmh-client/build'));

app.listen(process.env.PORT, () => { console.log('run on port '+ process.env.PORT)});

app.use('/seller', seller_router);

app.use('/buyer', buyer_router);

app.use('/apartment', apart_router);

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/fmh-client/build/photos')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })

const upload = multer({storage:storage});

app.post('/upload-multiple',upload.fields([{ name: 'photo' }]), function (req, res, next) {
  res.sendStatus(200);
  })

app.post('/upload-single', upload.single('photo'), function (req, res, next) {
  res.sendStatus(200);
  })

  app.use(express.static(path.join(__dirname,'fmh-client/build')));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./fmh-client/build','index.html'))
  });