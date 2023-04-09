const { 
    insertBuyer
    } = require('../modules/buyer.js');


const _insertBuyer = async (req,res) => {

    insertBuyer(req.body)
    .then(data => {
         res.json(data);
        })
    .catch( err => {
        console.log(err);
        res.status(403).json({msg:'Insertion error!'})
    })
}

module.exports = {
    _insertBuyer
};

