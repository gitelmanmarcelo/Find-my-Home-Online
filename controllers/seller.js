const { 
    loginSeller, 
    insertSeller,
    } = require('../modules/seller.js');

const bcrypt = require('bcrypt');

const _insertSeller = async (req,res) => {
    const seller = req.body;

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(seller.password,salt);

    seller.password = hashPassword;

    insertSeller(seller)
    .then(data => {
         res.json(data);
        })
    .catch( err => {
        console.log(err);
        res.status(403).json({msg:'Email already exists!'})
    })
}

const _loginSeller = (req, res) => {
    loginSeller(req.body.username)
    .then( async (data) => {
        const match = await bcrypt.compare(req.body.password, data[0].password);
        if (!match)
            return res.status(400).json({msg:'Wrong password!'});
        else
            res.status(200).json({msg: "login success"});
           })
   .catch( err => {
       console.log(err);
   })

};

module.exports = {
    _insertSeller,
    _loginSeller,
};

