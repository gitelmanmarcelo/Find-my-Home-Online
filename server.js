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


const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'C:/projects/Find-my-home/fmh-client/public/uploads')
    },
    filename: function (req, file, cb) {
        console.log("req2",file)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })

const upload = multer({storage:storage});
    // dest: 'uploads/'}); //, // Destination directory for uploaded files
//     limits: {
//       fileSize: 1000000, // Maximum file size in bytes (1 MB)
//     },
//     fileFilter: (req, file, cb) => {
//       // Check file type
//       if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//         return cb(new Error('Only JPG, JPEG and PNG files are allowed!'));
//       }
//       cb(null, true);
//     },
//   });

app.post('/upload-multiple',upload.fields([{ name: 'avatar' }]))

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    console.log("file:",req.file)
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })
  
// Define a route for handling file uploads
app.post('/upload', upload.single('image'), (req, res) => {
    // Multer middleware has added the file object to the request object
    const file = req.file;
    console.log(file);
    res.send('File uploaded successfully!');
  });

// app.post('/upload', (req,res) => {
//     console.log("body",req.body)
//     // const { image } = req.files;

//     // if (!image) return res.sendStatus(400);

//     // image.mv(__dirname + "/photos/0099-1.jpeg");

//     res.sendStatus(200);
// })
