const { 
    getSeller, 
    loginSeller, 
    insertSeller,
    } = require('../modules/seller.js');

const bcrypt = require('bcrypt');

const _insertSeller = async (req,res) => {
    const seller = req.body;

    if (!seller.password) {
        console.log("password not provided");
        res.status(403).send({msg:'password not provided!'});
        return;
    }

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
        if (!data[0])
            return res.status(400).json({msg:'Wrong password!'});
        const match = await bcrypt.compare(req.body.password, data[0].password);
        if (!match)
            return res.status(400).json({msg:'Wrong password!'});
        else
            res.status(200).json({seller_id: data[0].seller_id});
           })
   .catch( err => {
       console.log(err);
   })

};

const _getSeller = (req, res) => {
    getSeller(req.body.seller_id)
    .then( async (data) => {
        if (!data[0])
            return res.status(400).json({msg:'Wrong seller id!'});
        res.status(200).send(data);
           })
   .catch( err => {
       console.log(err);
   })

};

module.exports = {
    _insertSeller,
    _loginSeller,
    _getSeller,
};

