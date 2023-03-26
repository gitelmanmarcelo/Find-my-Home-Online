const { 
    searchApt, 
    insertApt,
    searchRaw
    } = require('../modules/aparts.js');

const _insertApt = (req,res) => {
    insertApt(req.body)
    .then(data => {
         res.json(data);
        })
    .catch( err => {
        console.log(err);
        res.status(403).json({msg:'error in db insert!'})
    })
}

const _searchApt = (req, res) => {
    searchApt(req.body.condition)
    .then( data => {
        res.status(200).json(data);})
   .catch( err => {
       console.log(err);
   })

};

const _searchRaw = (req, res) => {
    searchRaw(req.body.sql_sentence)
    .then( data => {
        res.status(200).json(data.rows);})
   .catch( err => {
       console.log(err);
   })

};

module.exports = {
    _insertApt,
    _searchApt,
    _searchRaw
};

